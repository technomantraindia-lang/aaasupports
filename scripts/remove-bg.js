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

async function removeBackground(filename) {
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

  // Sample corner pixel colors to get the studio background color
  // Corners: (0,0), (width-1, 0), (0, 10), (width-1, 10)
  const getPixel = (x, y) => {
    const idx = (y * width + x) * 4;
    return { r: data[idx], g: data[idx + 1], b: data[idx + 2], a: data[idx + 3] };
  };

  const corners = [
    getPixel(5, 5),
    getPixel(width - 6, 5),
    getPixel(5, 20),
    getPixel(width - 6, 20),
    getPixel(5, height - 6),
    getPixel(width - 6, height - 6)
  ];

  console.log(`Processing ${filename} (${width}x${height}). Sample corners:`, corners);

  // Background is generally light-blue / white studio lighting:
  // Usually R: 180-255, G: 210-255, B: 230-255, with high brightness (L > 190) and low saturation
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * 4;
      const r = data[idx];
      const g = data[idx + 1];
      const b = data[idx + 2];

      // Calculate brightness and color distance from light blue/white studio background
      // In these 3D renders:
      // Background: High brightness (R > 185, G > 200, B > 220), B >= G >= R
      // Products are either dark blue (R < 80, G < 100, B < 150), orange (R > 200, G < 140), steel grey (R ~ G ~ B < 180), or shadow
      
      const isLightBlueStudioBg = (b > 195 && g > 185 && r > 165 && (b >= r) && (g >= r - 10));
      const isVeryLightBg = (r > 225 && g > 230 && b > 235);

      if (isVeryLightBg || isLightBlueStudioBg) {
        // Compute distance from pure light background to do smooth edge antialiasing
        const lightness = 0.299 * r + 0.587 * g + 0.114 * b;
        if (lightness > 215) {
          data[idx + 3] = 0; // completely transparent
        } else if (lightness > 185) {
          // Feather edges
          const alphaFactor = (215 - lightness) / (215 - 185);
          data[idx + 3] = Math.round(alphaFactor * 255);
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
  console.log(`Done: ${filename}`);
}

async function run() {
  for (const f of files) {
    await removeBackground(f);
  }
}

run();
