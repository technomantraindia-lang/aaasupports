import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const assetsDir = path.resolve('assets');
const files = [
  'product-variable-spring-supports.png',
  'product-constant-spring-hangers.png',
  'product-constant-spring-supports.png',
  'product-pipe-clamps-u-bolts.png',
  'product-slides-guides.png',
  'product-custom-fabrication.png',
  'product-marine-pipe-supports.png',
  'product-oil-gas-solutions.png'
];

async function removeBackgroundPrecise(filename) {
  const filePath = path.join(assetsDir, filename);
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${filePath}`);
    return;
  }

  const image = sharp(filePath);
  const metadata = await image.metadata();
  const { width, height } = metadata;

  const { data, info } = await image
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  // Flood fill / BFS from all border pixels (top, bottom, left, right edges)
  const visited = new Uint8Array(width * height);
  const isBg = new Uint8Array(width * height);
  const queue = new Int32Array(width * height);
  let head = 0;
  let tail = 0;

  // Check if a pixel is background color:
  // Background is light blue-grey studio environment
  // Conditions for background:
  // 1. High brightness (L > 150) AND low-to-medium saturation (not strong orange, not dark navy)
  // 2. Or very light (L > 220)
  function isPixelBgColor(r, g, b) {
    const l = 0.299 * r + 0.587 * g + 0.114 * b;
    const diff = Math.max(r, g, b) - Math.min(r, g, b);

    // Orange spring: r is much higher than b (r > 150, b < 100, r - b > 60)
    if (r > 140 && r - b > 50) return false;

    // Dark metal: l < 140
    if (l < 145) return false;

    // Navy blue metal: b is significantly higher than r, but l is dark/mid
    if (l < 165 && (b - r > 45)) return false;

    // Studio background: light blue-grey (b >= g >= r - 10), diff < 70, l >= 150
    if (l >= 150 && diff < 70 && b >= r - 15) {
      return true;
    }

    // Near white
    if (l >= 225) return true;

    return false;
  }

  // Push all border pixels to queue
  for (let x = 0; x < width; x++) {
    // Top border
    let idx = (0 * width + x);
    if (!visited[idx] && isPixelBgColor(data[idx * 4], data[idx * 4 + 1], data[idx * 4 + 2])) {
      visited[idx] = 1;
      isBg[idx] = 1;
      queue[tail++] = idx;
    }
    // Bottom border
    idx = ((height - 1) * width + x);
    if (!visited[idx] && isPixelBgColor(data[idx * 4], data[idx * 4 + 1], data[idx * 4 + 2])) {
      visited[idx] = 1;
      isBg[idx] = 1;
      queue[tail++] = idx;
    }
  }

  for (let y = 0; y < height; y++) {
    // Left border
    let idx = (y * width + 0);
    if (!visited[idx] && isPixelBgColor(data[idx * 4], data[idx * 4 + 1], data[idx * 4 + 2])) {
      visited[idx] = 1;
      isBg[idx] = 1;
      queue[tail++] = idx;
    }
    // Right border
    idx = (y * width + (width - 1));
    if (!visited[idx] && isPixelBgColor(data[idx * 4], data[idx * 4 + 1], data[idx * 4 + 2])) {
      visited[idx] = 1;
      isBg[idx] = 1;
      queue[tail++] = idx;
    }
  }

  // Run BFS
  const neighbors = [-1, 1, -width, width];
  while (head < tail) {
    const curr = queue[head++];
    const cx = curr % width;
    const cy = Math.floor(curr / width);

    // 4-way connectivity
    if (cx > 0) checkNeighbor(curr - 1);
    if (cx < width - 1) checkNeighbor(curr + 1);
    if (cy > 0) checkNeighbor(curr - width);
    if (cy < height - 1) checkNeighbor(curr + width);
  }

  function checkNeighbor(nIdx) {
    if (visited[nIdx]) return;
    visited[nIdx] = 1;
    const r = data[nIdx * 4];
    const g = data[nIdx * 4 + 1];
    const b = data[nIdx * 4 + 2];

    if (isPixelBgColor(r, g, b)) {
      isBg[nIdx] = 1;
      queue[tail++] = nIdx;
    }
  }

  // Also check holes/loops inside (like inside the hanger clamp loop, spring gaps)
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = y * width + x;
      const r = data[idx * 4];
      const g = data[idx * 4 + 1];
      const b = data[idx * 4 + 2];

      const l = 0.299 * r + 0.587 * g + 0.114 * b;
      const diff = Math.max(r, g, b) - Math.min(r, g, b);

      // If it's connected background OR unvisited light background inside loops:
      if (isBg[idx] || (l > 175 && diff < 55 && b >= r - 10 && !(r > 150 && r - b > 50))) {
        data[idx * 4 + 3] = 0; // Transparent
      }
    }
  }

  // Feather edges (simple 1px blur / anti-alias around object boundary)
  for (let y = 1; y < height - 1; y++) {
    for (let x = 1; x < width - 1; x++) {
      const idx = y * width + x;
      if (data[idx * 4 + 3] !== 0) {
        // Check if adjacent to transparent pixel
        const hasTransparentNeighbor =
          data[(idx - 1) * 4 + 3] === 0 ||
          data[(idx + 1) * 4 + 3] === 0 ||
          data[(idx - width) * 4 + 3] === 0 ||
          data[(idx + width) * 4 + 3] === 0;

        if (hasTransparentNeighbor) {
          const r = data[idx * 4];
          const g = data[idx * 4 + 1];
          const b = data[idx * 4 + 2];
          const l = 0.299 * r + 0.587 * g + 0.114 * b;
          if (l > 150) {
            data[idx * 4 + 3] = Math.max(80, Math.min(200, Math.round((200 - l) * 3)));
          }
        }
      }
    }
  }

  const outBuffer = await sharp(data, {
    raw: {
      width: info.width,
      height: info.height,
      channels: 4
    }
  })
    .png({ compressionLevel: 9 })
    .toBuffer();

  fs.writeFileSync(filePath, outBuffer);
  console.log(`Cleaned & Transparent: ${filename}`);
}

async function run() {
  for (const f of files) {
    await removeBackgroundPrecise(f);
  }
}

run();
