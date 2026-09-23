import pipeSupportHero from '../../assets/pipe-support-hero.png'
import constantSpringHangers from '../../assets/product-constant-spring-hangers.png'
import constantSpringSupports from '../../assets/product-constant-spring-supports.png'
import customFabrication from '../../assets/product-custom-fabrication.png'
import marinePipeSupports from '../../assets/product-marine-pipe-supports.png'
import pipeClampsUBolts from '../../assets/product-pipe-clamps-u-bolts.png'
import oilGasSolutions from '../../assets/product-oil-gas-solutions.png'
import slidesGuides from '../../assets/product-slides-guides.png'
import variableSpringSupports from '../../assets/product-variable-spring-supports.png'

import pufCryogenicSupport from '../assets/products/puf-cryogenic-support.jpg'
import hydraulicSnubber from '../assets/products/hydraulic-snubber.jpg'
import pipeRollerSupport from '../assets/products/pipe-roller-support.jpg'

import industryOilGas from '../../assets/industry-oil-gas.png'
import industryPower from '../../assets/industry-power.png'
import industryIndustrial from '../../assets/industry-industrial.png'
import industryInfrastructure from '../../assets/industry-infrastructure.png'
import cataloguePdf from '../../assets/pdf/AAA Supports - Product_Catalouge.pdf'

import genClamp from '../../assets/gallery/generated-pipe-clamp.png'
import genHardware from '../../assets/gallery/generated-hardware.png'
import genSteel from '../../assets/gallery/generated-steel-structure.png'
import genRefinery from '../../assets/gallery/generated-refinery-support.png'
import genOverhead from '../../assets/gallery/generated-overhead-piping.png'

export const productCategories = [
  {
    number: '01',
    name: 'Primary Supports',
    description: 'Load-bearing and movement-control components engineered for dependable primary pipe support.',
    slugs: [
      'pipe-shoe-saddles',
      'pipe-clamps',
      'trunnions',
      'rest-supports',
      'guide-shoe',
      'puff-supports',
      'fix-supports',
      'line-stops',
      'anchor',
      'u-clamps-u-bolts',
      'foundation-bolts',
      'slide-supports',
      'ptfe-slide-supports',
      'roller-supports',
      'variable-spring-hangers-supports',
      'constant-spring-hangers-supports',
      'rigid-hangers',
      'rigid-struts',
      'hydraulic-snubbers',
    ],
  },
  {
    number: '02',
    name: 'Secondary Supports',
    description: 'Structural support members and framing systems that provide stable load transfer and installation flexibility.',
    slugs: [
      'structural-beams',
      'structural-columns',
      'structural-frames',
      'structural-members',
      'brackets',
    ],
  },
  {
    number: '03',
    name: 'Pipe Fittings, Flanges & Piping Spools',
    description: 'Precision-fabricated components for complete piping systems, engineered for dependable fit-up and installation.',
    slugs: [
      'pipe-fittings',
      'flanges',
      'piping-spools',
    ],
  },
]

export const defaultApplications = [
  { title: 'Oil & Gas', image: industryOilGas },
  { title: 'Power Plants', image: industryPower },
  { title: 'Petrochemicals', image: industryIndustrial },
  { title: 'Chemical & Fertilizers', image: industryInfrastructure },
]

export const productsData = {
  // 1. Pipe Shoe / Saddles
  'pipe-shoe-saddles': {
    slug: 'pipe-shoe-saddles',
    title: 'Pipe Shoe / Saddles',
    highlightWord: 'Saddles',
    category: 'Primary Supports',
    categoryNumber: '01',
    tagline: 'Strong Support for Safer Pipelines',
    heroDescription:
      'Pipe shoes (saddles) are used to support horizontal pipes and distribute the load over a larger area on the supporting structure. Designed in accordance with international standards, our pipe shoes ensure strength, stability and long service life in critical piping applications.',
    badges: [
      { label: 'High Strength', icon: 'shield' },
      { label: 'Corrosion Resistance', icon: 'gear' },
      { label: 'Wide Material Range', icon: 'layers' },
      { label: 'Standard Compliant', icon: 'check' },
    ],
    galleryImages: [
      genClamp,
      genHardware,
      genRefinery,
      slidesGuides,
      genSteel,
    ],
    overviewText:
      'Pipe shoes are designed to support horizontal pipes and transfer the load to the supporting structure. They are manufactured in accordance with ASME B31.1, ASME B31.3, MSS SP-58, MSS SP-69 and other international standards. Available in welded and fabricated construction with or without insulation, our pipe shoes are suitable for a wide range of industrial applications including Oil & Gas, Petrochemicals, Power Plants, Fertilizers and more.',
    quickFeatures: [
      { title: 'Standard Design', subtitle: 'As per ASME/MSS standards', icon: 'standard' },
      { title: 'Suitable for Insulated Lines', subtitle: 'With insulation clamping (CS)', icon: 'insulated' },
      { title: 'Custom Fabrication', subtitle: 'Available for special requirements', icon: 'custom' },
      { title: 'Wide Material Options', subtitle: 'Carbon Steel, Stainless Steel, Alloy Steel, etc.', icon: 'material' },
    ],
    specs: [
      { label: 'Product Name', value: 'Pipe Shoe / Saddles' },
      { label: 'Application', value: 'Support for horizontal piping' },
      { label: 'Design Standards', value: 'ASME B31.1, ASME B31.3' },
      { label: 'Material Standards', value: 'MSS SP-58, MSS SP-69' },
      { label: 'Material Grades', value: 'Carbon Steel, SS 304, SS 316, Alloy Steel, etc.' },
      { label: 'Size Range', value: '1/2" (DN15) to 48" (DN1200) or as per requirement' },
      { label: 'Types', value: 'Welded, Fabricated, with/without insulation' },
      { label: 'Surface Finish', value: 'Primer (IS:2074), Hot Dip Galvanized, Epoxy Coating (on request)' },
    ],
    drawings: [
      { type: 'TYPE PS-1', title: '(Welded Pipe Shoe)', diagramType: 'welded-shoe' },
      { type: 'TYPE PS-2', title: '(With Insulation Clamping)', diagramType: 'clamped-shoe' },
    ],
    keyFeatures: [
      'Robust and reliable structural design',
      'Suitable for high temperature and high pressure applications',
      'Available for insulated and non-insulated lines',
      'Custom sizes and configurations to client drawings',
      'Weather and corrosion resistant protective coatings',
      'Strict compliance with ASME & MSS international standards',
    ],
    applications: defaultApplications,
    relatedSlugs: ['slide-supports', 'guide-shoe', 'roller-supports', 'u-clamps-u-bolts', 'pipe-clamps'],
    datasheetPdf: cataloguePdf,
  },

  // 2. Pipe Clamps
  'pipe-clamps': {
    slug: 'pipe-clamps',
    title: 'Pipe Clamps',
    highlightWord: 'Clamps',
    category: 'Primary Supports',
    categoryNumber: '01',
    tagline: 'Engineered Clamping for Critical Pipelines',
    heroDescription:
      'Heavy-duty pipe clamps engineered for rigid and flexible pipe securing across extreme thermal, dynamic, and mechanical load conditions in high-pressure installations.',
    badges: [
      { label: 'Heavy Duty', icon: 'shield' },
      { label: 'Corrosion Proof', icon: 'gear' },
      { label: 'Full Size Range', icon: 'layers' },
      { label: 'ASME Certified', icon: 'check' },
    ],
    galleryImages: [
      genClamp,
      pipeClampsUBolts,
      genHardware,
      customFabrication,
      genRefinery,
    ],
    overviewText:
      'AAA Supports precision pipe clamps provide secure grip and vibration damping for horizontal and vertical piping runs. Available in 2-bolt, 3-bolt, and riser configurations manufactured to ASME B31.1 and MSS SP-58 standard specifications from -150°C to +550°C operating conditions.',
    quickFeatures: [
      { title: 'Two & Three Bolt Clamps', subtitle: 'Standard & heavy-duty holding', icon: 'standard' },
      { title: 'Riser Clamps', subtitle: 'For light & heavy vertical loads', icon: 'insulated' },
      { title: 'High Temperature Alloys', subtitle: 'ASTM A182 F11/F22 certified', icon: 'custom' },
      { title: 'Custom Protective Coatings', subtitle: 'HDG, Zinc Plated & Epoxy finishes', icon: 'material' },
    ],
    specs: [
      { label: 'Product Name', value: 'Heavy Duty Pipe Clamps' },
      { label: 'Application', value: 'Suspension and clamping of horizontal & vertical piping' },
      { label: 'Design Standards', value: 'ASME B31.1, ASME B31.3, MSS SP-58, MSS SP-69' },
      { label: 'Material Standards', value: 'IS 2062, ASTM A182 F11/F22, ASTM A240 SS304/SS316' },
      { label: 'Temperature Range', value: '-150°C to 550°C operating temperature' },
      { label: 'Size Range', value: '1/2" to 42" Nominal Bore' },
      { label: 'Types', value: 'Two-Bolt, Three-Bolt, Riser Clamps (Light & Heavy Duty)' },
      { label: 'Surface Finish', value: 'Zinc Chromate Primer, Hot Dip Galvanized to IS:2629' },
    ],
    drawings: [
      { type: 'TYPE PC-1', title: '(Two-Bolt Pipe Clamp)', diagramType: 'clamped-shoe' },
      { type: 'TYPE PC-2', title: '(Three-Bolt High Temp Clamp)', diagramType: 'clamped-shoe' },
    ],
    keyFeatures: [
      'Precision contoured halves for perfect outer pipe fit',
      'Wide operating temperature band from cryogenic to 550°C',
      'Engineered bolt spacing for uniform torque transfer',
      'Available with high-temperature alloy and stainless metallurgy',
      'Tested to MSS SP-58 load rating requirements',
      'Corrosion resistant surface finishes for harsh coastal plants',
    ],
    applications: defaultApplications,
    relatedSlugs: ['u-clamps-u-bolts', 'pipe-shoe-saddles', 'rigid-hangers', 'slide-supports', 'trunnions'],
    datasheetPdf: cataloguePdf,
  },

  // 3. Variable Spring Hangers & Supports
  'variable-spring-hangers-supports': {
    slug: 'variable-spring-hangers-supports',
    title: 'Variable Spring Hangers & Supports',
    highlightWord: 'Supports',
    category: 'Primary Supports',
    categoryNumber: '01',
    tagline: 'Precision Load Management for Thermal Movement',
    heroDescription:
      'Variable spring supports designed to accommodate vertical thermal displacement in high-temperature piping systems, protecting critical turbines, boilers, and valves from overstress.',
    badges: [
      { label: '25 Load Sizes', icon: 'shield' },
      { label: 'Travel to 160mm', icon: 'gear' },
      { label: 'BS 1726 Tested', icon: 'layers' },
      { label: 'Models A to G', icon: 'check' },
    ],
    galleryImages: [
      variableSpringSupports,
      constantSpringSupports,
      constantSpringHangers,
      genHardware,
      customFabrication,
    ],
    overviewText:
      'AAA Supports Variable Spring Hangers & Supports are engineered in three standard series (VS1, VS2, VS3) across twenty-five spring sizes covering loads from 8.2 kg up to 27.43 metric tons. They provide travel ranges of 40mm, 80mm, and 160mm with ±5° collinear displacement capability. Built in models A, B, C, D, E, F, and G to fit every hanging or base-mounted configuration.',
    quickFeatures: [
      { title: 'Series VS1, VS2 & VS3', subtitle: '40mm, 80mm & 160mm travel options', icon: 'standard' },
      { title: 'Load Range 8.2kg - 27.4t', subtitle: '25 calibrated spring size groups', icon: 'insulated' },
      { title: 'Travel Scale & Nameplate', subtitle: 'Clear hot & cold load markings in mm', icon: 'custom' },
      { title: 'Pre-set Locking System', subtitle: 'Cold load factory locked for safe erection', icon: 'material' },
    ],
    specs: [
      { label: 'Product Name', value: 'Variable Spring Hanger / Support' },
      { label: 'Application', value: 'Thermal expansion load absorption for power & refinery piping' },
      { label: 'Design Standards', value: 'ASME B31.1, BS 1726 Part-1, MSS SP-58, ASTM A125' },
      { label: 'Load Capacity', value: '8.2 kg to 27,430 kg (27.43 metric tons)' },
      { label: 'Travel Options', value: 'VS1 (40mm), VS2 (80mm), VS3 (160mm)' },
      { label: 'Models Available', value: 'Model A, B, C, D, E, F, G (Suspension & Base Mounted)' },
      { label: 'Spring Protection', value: 'Neoprene / PU coated spring coils, HDG casing' },
      { label: 'Testing & Quality', value: 'Individual load calibration and certified test reports' },
    ],
    drawings: [
      { type: 'MODEL VSH-A', title: '(Single Upper Threaded Eye)', diagramType: 'welded-shoe' },
      { type: 'MODEL VSH-F', title: '(Base Mounted Floor Support)', diagramType: 'clamped-shoe' },
    ],
    keyFeatures: [
      'Calibrated spring coils manufactured to ASTM A125 and BS 1726',
      'Factory preset and locked at designated cold load position',
      'Stainless steel engraved nameplate with clear travel index',
      'Protective PU or neoprene coating for extreme chemical atmospheres',
      'Up to ±5° angular rotation permissible during line expansion',
      'Fully serviceable and backed by an 18-month warranty',
    ],
    applications: defaultApplications,
    relatedSlugs: ['constant-spring-hangers-supports', 'rigid-hangers', 'pipe-shoe-saddles', 'hydraulic-snubbers', 'pipe-clamps'],
    datasheetPdf: cataloguePdf,
  },

  // 4. Constant Spring Hangers & Supports
  'constant-spring-hangers-supports': {
    slug: 'constant-spring-hangers-supports',
    title: 'Constant Spring Hangers & Supports',
    highlightWord: 'Supports',
    category: 'Primary Supports',
    categoryNumber: '01',
    tagline: 'Zero Load Variation for Critical Lines',
    heroDescription:
      'Constant effort supports engineered for high thermal movement lines where load deviation must remain within 5%, ensuring zero transfer of extraneous moments to sensitive equipment nozzles.',
    badges: [
      { label: 'Constant Load', icon: 'shield' },
      { label: 'Up to 50,000 kg', icon: 'gear' },
      { label: '400mm Travel', icon: 'layers' },
      { label: 'ASME B31.1', icon: 'check' },
    ],
    galleryImages: [
      constantSpringSupports,
      constantSpringHangers,
      variableSpringSupports,
      customFabrication,
      genRefinery,
    ],
    overviewText:
      'AAA Supports Constant Spring Hangers & Supports provide uniform load support throughout the entire thermal travel range. Utilizing a precision mechanical cam-and-lever mechanism, these supports maintain constant support effort with variability under 5%. Available in horizontal (AH to FH) and vertical (AV to FV) models for loads up to 50,000 kg and travel lengths up to 400mm.',
    quickFeatures: [
      { title: 'Zero Load Variation', subtitle: 'True constant effort (variability < 5%)', icon: 'standard' },
      { title: 'Horizontal & Vertical Types', subtitle: 'Models AH-FH and Models AV-FV', icon: 'insulated' },
      { title: 'Travel up to 400mm', subtitle: 'Supports large thermal movements', icon: 'custom' },
      { title: 'Heavy Duty Cams', subtitle: 'Precision machined levers & needle bearings', icon: 'material' },
    ],
    specs: [
      { label: 'Product Name', value: 'Constant Spring Hanger & Support' },
      { label: 'Application', value: 'Boiler feed, main steam and critical refinery header piping' },
      { label: 'Design Standards', value: 'ASME B31.1, ASME B31.3, MSS SP-58, BS 3974' },
      { label: 'Load Capacity', value: '100 kg to 50,000 kg' },
      { label: 'Travel Range', value: '40mm to 400mm vertical displacement' },
      { label: 'Mounting Types', value: 'Hanging (Suspended), Base Mounted, Column Mounted' },
      { label: 'Variability', value: 'Less than 5% across full travel length' },
      { label: 'Corrosion Protection', value: 'Epoxy Zinc Phosphate Primer, HDG Casing' },
    ],
    drawings: [
      { type: 'TYPE CH-1', title: '(Horizontal Constant Hanger)', diagramType: 'welded-shoe' },
      { type: 'TYPE CV-1', title: '(Vertical Constant Hanger)', diagramType: 'clamped-shoe' },
    ],
    keyFeatures: [
      'Engineered cam-lever geometry delivering precise mechanical equilibrium',
      'Factory tested and calibrated with serialized load deflection curves',
      'Heavy-duty turnbuckle adjustment with lock-nuts for fine field setting',
      'Locking pins provided for hydrostatic testing and shipment security',
      'Zero maintenance sealed pivot assemblies for decades of service',
      'Fully compliant with international power and refinery piping codes',
    ],
    applications: defaultApplications,
    relatedSlugs: ['variable-spring-hangers-supports', 'hydraulic-snubbers', 'rigid-struts', 'pipe-shoe-saddles', 'pipe-clamps'],
    datasheetPdf: cataloguePdf,
  },

  // 5. PUF / Cryogenic Pipe Supports
  'puff-supports': {
    slug: 'puff-supports',
    title: 'PUF Cryogenic Pipe Supports',
    highlightWord: 'Supports',
    category: 'Primary Supports',
    categoryNumber: '01',
    tagline: 'Zero Thermal Bridging for Cryogenic Lines',
    heroDescription:
      'High-density Polyurethane Foam (PUF / PIR) pre-insulated pipe supports engineered for LNG, cryogenic fluids, and chilled ammonia systems down to -196°C.',
    badges: [
      { label: '-196°C Rated', icon: 'shield' },
      { label: 'High Density PUF', icon: 'gear' },
      { label: 'Vapor Barrier', icon: 'layers' },
      { label: 'Energy Efficient', icon: 'check' },
    ],
    galleryImages: [
      pufCryogenicSupport,
      genClamp,
      slidesGuides,
      genSteel,
      customFabrication,
    ],
    overviewText:
      'AAA Supports PUF / Cryogenic Pipe Supports provide complete thermal isolation between low-temperature fluid pipelines and structural steelwork. Manufactured with high-density polyurethane foam (160 to 320 kg/m³) with factory-applied moisture vapor barriers and heavy-duty galvanized clamping cradles, eliminating condensation, icing, and thermal energy loss.',
    quickFeatures: [
      { title: 'Cryogenic Performance', subtitle: 'Rated from -196°C up to +120°C', icon: 'standard' },
      { title: 'High Density Core', subtitle: '160 - 320 kg/m³ compressive strength', icon: 'insulated' },
      { title: 'Integral Vapor Barrier', subtitle: 'Multi-layer aluminum mastic barrier', icon: 'custom' },
      { title: 'HDG Outer Cradle', subtitle: 'Galvanized carbon steel support clamp', icon: 'material' },
    ],
    specs: [
      { label: 'Product Name', value: 'PUF Cryogenic Pre-Insulated Support' },
      { label: 'Application', value: 'LNG, LPG, Liquid Nitrogen, Chilled Ammonia & Cryogenic Lines' },
      { label: 'Design Standards', value: 'ASME B31.3, MSS SP-58, CINI Guidelines' },
      { label: 'Operating Temp', value: '-196°C to +120°C' },
      { label: 'Insulation Core', value: 'High Density Polyurethane Foam (PUF) / PIR' },
      { label: 'Density Range', value: '160 kg/m³, 240 kg/m³, 320 kg/m³' },
      { label: 'Size Range', value: '1/2" to 36" (DN15 to DN900)' },
      { label: 'Cradle Finish', value: 'Hot Dip Galvanized (HDG) / Stainless Steel 304/316' },
    ],
    drawings: [
      { type: 'TYPE PUF-1', title: '(Cryogenic Clamped Shoe)', diagramType: 'clamped-shoe' },
      { type: 'TYPE PUF-2', title: '(Cold Insulated Guide Shoe)', diagramType: 'welded-shoe' },
    ],
    keyFeatures: [
      'Eliminates thermal bridging and prevents ice formation around structural supports',
      'High compressive strength withstands heavy operational and seismic loads',
      'Factory bonded vapor seal protects insulation core from atmospheric moisture ingress',
      'Compatible with PTFE and stainless steel slide plates for thermal movement',
      'CFC and HCFC-free environmentally sustainable foam formulations',
      'Pre-assembled units save significant installation hours on site',
    ],
    applications: defaultApplications,
    relatedSlugs: ['ptfe-slide-supports', 'pipe-shoe-saddles', 'guide-shoe', 'pipe-clamps', 'slide-supports'],
    datasheetPdf: cataloguePdf,
  },

  // 6. Hydraulic Snubbers
  'hydraulic-snubbers': {
    slug: 'hydraulic-snubbers',
    title: 'Hydraulic Snubbers',
    highlightWord: 'Snubbers',
    category: 'Primary Supports',
    categoryNumber: '01',
    tagline: 'Dynamic Shock & Seismic Protection for Critical Lines',
    heroDescription:
      'Dynamic restraint snubbers designed to permit unrestricted slow thermal expansion while instantaneously locking during rapid transient seismic, relief valve, or water hammer events.',
    badges: [
      { label: '10 to 500 kN', icon: 'shield' },
      { label: 'Seismic Shock Safe', icon: 'gear' },
      { label: 'ASME Section III', icon: 'layers' },
      { label: 'Self-Bleeding', icon: 'check' },
    ],
    galleryImages: [
      hydraulicSnubber,
      constantSpringHangers,
      genHardware,
      customFabrication,
      genSteel,
    ],
    overviewText:
      'AAA Supports SNU Series Hydraulic Snubbers are velocity-sensitive dynamic restraints. During normal plant heating and cooling cycles, the internal fluid flows freely through a precision valve orifice. Under rapid shock events (earthquake, turbine trip, water hammer), the valve instantly closes to convert the snubber into a rigid high-capacity structural strut.',
    quickFeatures: [
      { title: 'Dynamic Shock Locking', subtitle: 'Instantaneous lock under sudden impulses', icon: 'standard' },
      { title: 'Free Thermal Expansion', subtitle: 'Negligible resistance during slow movements', icon: 'insulated' },
      { title: 'Load Capacity 10-500 kN', subtitle: 'Standard & extended stroke ratings', icon: 'custom' },
      { title: 'Spherical End Bearings', subtitle: '±6° angular misalignment tolerance', icon: 'material' },
    ],
    specs: [
      { label: 'Product Name', value: 'Hydraulic Snubber (SNU Series)' },
      { label: 'Application', value: 'Seismic, pipe whip, safety valve thrust & water hammer restraint' },
      { label: 'Design Standards', value: 'ASME Section III, ASME B31.1, MSS SP-58' },
      { label: 'Rated Load Capacity', value: '10 kN to 500 kN (1 ton to 50 tons)' },
      { label: 'Stroke Range', value: '100mm, 150mm, 200mm, 300mm, 500mm' },
      { label: 'Hydraulic Fluid', value: 'Radiation-resistant, high flash point synthetic fluid' },
      { label: 'End Connections', value: 'Precision spherical bushings with heavy mounting clevises' },
      { label: 'Testing Protocol', value: '100% dynamic load tested with velocity-load validation curve' },
    ],
    drawings: [
      { type: 'TYPE SNU-1', title: '(Direct Eye-Clevis Mounted)', diagramType: 'welded-shoe' },
      { type: 'TYPE SNU-2', title: '(With Extension Rod Assembly)', diagramType: 'clamped-shoe' },
    ],
    keyFeatures: [
      'Self-bleeding, temperature-compensated hydraulic control valve network',
      'Chrome-plated high-strength piston rod with multi-lip polymer seals',
      'Integral fluid reservoir with visual fluid level indicator',
      'Stainless steel cylinder barrel with anti-corrosion exterior armor',
      'Accommodates high velocity shock without damaging pipeline integrity',
      'Individual dynamic test bench verification before client dispatch',
    ],
    applications: defaultApplications,
    relatedSlugs: ['rigid-struts', 'constant-spring-hangers-supports', 'variable-spring-hangers-supports', 'pipe-clamps', 'anchor'],
    datasheetPdf: cataloguePdf,
  },

  // 7. Roller Supports
  'roller-supports': {
    slug: 'roller-supports',
    title: 'Roller Supports',
    highlightWord: 'Supports',
    category: 'Primary Supports',
    categoryNumber: '01',
    tagline: 'Low-Friction Heavy Load Longitudinal Movement',
    heroDescription:
      'Heavy-duty pipe roller support assemblies designed to support large diameter horizontal pipes while allowing smooth axial expansion with minimal frictional resistance.',
    badges: [
      { label: '2" to 30" Sizes', icon: 'shield' },
      { label: 'Loads to 8500 kg', icon: 'gear' },
      { label: 'Twin Bearings', icon: 'layers' },
      { label: 'MSS SP-58', icon: 'check' },
    ],
    galleryImages: [
      pipeRollerSupport,
      slidesGuides,
      genSteel,
      customFabrication,
      genClamp,
    ],
    overviewText:
      'AAA Supports Pipe Roller Support Assemblies provide reliable support for pipelines subjected to substantial longitudinal thermal expansion. Designed with heavy cast or forged steel roller wheels mounted on precision axles and dual self-aligning bearing blocks, these units reduce friction coefficients below 0.05 for pipes from 2" up to 30" NB.',
    quickFeatures: [
      { title: 'Sizes 2" to 30"', subtitle: 'Full nominal pipe diameter coverage', icon: 'standard' },
      { title: 'Loads up to 8500 kg', subtitle: 'Engineered forged steel chassis', icon: 'insulated' },
      { title: 'Low Rolling Friction', subtitle: 'Friction coefficient under 0.05', icon: 'custom' },
      { title: 'Heavy Base Plate', subtitle: 'Pre-drilled for structural beam mounting', icon: 'material' },
    ],
    specs: [
      { label: 'Product Name', value: 'Pipe Roller Support Assembly' },
      { label: 'Application', value: 'Longitudinal thermal movement of steam & long-run piping' },
      { label: 'Design Standards', value: 'MSS SP-58 (Type 43/44/45), ASME B31.1' },
      { label: 'Pipe Size Range', value: '2" to 30" (DN50 to DN750)' },
      { label: 'Safe Working Load', value: '500 kg to 8,500 kg' },
      { label: 'Roller Metallurgy', value: 'Cast Steel IS:1030 / Forged Carbon Steel' },
      { label: 'Axle & Bearings', value: 'High tensile steel axle with brass/bronze or roller bearings' },
      { label: 'Surface Finish', value: 'Red Oxide Zinc Chromate Primer / Hot Dip Galvanized' },
    ],
    drawings: [
      { type: 'TYPE RS-1', title: '(Standard Pipe Roller Assembly)', diagramType: 'welded-shoe' },
      { type: 'TYPE RS-2', title: '(Roller Chair with Guide Lugs)', diagramType: 'clamped-shoe' },
    ],
    keyFeatures: [
      'Cast/forged contoured roller barrel accurately cradles the pipeline',
      'Heavy-duty structural side frames withstand lateral wind and seismic forces',
      'Significantly lowers reaction loads on adjacent structural pipe rack bents',
      'Grease nipple lubricated axle bearings ensure lifelong smooth rotation',
      'Available with pipe protection saddles to prevent point load denting',
      'Manufactured to strict MSS SP-58 and ASME standards',
    ],
    applications: defaultApplications,
    relatedSlugs: ['slide-supports', 'ptfe-slide-supports', 'pipe-shoe-saddles', 'guide-shoe', 'pipe-clamps'],
    datasheetPdf: cataloguePdf,
  },

  // 8. Slide Supports & PTFE Slide Plates
  'slide-supports': {
    slug: 'slide-supports',
    title: 'Slide Supports',
    highlightWord: 'Supports',
    category: 'Primary Supports',
    categoryNumber: '01',
    tagline: 'Multi-Directional Thermal Movement Support Assemblies',
    heroDescription:
      'Engineered slide base assemblies providing frictionless multi-directional pipe displacement across refinery and power generation headers.',
    badges: [
      { label: 'Type I to VI', icon: 'shield' },
      { label: 'Low Friction', icon: 'gear' },
      { label: 'Heavy Load Rated', icon: 'layers' },
      { label: 'Custom Travel', icon: 'check' },
    ],
    galleryImages: [
      slidesGuides,
      genSteel,
      genHardware,
      customFabrication,
      genClamp,
    ],
    overviewText:
      'AAA Supports Slide Supports are designed for pipe assemblies requiring low resistance planar movements. Built in six standard configurations (Type I to Type VI) covering light, medium, and heavy structural load conditions. Available with polished stainless steel and virgin PTFE sliding interfaces to minimize structural stress transfer.',
    quickFeatures: [
      { title: 'Types I to VI', subtitle: 'Light to heavy load duty classifications', icon: 'standard' },
      { title: 'Low Friction Interface', subtitle: 'PTFE on mirror polished SS plate', icon: 'insulated' },
      { title: 'Multi-Directional', subtitle: 'Axial, lateral, and rotational freedom', icon: 'custom' },
      { title: 'High Load Transfer', subtitle: 'Reinforced internal load gussets', icon: 'material' },
    ],
    specs: [
      { label: 'Product Name', value: 'Fabricated Slide Support' },
      { label: 'Application', value: 'Horizontal load distribution with thermal sliding' },
      { label: 'Design Standards', value: 'ASME B31.1, ASME B31.3, MSS SP-58' },
      { label: 'Size Range', value: '1" to 48" Pipe Diameters' },
      { label: 'Load Capacity', value: '350 kg to 25,000 kg safe working load' },
      { label: 'Sliding Materials', value: 'Virgin PTFE, Glass-Filled PTFE, Mirror SS 304/316' },
      { label: 'Friction Coefficient', value: '$\mu < 0.08$ at design load' },
      { label: 'Surface Finish', value: 'Hot Dip Galvanized / High Build Epoxy Coating' },
    ],
    drawings: [
      { type: 'TYPE SS-1', title: '(Planar Slide Base)', diagramType: 'welded-shoe' },
      { type: 'TYPE SS-2', title: '(Guided Slide Assembly)', diagramType: 'clamped-shoe' },
    ],
    keyFeatures: [
      'Minimizes horizontal friction forces transmitted to structural beams',
      'Self-lubricating PTFE composite pads resist chemical contamination',
      'Heavy structural base plate with pre-drilled slotted holes for adjustment',
      'Designed for extreme temperatures up to 250°C at slide interface',
      'Modular configuration permits easy retrofitting during plant shutdowns',
      'Strict quality assurance with material test certificates for every batch',
    ],
    applications: defaultApplications,
    relatedSlugs: ['ptfe-slide-supports', 'pipe-shoe-saddles', 'guide-shoe', 'roller-supports', 'u-clamps-u-bolts'],
    datasheetPdf: cataloguePdf,
  },

  // 9. PTFE Slide Supports
  'ptfe-slide-supports': {
    slug: 'ptfe-slide-supports',
    title: 'PTFE Slide Supports',
    highlightWord: 'Supports',
    category: 'Primary Supports',
    categoryNumber: '01',
    tagline: 'Ultra-Low Friction PTFE & Stainless Steel Sliding Plates',
    heroDescription:
      'High-performance PTFE/SS sliding plates engineered to eliminate binding and reduce horizontal friction loads to under 8% in thermal expansion lines.',
    badges: [
      { label: '$\mu < 0.08$', icon: 'shield' },
      { label: 'Virgin PTFE', icon: 'gear' },
      { label: 'SS Mirror Finish', icon: 'layers' },
      { label: 'Up to 250°C', icon: 'check' },
    ],
    galleryImages: [
      slidesGuides,
      genSteel,
      genHardware,
      customFabrication,
      genClamp,
    ],
    overviewText:
      'AAA Supports PTFE Slide Plates feature virgin or reinforced PTFE bonded to heavy carbon steel backing plates, paired with 2B mirror-polished AISI 304/316 stainless steel upper slider sheets. Designed to absorb vertical loads while providing exceptionally low coefficient of friction for critical refinery piping.',
    quickFeatures: [
      { title: 'Virgin & Dimpled PTFE', subtitle: 'With special silicone grease reservoirs', icon: 'standard' },
      { title: 'Mirror Finish SS', subtitle: 'Grade 304 / 316 sliding counter-face', icon: 'insulated' },
      { title: 'Bonded Steel Backing', subtitle: 'High integrity thermoset adhesive bond', icon: 'custom' },
      { title: 'Graphite Pad Option', subtitle: 'For extreme temperatures up to 550°C', icon: 'material' },
    ],
    specs: [
      { label: 'Product Name', value: 'PTFE Slide Bearing Plate' },
      { label: 'Application', value: 'Low-friction bearing interface for pipe shoes & beams' },
      { label: 'Design Standards', value: 'AASHTO / ASME B31.3 / MSS SP-58' },
      { label: 'Bearing Pressure', value: 'Up to 30 N/mm² (300 kg/cm²)' },
      { label: 'Temperature Limit', value: '-196°C to +200°C (PTFE) / Up to 550°C (Graphite)' },
      { label: 'Friction Coefficient', value: '0.04 to 0.08 under design load' },
      { label: 'Thickness Range', value: 'PTFE: 3mm to 6mm; SS Sheet: 1.5mm to 3mm' },
      { label: 'Mounting', value: 'Welded, Bolted or Recessed into structural steel' },
    ],
    drawings: [
      { type: 'TYPE PTFE-1', title: '(Standard Slide Plate)', diagramType: 'welded-shoe' },
      { type: 'TYPE PTFE-2', title: '(Confined Slide Pad Assembly)', diagramType: 'clamped-shoe' },
    ],
    keyFeatures: [
      'Provides the lowest coefficient of friction among all solid sliding materials',
      'Chemo-resistant virgin PTFE does not absorb water or swell',
      'Confined cavity design prevents creep and cold flow under heavy pressure',
      'Drastically reduces piping anchor reactions and foundation size requirements',
      'Available with dust seals and rubber wiper rings for dirty environments',
      'Manufactured to strict dimensional and flatness tolerances',
    ],
    applications: defaultApplications,
    relatedSlugs: ['slide-supports', 'pipe-shoe-saddles', 'puff-supports', 'roller-supports', 'guide-shoe'],
    datasheetPdf: cataloguePdf,
  },

  // 10. Guide Shoe
  'guide-shoe': {
    slug: 'guide-shoe',
    title: 'Guide Shoe',
    highlightWord: 'Shoe',
    category: 'Primary Supports',
    categoryNumber: '01',
    tagline: 'Directional Pipe Restraint & Movement Control',
    heroDescription:
      'Engineered guide shoes designed to permit smooth axial pipeline movement while restricting transverse lateral displacement and preventing pipeline derailment.',
    badges: [
      { label: 'Directional Restraint', icon: 'shield' },
      { label: 'Zero Derailment', icon: 'gear' },
      { label: 'Adjustable Gaps', icon: 'layers' },
      { label: 'Heavy Duty', icon: 'check' },
    ],
    galleryImages: [
      slidesGuides,
      genSteel,
      genHardware,
      customFabrication,
      genClamp,
    ],
    overviewText:
      'AAA Supports Guide Shoes combine vertical pipe support cradles with structural lateral guide brackets. Designed to guide expanding pipework along straight pipe-rack runs while absorbing side wind, earthquake, and centrifugal bend forces. Available in welded, bolted, and low-friction slide configurations.',
    quickFeatures: [
      { title: 'Axial Slide with Lateral Stops', subtitle: 'Permits line expansion while stopping drift', icon: 'standard' },
      { title: 'Insulated & Non-Insulated', subtitle: 'Compatible with hot and cold lines', icon: 'insulated' },
      { title: 'Adjustable Lateral Clearance', subtitle: 'Precision shimming for thermal gaps', icon: 'custom' },
      { title: 'Reinforced Web Construction', subtitle: 'Heavy carbon steel structural ribs', icon: 'material' },
    ],
    specs: [
      { label: 'Product Name', value: 'Directional Pipe Guide Shoe' },
      { label: 'Application', value: 'Long run pipe rack directional movement control' },
      { label: 'Design Standards', value: 'ASME B31.3, ASME B31.1, MSS SP-58' },
      { label: 'Pipe Size Range', value: '1/2" to 48" NB' },
      { label: 'Lateral Load Capacity', value: 'Up to 150 kN transverse thrust' },
      { label: 'Material Grades', value: 'IS 2062 Gr.B, ASTM A36, Stainless Steel' },
      { label: 'Guide Clearances', value: 'Standard 3mm to 6mm lateral operating gap' },
      { label: 'Surface Finish', value: 'Hot Dip Galvanized / Epoxy Marine Coating' },
    ],
    drawings: [
      { type: 'TYPE GS-1', title: '(Channel Guided Shoe)', diagramType: 'welded-shoe' },
      { type: 'TYPE GS-2', title: '(Bolted Lateral Guide)', diagramType: 'clamped-shoe' },
    ],
    keyFeatures: [
      'Prevents buckling and lateral bowing of long thermal expansion runs',
      'Smooth contact faces reduce wear on structural support beams',
      'Engineered to withstand sudden transient side loads without binding',
      'Available with PTFE guide side-liners for frictionless axial sliding',
      'Custom shoe heights (100mm, 150mm, 200mm, 300mm) for insulation clearance',
      'Manufactured and certified to international piping codes',
    ],
    applications: defaultApplications,
    relatedSlugs: ['pipe-shoe-saddles', 'line-stops', 'fix-supports', 'slide-supports', 'u-clamps-u-bolts'],
    datasheetPdf: cataloguePdf,
  },

  // 11. Rigid Struts
  'rigid-struts': {
    slug: 'rigid-struts',
    title: 'Rigid Struts',
    highlightWord: 'Struts',
    category: 'Primary Supports',
    categoryNumber: '01',
    tagline: 'Precision Bi-Directional Restraint & Dynamic Struts',
    heroDescription:
      'Rigid dynamic struts engineered to resist high tensile and compressive thrusts while allowing ±5° angular misalignment during thermal displacement.',
    badges: [
      { label: 'Tension & Compression', icon: 'shield' },
      { label: '±5° Collinear Play', icon: 'gear' },
      { label: 'Turnbuckle ±75mm', icon: 'layers' },
      { label: 'Heavy Dynamic', icon: 'check' },
    ],
    galleryImages: [
      customFabrication,
      genHardware,
      genSteel,
      constantSpringHangers,
      genRefinery,
    ],
    overviewText:
      'AAA Supports Rigid Struts are dynamic piping restraints designed to absorb bidirectional axial forces (tension and compression). Featuring spherical bearing rod ends at both extremes and a central turnbuckle body with left-and-right threading for fine field length adjustment up to ±75mm.',
    quickFeatures: [
      { title: 'Tension & Compression Rated', subtitle: 'Equal load capacity in both directions', icon: 'standard' },
      { title: 'Spherical End Bearings', subtitle: 'Accommodates 5° pipe angular rotation', icon: 'insulated' },
      { title: 'Field Length Adjustment', subtitle: 'Fine tuning via central turnbuckle body', icon: 'custom' },
      { title: 'High Load Groups', subtitle: 'Ratings from 5 kN up to 400 kN', icon: 'material' },
    ],
    specs: [
      { label: 'Product Name', value: 'Rigid Strut Assembly' },
      { label: 'Application', value: 'Dynamic thrust restraint, pump/turbine nozzle protection' },
      { label: 'Design Standards', value: 'ASME B31.1, ASME B31.3, MSS SP-58' },
      { label: 'Load Capacity', value: '5 kN to 400 kN (Tension & Compression)' },
      { label: 'Length Adjustment', value: '±50mm to ±75mm via turnbuckle' },
      { label: 'Angular Deflection', value: '±5° multi-axis spherical rotation' },
      { label: 'Material', value: 'High Tensile Forged Steel / Seamless Carbon Steel Pipe' },
      { label: 'Surface Finish', value: 'Zinc Electroplated / HDG / Epoxy Painted' },
    ],
    drawings: [
      { type: 'TYPE RS-1', title: '(Standard Rigid Strut)', diagramType: 'welded-shoe' },
      { type: 'TYPE RS-2', title: '(Heavy Duty Dynamic Strut)', diagramType: 'clamped-shoe' },
    ],
    keyFeatures: [
      'High structural stiffness prevents pipeline vibration resonance',
      'Dual spherical bearings prevent bending moment introduction to pipe clamp',
      'Left/right turnbuckle design allows rapid millimeter-accurate field leveling',
      'Locking nuts prevent thread backing out under severe cyclic vibration',
      'Proof load tested to 1.5x design capacity',
      'Certified for critical power and nuclear facility installations',
    ],
    applications: defaultApplications,
    relatedSlugs: ['hydraulic-snubbers', 'rigid-hangers', 'pipe-clamps', 'anchor', 'constant-spring-hangers-supports'],
    datasheetPdf: cataloguePdf,
  },

  // 12. Rigid Hangers
  'rigid-hangers': {
    slug: 'rigid-hangers',
    title: 'Rigid Hangers',
    highlightWord: 'Hangers',
    category: 'Primary Supports',
    categoryNumber: '01',
    tagline: 'High-Strength Overhead Suspension Assemblies',
    heroDescription:
      'Rigid rod hanger assemblies designed to suspend overhead pipelines from structural steelwork with precise turnbuckle elevation adjustment.',
    badges: [
      { label: 'High Tensile Rods', icon: 'shield' },
      { label: 'Clevis / Eye Ends', icon: 'gear' },
      { label: 'Full Adjustment', icon: 'layers' },
      { label: 'MSS SP-58', icon: 'check' },
    ],
    galleryImages: [
      constantSpringHangers,
      genHardware,
      customFabrication,
      genSteel,
      genClamp,
    ],
    overviewText:
      'AAA Supports Rigid Hanger Assemblies provide rigid vertical suspension for pipelines with minimal vertical thermal movement. Consisting of beam attachments, high-tensile threaded hanger rods, forged turnbuckles, forged weldless eye nuts, and heavy-duty pipe clamps built to ASME B31.1 and MSS SP-58.',
    quickFeatures: [
      { title: 'Complete Suspension Kit', subtitle: 'Beam attachment, rod, turnbuckle & clamp', icon: 'standard' },
      { title: 'Threaded Field Adjustment', subtitle: 'Turnbuckles allow accurate vertical leveling', icon: 'insulated' },
      { title: 'Forged Steel Components', subtitle: 'Weldless eye nuts & clevis attachments', icon: 'custom' },
      { title: 'Load Groups 1 to 10', subtitle: 'Capacities up to 35,000 kg per assembly', icon: 'material' },
    ],
    specs: [
      { label: 'Product Name', value: 'Rigid Rod Hanger Assembly' },
      { label: 'Application', value: 'Overhead pipeline suspension from structural steel' },
      { label: 'Design Standards', value: 'ASME B31.1, ASME B31.3, MSS SP-58' },
      { label: 'Rod Diameters', value: 'M10 to M64 (3/8" to 2-1/2")' },
      { label: 'Safe Load Capacity', value: '250 kg to 35,000 kg' },
      { label: 'Material Grades', value: 'IS 2062, ASTM A36, Class 8.8 High Tensile Steel' },
      { label: 'Adjustment Range', value: 'Up to 150mm via forged turnbuckle' },
      { label: 'Finish', value: 'Hot Dip Galvanized / Electro Zinc Plated' },
    ],
    drawings: [
      { type: 'TYPE RH-1', title: '(Clevis Rod Hanger)', diagramType: 'welded-shoe' },
      { type: 'TYPE RH-2', title: '(Turnbuckle Eye Hanger)', diagramType: 'clamped-shoe' },
    ],
    keyFeatures: [
      'Forged weldless components eliminate failure risk at weld joints',
      'Provides reliable vertical load suspension without sag',
      'Precision machined threads ensure smooth height leveling during erection',
      'Available with spherical washers to allow minor lateral swing angles',
      'Tested to MSS SP-58 tensile safety factor of 5:1',
      'Supplied fully pre-assembled with tagged components',
    ],
    applications: defaultApplications,
    relatedSlugs: ['pipe-clamps', 'variable-spring-hangers-supports', 'constant-spring-hangers-supports', 'u-clamps-u-bolts', 'rigid-struts'],
    datasheetPdf: cataloguePdf,
  },

  // 13. U Clamps / U Bolts
  'u-clamps-u-bolts': {
    slug: 'u-clamps-u-bolts',
    title: 'U Clamps / U Bolts',
    highlightWord: 'Bolts',
    category: 'Primary Supports',
    categoryNumber: '01',
    tagline: 'Standard & Heavy-Duty U-Bolt Pipe Restraints',
    heroDescription:
      'MSS SP-58 Type 24 engineered U-Bolts and U-Clamps supplied with 4 hex nuts and rubber/neoprene insulation cushions for secure pipeline anchoring.',
    badges: [
      { label: '1/2" to 36" NB', icon: 'shield' },
      { label: 'MSS SP-58 Type 24', icon: 'gear' },
      { label: 'Neoprene Coated', icon: 'layers' },
      { label: '4 Heavy Nuts', icon: 'check' },
    ],
    galleryImages: [
      pipeClampsUBolts,
      genClamp,
      genHardware,
      customFabrication,
      genSteel,
    ],
    overviewText:
      'AAA Supports U-Bolts and U-Clamps are manufactured in accordance with MSS SP-58 Type 24 and DIN 3570 standard specifications. Designed for clamping piping to structural steel beams, concrete sleepers, and brackets. Supplied with four heavy hex nuts (two lock nuts) and optional neoprene or PTFE coating to prevent galvanic corrosion.',
    quickFeatures: [
      { title: 'MSS SP-58 & DIN 3570', subtitle: 'Standard & extended leg configurations', icon: 'standard' },
      { title: '4 Hex Nuts Included', subtitle: 'Two support nuts and two top lock nuts', icon: 'insulated' },
      { title: 'Rubber / Neoprene Lined', subtitle: 'Prevents metal-to-metal contact & wear', icon: 'custom' },
      { title: 'Stainless & High Tensile', subtitle: 'SS 304, SS 316, Carbon Steel & HDG', icon: 'material' },
    ],
    specs: [
      { label: 'Product Name', value: 'Industrial U-Bolt / U-Clamp' },
      { label: 'Application', value: 'Securing horizontal and vertical pipes to structural beams' },
      { label: 'Design Standards', value: 'MSS SP-58 Type 24, DIN 3570, BS 3974' },
      { label: 'Pipe Size Range', value: '1/2" to 36" NB (DN15 to DN900)' },
      { label: 'Rod Diameters', value: 'M6 to M36 thread sizes' },
      { label: 'Material Grades', value: 'Carbon Steel IS 2062, ASTM A36, SS 304, SS 316' },
      { label: 'Coating Options', value: 'Hot Dip Galvanized, Zinc Plated, Neoprene Rubber Lined' },
      { label: 'Hardware', value: 'Supplied with 4 Hex Nuts + Flat Washers' },
    ],
    drawings: [
      { type: 'TYPE UB-1', title: '(Standard Grip U-Bolt)', diagramType: 'welded-shoe' },
      { type: 'TYPE UB-2', title: '(Non-Grip Guide U-Bolt with Cushion)', diagramType: 'clamped-shoe' },
    ],
    keyFeatures: [
      'Precision roll-threaded legs ensure high tensile strength and fatigue life',
      'Available in gripping (anchor) and non-gripping (guide) configurations',
      'Cushioned rubber sleeves isolate stainless and copper pipes from galvanic action',
      'Generous thread length accommodates various structural beam flange thicknesses',
      'Proof tested to exceed standard industrial working load requirements',
      'Standard sizes readily stocked for urgent turnaround requirements',
    ],
    applications: defaultApplications,
    relatedSlugs: ['pipe-clamps', 'foundation-bolts', 'pipe-shoe-saddles', 'guide-shoe', 'slide-supports'],
    datasheetPdf: cataloguePdf,
  },

  // 14. Foundation Bolts
  'foundation-bolts': {
    slug: 'foundation-bolts',
    title: 'Foundation Bolts',
    highlightWord: 'Bolts',
    category: 'Primary Supports',
    categoryNumber: '01',
    tagline: 'Heavy Structural Anchorage for Plant Foundations',
    heroDescription:
      'High-tensile foundation anchor bolts (J-bolts, L-bolts, Plate-type) engineered for securing pipe supports, heavy equipment bases, and structural frames into concrete foundations.',
    badges: [
      { label: 'M12 to M72', icon: 'shield' },
      { label: 'J & L Types', icon: 'gear' },
      { label: 'High Tensile', icon: 'layers' },
      { label: 'IS:5624 / ASTM', icon: 'check' },
    ],
    galleryImages: [
      genHardware,
      customFabrication,
      genSteel,
      pipeClampsUBolts,
      genClamp,
    ],
    overviewText:
      'AAA Supports Foundation Anchor Bolts provide maximum pullout resistance and shear strength for securing structural stanchions, pipe rack footings, and heavy machinery to civil foundations. Fabricated in J-Type, L-Type, and Bottom-Plate Anchor configurations to IS:5624 and ASTM F1554 standards.',
    quickFeatures: [
      { title: 'J-Type, L-Type & Plate-Type', subtitle: 'Engineered anchor geometries for concrete', icon: 'standard' },
      { title: 'M12 up to M72 Diameters', subtitle: 'Lengths up to 3000mm as per drawing', icon: 'insulated' },
      { title: 'Class 4.6, 8.8 & ASTM F1554', subtitle: 'Certified high-tensile carbon & alloy steels', icon: 'custom' },
      { title: 'Supplied with Heavy Hardware', subtitle: 'Double nuts, heavy washers & anchor plates', icon: 'material' },
    ],
    specs: [
      { label: 'Product Name', value: 'Heavy Foundation Anchor Bolt' },
      { label: 'Application', value: 'Civil concrete anchorage for structural pipe supports & columns' },
      { label: 'Design Standards', value: 'IS 5624, ASTM F1554 (Grades 36, 55, 105), DIN 529' },
      { label: 'Diameter Range', value: 'M12 to M72 (1/2" to 3")' },
      { label: 'Length Range', value: '150mm to 3000mm' },
      { label: 'Material Grades', value: 'Carbon Steel IS 2062, ASTM A36, EN8, High Tensile 8.8' },
      { label: 'Anchor Shapes', value: 'J-Bolt, L-Bolt, Threaded Rod with Plate & Nut, Sleeve Anchor' },
      { label: 'Surface Finish', value: 'Black, Hot Dip Galvanized to ASTM A153, Zinc Plated' },
    ],
    drawings: [
      { type: 'TYPE FB-J', title: '(J-Type Foundation Bolt)', diagramType: 'welded-shoe' },
      { type: 'TYPE FB-PL', title: '(Plate-Type Heavy Anchor Bolt)', diagramType: 'clamped-shoe' },
    ],
    keyFeatures: [
      'Engineered hook and plate geometry provides maximum concrete pull-out grip',
      'Roll-threaded and cut-threaded options with generous engagement length',
      'Hot-dip galvanized coating protects embedded steel from underground moisture',
      'Supplied with heavy hex nuts and thick structural base washers',
      'Strict tensile, bend, and chemical test certification with every heat batch',
      'Custom fabricated to exact civil and structural job drawings',
    ],
    applications: defaultApplications,
    relatedSlugs: ['structural-columns', 'structural-beams', 'anchor', 'u-clamps-u-bolts', 'pipe-shoe-saddles'],
    datasheetPdf: cataloguePdf,
  },

  // 15. Fix Supports / Line Stops / Anchors
  'fix-supports': {
    slug: 'fix-supports',
    title: 'Fix Supports',
    highlightWord: 'Supports',
    category: 'Primary Supports',
    categoryNumber: '01',
    tagline: 'Zero-Displacement Fixed Structural Anchor Supports',
    heroDescription:
      'Heavy-duty fix supports engineered to lock pipelines completely in all 6 degrees of freedom, preventing any translation or rotation at critical plant boundaries.',
    badges: [
      { label: '6-DOF Restraint', icon: 'shield' },
      { label: 'High Moment Load', icon: 'gear' },
      { label: 'Welded & Clamped', icon: 'layers' },
      { label: 'ASME B31.3', icon: 'check' },
    ],
    galleryImages: [
      genSteel,
      customFabrication,
      genRefinery,
      slidesGuides,
      genClamp,
    ],
    overviewText:
      'AAA Supports Fix Supports are structural anchor assemblies engineered to absorb massive axial thrusts, lateral forces, and overturning moments. Used at battery limits, pump connections, and expansion loop transitions to divide pipeline systems into independent thermal expansion segments.',
    quickFeatures: [
      { title: 'Full 6-DOF Anchor', subtitle: 'Zero translational or rotational movement', icon: 'standard' },
      { title: 'Massive Thrust Absorption', subtitle: 'Engineered for high water hammer & thermal loads', icon: 'insulated' },
      { title: 'Internal Shear Rings', subtitle: 'Heavy welded internal load collars', icon: 'custom' },
      { title: 'Heavy Gusseted Base', subtitle: 'Reinforced carbon steel structural base', icon: 'material' },
    ],
    specs: [
      { label: 'Product Name', value: 'Fixed Pipe Anchor Support' },
      { label: 'Application', value: 'Total pipeline immobilization at battery limits and equipment nozzles' },
      { label: 'Design Standards', value: 'ASME B31.1, ASME B31.3, MSS SP-58' },
      { label: 'Size Range', value: '1" to 60" Pipe Diameters' },
      { label: 'Axial Load Rating', value: 'Up to 500 kN axial thrust' },
      { label: 'Material Grades', value: 'IS 2062 Gr.B, ASTM A36, ASTM A516 Gr.70, SS 304/316' },
      { label: 'Types', value: 'Welded Stanchion Anchor, Clamped Riser Anchor, Heavy Box Anchor' },
      { label: 'Surface Finish', value: 'Shop Primer, Hot Dip Galvanized, Multi-coat Epoxy' },
    ],
    drawings: [
      { type: 'TYPE FA-1', title: '(Heavy Welded Box Anchor)', diagramType: 'welded-shoe' },
      { type: 'TYPE FA-2', title: '(Clamped Heavy Riser Anchor)', diagramType: 'clamped-shoe' },
    ],
    keyFeatures: [
      'Transfers high mechanical thrust directly to main civil/structural foundations',
      'Protects sensitive pump and compressor nozzles from excessive thermal loads',
      'Robust internal gusseting prevents localized stress concentrations on thin-wall pipes',
      'Custom engineered to absorb combined 3D bending and torsional moments',
      'Full penetration welding with 100% NDT inspection options',
      'Manufactured to ASME and client project specifications',
    ],
    applications: defaultApplications,
    relatedSlugs: ['line-stops', 'anchor', 'pipe-shoe-saddles', 'guide-shoe', 'structural-frames'],
    datasheetPdf: cataloguePdf,
  },

  // 16. Line Stops
  'line-stops': {
    slug: 'line-stops',
    title: 'Line Stops',
    highlightWord: 'Stops',
    category: 'Primary Supports',
    categoryNumber: '01',
    tagline: 'Axial Movement Restraints for Directional Expansion',
    heroDescription:
      'Structural line stops designed to arrest axial pipeline translation while allowing vertical and lateral thermal movement.',
    badges: [
      { label: 'Axial Thrust Stop', icon: 'shield' },
      { label: 'Expansion Control', icon: 'gear' },
      { label: 'Heavy Steel Tabs', icon: 'layers' },
      { label: 'ASME B31.1', icon: 'check' },
    ],
    galleryImages: [
      genSteel,
      slidesGuides,
      customFabrication,
      genHardware,
      genRefinery,
    ],
    overviewText:
      'AAA Supports Line Stops are directional pipe restraints engineered to stop longitudinal pipe translation while permitting transverse and vertical displacement. Essential for controlling expansion loops and directing thermal growth toward designated compensators and spring supports.',
    quickFeatures: [
      { title: 'Axial Thrust Restraint', subtitle: 'Restricts lengthwise expansion movement', icon: 'standard' },
      { title: 'Directional Freedom', subtitle: 'Allows lateral and vertical flexing', icon: 'insulated' },
      { title: 'Welded & Clamped Stops', subtitle: 'Available with external shear lugs', icon: 'custom' },
      { title: 'High Load Capacity', subtitle: 'Resists thermal expansion forces up to 350 kN', icon: 'material' },
    ],
    specs: [
      { label: 'Product Name', value: 'Pipeline Axial Line Stop' },
      { label: 'Application', value: 'Directing thermal expansion towards loops and compensators' },
      { label: 'Design Standards', value: 'ASME B31.1, ASME B31.3, MSS SP-58' },
      { label: 'Size Range', value: '2" to 48" NB' },
      { label: 'Thrust Capacity', value: '10 kN to 350 kN axial force' },
      { label: 'Material Grades', value: 'IS 2062, ASTM A36, High Strength Alloy Steel' },
      { label: 'Mounting Types', value: 'Beam-welded stop lugs, clamped stop collars' },
      { label: 'Surface Finish', value: 'HDG, Zinc Phosphate Primer, Epoxy Topcoat' },
    ],
    drawings: [
      { type: 'TYPE LS-1', title: '(Structural Beam Line Stop)', diagramType: 'welded-shoe' },
      { type: 'TYPE LS-2', title: '(Clamped Bi-Directional Line Stop)', diagramType: 'clamped-shoe' },
    ],
    keyFeatures: [
      'Controls the exact direction of piping thermal expansion into expansion joints',
      'Heavy reinforced stop lugs prevent pipe over-travel during pressure surges',
      'Available with low friction side-plates to prevent binding on lateral movement',
      'Fabricated from certified heavy plate with bevelled full-strength welds',
      'Tested to withstand cyclic fatigue and thermal shock conditions',
      'Manufactured to ASME piping codes and client engineering drawings',
    ],
    applications: defaultApplications,
    relatedSlugs: ['fix-supports', 'guide-shoe', 'pipe-shoe-saddles', 'anchor', 'slide-supports'],
    datasheetPdf: cataloguePdf,
  },

  // 17. Anchor Supports
  'anchor': {
    slug: 'anchor',
    title: 'Anchor Supports',
    highlightWord: 'Supports',
    category: 'Primary Supports',
    categoryNumber: '01',
    tagline: 'Heavy-Duty Pipeline Anchors & Thrust Blocks',
    heroDescription:
      'Heavy structural anchors designed to withstand extreme hydraulic surge, seismic, and thermal reaction forces across major plant header lines.',
    badges: [
      { label: 'Heavy Thrust', icon: 'shield' },
      { label: 'Surge Proof', icon: 'gear' },
      { label: 'Rigid Security', icon: 'layers' },
      { label: 'ASME Certified', icon: 'check' },
    ],
    galleryImages: [
      genSteel,
      customFabrication,
      genRefinery,
      genHardware,
      slidesGuides,
    ],
    overviewText:
      'AAA Supports Heavy Pipeline Anchors provide positive structural immobilization for large-bore pipelines. Built with thick carbon steel saddles, heavy gusset plates, and welded internal shear collars designed to anchor pipelines to concrete piers and steel structures.',
    quickFeatures: [
      { title: 'Heavy Surge Absorption', subtitle: 'Engineered for extreme water hammer shocks', icon: 'standard' },
      { title: 'Welded Internal Collars', subtitle: 'Shear rings welded directly to pipe wall', icon: 'insulated' },
      { title: 'Thick Gusseted Chassis', subtitle: 'Heavy plate up to 50mm thickness', icon: 'custom' },
      { title: 'Thermal Division', subtitle: 'Isolates distinct temperature sections', icon: 'material' },
    ],
    specs: [
      { label: 'Product Name', value: 'Structural Pipeline Anchor' },
      { label: 'Application', value: 'Fixing main headers, penstocks and refinery battery limits' },
      { label: 'Design Standards', value: 'ASME B31.1, ASME B31.3, MSS SP-58' },
      { label: 'Size Range', value: '2" to 72" NB' },
      { label: 'Anchor Capacity', value: 'Up to 1000 kN axial and moment load' },
      { label: 'Material Grades', value: 'IS 2062 Gr.B, ASTM A36, ASTM A516 Gr.70' },
      { label: 'Configuration', value: 'Welded Saddle Anchor, Boxed Anchor, Pier Anchor' },
      { label: 'Inspection', value: '100% DP/MPI weld inspection, UT tested plates' },
    ],
    drawings: [
      { type: 'TYPE ANC-1', title: '(Heavy Saddle Box Anchor)', diagramType: 'welded-shoe' },
      { type: 'TYPE ANC-2', title: '(Pier Mounted Anchor Block)', diagramType: 'clamped-shoe' },
    ],
    keyFeatures: [
      'Eliminates pipe translation and rotation at critical plant boundaries',
      'Distributes high anchor forces safely into structural steel and civil piers',
      'Heavy continuous welding with complete non-destructive testing',
      'Custom engineered to absorb combined axial, shear, and torsional loads',
      'Available in carbon steel, high-temperature alloy, and stainless steel',
      'Supplied with full material trace certificates and NDT reports',
    ],
    applications: defaultApplications,
    relatedSlugs: ['fix-supports', 'line-stops', 'structural-columns', 'pipe-shoe-saddles', 'structural-frames'],
    datasheetPdf: cataloguePdf,
  },

  // 18. Trunnions
  'trunnions': {
    slug: 'trunnions',
    title: 'Trunnions',
    highlightWord: 'Trunnions',
    category: 'Primary Supports',
    categoryNumber: '01',
    tagline: 'Welded & Clamped Trunnion Supports for Vertical & Horizontal Piping',
    heroDescription:
      'Precision fabricated pipe trunnions designed to support vertical risers and horizontal piping headers directly from structural columns.',
    badges: [
      { label: 'Vertical Risers', icon: 'shield' },
      { label: 'Reinforced Base', icon: 'gear' },
      { label: 'ASME B31.3', icon: 'layers' },
      { label: 'Full Size Range', icon: 'check' },
    ],
    galleryImages: [
      genSteel,
      genClamp,
      customFabrication,
      genRefinery,
      slidesGuides,
    ],
    overviewText:
      'AAA Supports Trunnions are engineered pipe stanchion arms fabricated from seamless or welded pipe sections with circular reinforced base plates. Welded directly to parent pipe elbows or straight runs to transfer vertical gravity loads and lateral guide forces to adjacent structural frames.',
    quickFeatures: [
      { title: 'Straight & Elbow Trunnions', subtitle: 'Welded on pipe runs or 90° pipe elbows', icon: 'standard' },
      { title: 'Reinforcing Pad Option', subtitle: 'With circular repad for pressure containment', icon: 'insulated' },
      { title: 'Seamless Pipe Build', subtitle: 'Manufactured from ASTM A106 Gr.B pipe', icon: 'custom' },
      { title: 'Base Bearing Plates', subtitle: 'Fitted with PTFE or steel slide pads', icon: 'material' },
    ],
    specs: [
      { label: 'Product Name', value: 'Fabricated Pipe Trunnion Support' },
      { label: 'Application', value: 'Vertical riser pipe support and base elbow resting' },
      { label: 'Design Standards', value: 'ASME B31.1, ASME B31.3, MSS SP-58' },
      { label: 'Pipe Size Range', value: '2" to 48" NB' },
      { label: 'Trunnion Pipe Size', value: '2" to 24" NB Sch 40 / Sch 80 / Sch 160' },
      { label: 'Material Grades', value: 'ASTM A106 Gr.B, IS 2062, SS 304/316, Alloy Steel' },
      { label: 'Reinforcement', value: 'Available with full encircling repad (ASTM A516)' },
      { label: 'Surface Finish', value: 'Shop Primer, Hot Dip Galvanized, High Build Epoxy' },
    ],
    drawings: [
      { type: 'TYPE TR-1', title: '(Straight Pipe Trunnion)', diagramType: 'welded-shoe' },
      { type: 'TYPE TR-2', title: '(Base Elbow Trunnion with Repad)', diagramType: 'clamped-shoe' },
    ],
    keyFeatures: [
      'Provides high load carrying capacity for heavy vertical liquid-filled risers',
      'Calculated repad thickness ensures parent pipe wall is not overstressed',
      'Bevelled welding preparation for full penetration attachment welds',
      'Can be paired with PTFE slide plates to allow horizontal thermal flexing',
      'Manufactured to ASME piping codes and stress analysis requirements',
      '100% NDT liquid penetrant inspection on all structural welds',
    ],
    applications: defaultApplications,
    relatedSlugs: ['pipe-clamps', 'pipe-shoe-saddles', 'rest-supports', 'structural-columns', 'slide-supports'],
    datasheetPdf: cataloguePdf,
  },

  // 19. Rest Supports
  'rest-supports': {
    slug: 'rest-supports',
    title: 'Rest Supports',
    highlightWord: 'Supports',
    category: 'Primary Supports',
    categoryNumber: '01',
    tagline: 'Simple & Dependable Deadweight Gravity Supports',
    heroDescription:
      'Standard beam-mounted and base-mounted pipe rest supports engineered for direct gravity load absorption in horizontal piping racks.',
    badges: [
      { label: 'Direct Gravity Load', icon: 'shield' },
      { label: 'Heavy Duty', icon: 'gear' },
      { label: 'MSS SP-58', icon: 'layers' },
      { label: 'Quick Install', icon: 'check' },
    ],
    galleryImages: [
      slidesGuides,
      genSteel,
      genHardware,
      customFabrication,
      genClamp,
    ],
    overviewText:
      'AAA Supports Rest Supports provide simple, rugged deadweight load carrying for horizontal piping lines. Built in base-mounted stanchion, cantilever bracket, and beam resting pad styles to support standard pipelines across industrial process plants.',
    quickFeatures: [
      { title: 'Deadweight Gravity Support', subtitle: 'Simple, fail-safe load bearing', icon: 'standard' },
      { title: 'Adjustable Height Options', subtitle: 'Threaded stanchion leveling', icon: 'insulated' },
      { title: 'Curved Pipe Saddles', subtitle: 'Prevents point-load pipe deformation', icon: 'custom' },
      { title: 'HDG Protective Finish', subtitle: 'Decades of maintenance-free service', icon: 'material' },
    ],
    specs: [
      { label: 'Product Name', value: 'Pipe Rest Support' },
      { label: 'Application', value: 'Deadweight gravity load support for process piping' },
      { label: 'Design Standards', value: 'ASME B31.3, MSS SP-58 Type 36/37/38' },
      { label: 'Size Range', value: '1/2" to 48" NB' },
      { label: 'Load Capacity', value: 'Up to 30,000 kg safe gravity load' },
      { label: 'Material Grades', value: 'Carbon Steel IS 2062, ASTM A36' },
      { label: 'Types', value: 'Base Stanchion, Dummy Leg, Rest Saddle, Suspended Rest' },
      { label: 'Surface Finish', value: 'Hot Dip Galvanized / Primer / Epoxy' },
    ],
    drawings: [
      { type: 'TYPE RST-1', title: '(Base Stanchion Rest)', diagramType: 'welded-shoe' },
      { type: 'TYPE RST-2', title: '(Beam Mounted Saddle Rest)', diagramType: 'clamped-shoe' },
    ],
    keyFeatures: [
      'Cost-effective and robust solution for lines with minimal thermal movement',
      'Curved cradle distributes heavy liquid and insulation weights uniformly',
      'Supplied with pre-drilled base plates for rapid field bolting',
      'Heavy structural steel build ensures high mechanical factor of safety',
      'Available with stainless steel wear pads for anti-fretting protection',
      'Compliant with international petrochemical piping codes',
    ],
    applications: defaultApplications,
    relatedSlugs: ['pipe-shoe-saddles', 'slide-supports', 'u-clamps-u-bolts', 'trunnions', 'structural-beams'],
    datasheetPdf: cataloguePdf,
  },

  // 20. Secondary Supports: Structural Beams
  'structural-beams': {
    slug: 'structural-beams',
    title: 'Structural Beams',
    highlightWord: 'Beams',
    category: 'Secondary Supports',
    categoryNumber: '02',
    tagline: 'Heavy Structural Steel Cross Members & Cantilever Beams',
    heroDescription:
      'Fabricated and rolled structural H-beams, I-beams, and cantilever support arms designed to bridge structural columns and carry multiple pipeline loads.',
    badges: [
      { label: 'IS 2062 / ASTM A36', icon: 'shield' },
      { label: 'Heavy Load Rating', icon: 'gear' },
      { label: 'HDG Galvanized', icon: 'layers' },
      { label: 'Custom Spans', icon: 'check' },
    ],
    galleryImages: [
      customFabrication,
      genSteel,
      genRefinery,
      genOverhead,
      slidesGuides,
    ],
    overviewText:
      'AAA Supports Structural Beams are engineered secondary support members fabricated from hot-rolled universal beams (ISMB / ISMC / HEB / UC) and built-up plate girders. Designed to carry multiple piping runs across wide pipe rack spans with high structural deflection resistance.',
    quickFeatures: [
      { title: 'Rolled & Fabricated Sections', subtitle: 'ISMB 100 to 600, HEB, UB, UC & custom box', icon: 'standard' },
      { title: 'Cantilever & Span Beams', subtitle: 'Single-tier and multi-tier pipe rack beams', icon: 'insulated' },
      { title: 'Pre-Drilled Connection Holes', subtitle: 'CNC drilled for accurate field erection', icon: 'custom' },
      { title: 'Full HDG Protection', subtitle: 'Galvanized to IS 2629 / ASTM A123', icon: 'material' },
    ],
    specs: [
      { label: 'Product Name', value: 'Secondary Structural Beam' },
      { label: 'Application', value: 'Pipe rack cross tiers, cantilever support arms & header beams' },
      { label: 'Design Standards', value: 'IS 800, AISC 360, ASME B31.3' },
      { label: 'Section Sizes', value: 'ISMB 100 up to ISMB 600 / Fabricated Plate Girder' },
      { label: 'Span Lengths', value: 'Up to 12 meters single span' },
      { label: 'Material Grades', value: 'IS 2062 E250/E350, ASTM A36, ASTM A572 Gr.50' },
      { label: 'Connections', value: 'High strength friction grip (HSFG) bolted or welded' },
      { label: 'Surface Finish', value: 'Hot Dip Galvanized (minimum 86 microns) / Epoxy Paint' },
    ],
    drawings: [
      { type: 'TYPE SB-1', title: '(Cantilever Cross Beam)', diagramType: 'welded-shoe' },
      { type: 'TYPE SB-2', title: '(Multi-Tier Rack Beam)', diagramType: 'clamped-shoe' },
    ],
    keyFeatures: [
      'High moment of inertia resists excessive bending deflection under full pipe load',
      'End connection cleat plates CNC drilled for rapid bolt-up on site',
      'Manufactured to strict structural straightness and camber tolerances',
      'Certified welders qualified to ASME Section IX and AWS D1.1',
      'Full material traceability with EN 10204 3.1 inspection certification',
      'Designed for harsh outdoor chemical, marine, and refinery environments',
    ],
    applications: defaultApplications,
    relatedSlugs: ['structural-columns', 'structural-frames', 'brackets', 'pipe-shoe-saddles', 'structural-members'],
    datasheetPdf: cataloguePdf,
  },

  // 21. Secondary Supports: Structural Columns
  'structural-columns': {
    slug: 'structural-columns',
    title: 'Structural Columns',
    highlightWord: 'Columns',
    category: 'Secondary Supports',
    categoryNumber: '02',
    tagline: 'Heavy-Duty Structural Pipe Stanchions & Columns',
    heroDescription:
      'Heavy structural pipe stanchions and universal columns designed to transfer vertical gravity and dynamic earthquake loads to concrete foundations.',
    badges: [
      { label: 'High Buckling Strength', icon: 'shield' },
      { label: 'Heavy Base Plates', icon: 'gear' },
      { label: 'Up to 15m Height', icon: 'layers' },
      { label: 'AISC / IS 800', icon: 'check' },
    ],
    galleryImages: [
      customFabrication,
      genSteel,
      genRefinery,
      genHardware,
      genOverhead,
    ],
    overviewText:
      'AAA Supports Structural Columns are fabricated from heavy structural tubular pipes (ASTM A106/A53), universal column sections (UC/ISHB), and boxed plate sections. Fitted with heavy gusseted base plates and anchor bolt holes designed to anchor pipe racks and equipment support structures.',
    quickFeatures: [
      { title: 'Tubular & Rolled Sections', subtitle: 'Heavy circular pipe & H-column profiles', icon: 'standard' },
      { title: 'Gusseted Base Plates', subtitle: 'Base plate thickness up to 50mm with stiffeners', icon: 'insulated' },
      { title: 'Multi-Tier Connection Lugs', subtitle: 'Welded brackets for multiple piping levels', icon: 'custom' },
      { title: 'Anchor Bolt Templates', subtitle: 'Precision matched to civil foundation drawings', icon: 'material' },
    ],
    specs: [
      { label: 'Product Name', value: 'Structural Support Column' },
      { label: 'Application', value: 'Main vertical support for pipe racks, platforms & headers' },
      { label: 'Design Standards', value: 'IS 800, AISC 360, ASME B31.3' },
      { label: 'Section Types', value: 'Circular Hollow Pipe (4" to 24"), ISHB 150-450, Built-up Box' },
      { label: 'Column Heights', value: '1.5 meters up to 15 meters' },
      { label: 'Material Grades', value: 'IS 2062 Gr.B, ASTM A36, ASTM A106 Gr.B' },
      { label: 'Base Plate', value: 'Thick plate with full-strength stiffener ribs' },
      { label: 'Surface Finish', value: 'Hot Dip Galvanized (IS:2629) / Polyurethane Paint' },
    ],
    drawings: [
      { type: 'TYPE SC-1', title: '(Pipe Stanchion Column)', diagramType: 'welded-shoe' },
      { type: 'TYPE SC-2', title: '(Gusseted Base H-Column)', diagramType: 'clamped-shoe' },
    ],
    keyFeatures: [
      'Engineered for maximum axial compressive load and lateral wind load capacity',
      'Heavy base plate distributes foundation stresses uniformly to concrete piers',
      'All structural joints welded by certified welders with 100% NDT inspection',
      'Pre-fitted with lifting lugs for safe crane erection on project sites',
      'Hot dip galvanized inside and out for lifetime corrosion protection',
      'Built strictly to client structural engineering specifications',
    ],
    applications: defaultApplications,
    relatedSlugs: ['structural-beams', 'structural-frames', 'foundation-bolts', 'brackets', 'anchor'],
    datasheetPdf: cataloguePdf,
  },

  // 22. Secondary Supports: Structural Frames
  'structural-frames': {
    slug: 'structural-frames',
    title: 'Structural Frames',
    highlightWord: 'Frames',
    category: 'Secondary Supports',
    categoryNumber: '02',
    tagline: 'T-Post, Portal Frames & Modular Pipe Rack Structures',
    heroDescription:
      'Engineered secondary framing systems (T-Post, Portal Bents, Goal Post Frames) providing rigid, multi-tier spatial support for complex piping networks.',
    badges: [
      { label: 'Modular Framing', icon: 'shield' },
      { label: 'Multi-Tier Racks', icon: 'gear' },
      { label: 'Seismic Wind Safe', icon: 'layers' },
      { label: 'Bolt-Up Design', icon: 'check' },
    ],
    galleryImages: [
      customFabrication,
      genSteel,
      genOverhead,
      genRefinery,
      slidesGuides,
    ],
    overviewText:
      'AAA Supports Structural Frames encompass complete pipe rack bents, T-Post sleeper supports, and goal-post portal frames. Designed as pre-fabricated modular assemblies that bolt together swiftly on site, minimizing costly field welding and accelerating project commissioning schedules.',
    quickFeatures: [
      { title: 'T-Post & Goal Post Designs', subtitle: 'Single-column T-posts and dual-column portals', icon: 'standard' },
      { title: 'Modular Bolt-Together', subtitle: 'High strength bolted splices for quick assembly', icon: 'insulated' },
      { title: 'Multi-Tier Pipe Layers', subtitle: 'Accommodates multi-level pipeline banks', icon: 'custom' },
      { title: 'Certified Wind & Seismic', subtitle: 'Engineered for severe environmental loads', icon: 'material' },
    ],
    specs: [
      { label: 'Product Name', value: 'Modular Structural Pipe Frame' },
      { label: 'Application', value: 'Process plant offsite & onsite multi-pipe corridor support' },
      { label: 'Design Standards', value: 'IS 800, AISC Steel Construction Manual, ASME B31.3' },
      { label: 'Frame Types', value: 'T-Post, Portal Frame, 2-Tier / 3-Tier Pipe Rack Bent' },
      { label: 'Span & Clearance', value: 'Spans up to 10m; Clearances up to 8m' },
      { label: 'Material Grades', value: 'IS 2062 E250 / E350, ASTM A36' },
      { label: 'Fasteners', value: 'Grade 8.8 / 10.9 HSFG Structural Bolts' },
      { label: 'Surface Finish', value: 'Hot Dip Galvanized / Industrial Epoxy Polyurethane' },
    ],
    drawings: [
      { type: 'TYPE SF-1', title: '(T-Post Sleeper Frame)', diagramType: 'welded-shoe' },
      { type: 'TYPE SF-2', title: '(Portal Pipe Rack Bent)', diagramType: 'clamped-shoe' },
    ],
    keyFeatures: [
      'Shop pre-fitted and test-assembled to guarantee 100% field fit-up accuracy',
      'Drastically reduces on-site hot work and crane hire duration',
      'Integrated cable tray and utility piping mounting provisions',
      'Heavy moment-resistant base and knee connections withstand cyclic wind gusts',
      'Supplied with detailed erection marking plans and assembly hardware',
      'Manufactured to global EPC oil & gas and power plant standards',
    ],
    applications: defaultApplications,
    relatedSlugs: ['structural-beams', 'structural-columns', 'structural-members', 'brackets', 'pipe-shoe-saddles'],
    datasheetPdf: cataloguePdf,
  },

  // 23. Secondary Supports: Structural Members
  'structural-members': {
    slug: 'structural-members',
    title: 'Structural Members',
    highlightWord: 'Members',
    category: 'Secondary Supports',
    categoryNumber: '02',
    tagline: 'Angle Iron, Structural Channels & Wind Bracing Elements',
    heroDescription:
      'Precision fabricated structural angles, channels, bracing rods, and cross ties providing stability and load distribution across secondary support steelwork.',
    badges: [
      { label: 'Angles & Channels', icon: 'shield' },
      { label: 'Cross Bracing', icon: 'gear' },
      { label: 'High Rigidity', icon: 'layers' },
      { label: 'IS:2062 Certified', icon: 'check' },
    ],
    galleryImages: [
      genSteel,
      customFabrication,
      genHardware,
      genRefinery,
      slidesGuides,
    ],
    overviewText:
      'AAA Supports Structural Members include equal/unequal structural angles (ISA), parallel flange channels (ISMC/PFC), and diagonal wind bracing assemblies. Used to brace pipe rack bents, form auxiliary support bridges, and secure secondary attachments.',
    quickFeatures: [
      { title: 'Angles & Channels', subtitle: 'Standard & heavy structural profiles', icon: 'standard' },
      { title: 'Diagonal Wind Bracing', subtitle: 'Resists longitudinal thermal & seismic forces', icon: 'insulated' },
      { title: 'CNC Cut & Punched', subtitle: 'High precision slotted holes and bevels', icon: 'custom' },
      { title: 'Corrosion Shielding', subtitle: 'Hot Dip Galvanized to international standards', icon: 'material' },
    ],
    specs: [
      { label: 'Product Name', value: 'Structural Support Member' },
      { label: 'Application', value: 'Lateral/longitudinal bracing & auxiliary pipe tier framing' },
      { label: 'Design Standards', value: 'IS 808, IS 800, AISC 360' },
      { label: 'Member Types', value: 'Equal Angles (50x50 to 200x200), Channels (75x40 to 400x100), Bracing Rods' },
      { label: 'Material Grades', value: 'IS 2062 Grade A/B, ASTM A36' },
      { label: 'Length Options', value: 'Custom cut and punched to job drawings' },
      { label: 'Connection', value: 'Bolted gusset plates or direct welding' },
      { label: 'Surface Finish', value: 'Hot Dip Galvanized / Red Oxide Primer' },
    ],
    drawings: [
      { type: 'TYPE SM-1', title: '(Channel Secondary Member)', diagramType: 'welded-shoe' },
      { type: 'TYPE SM-2', title: '(Diagonal Cross Bracing)', diagramType: 'clamped-shoe' },
    ],
    keyFeatures: [
      'Provides crucial structural rigidity against longitudinal pipe expansion forces',
      'CNC punched holes ensure alignment without field reaming or torch cutting',
      'High grade certified structural steel from primary steel producers',
      'Smooth deburred edges for safe handling and clean galvanizing finish',
      'Full mill test certificates (MTC) supplied with every consignment',
      'Designed to interface seamlessly with primary pipe hangers and clamps',
    ],
    applications: defaultApplications,
    relatedSlugs: ['structural-beams', 'structural-frames', 'structural-columns', 'brackets', 'pipe-clamps'],
    datasheetPdf: cataloguePdf,
  },

  // 24. Secondary Supports: Brackets
  'brackets': {
    slug: 'brackets',
    title: 'Brackets',
    highlightWord: 'Brackets',
    category: 'Secondary Supports',
    categoryNumber: '02',
    tagline: 'Heavy-Duty Wall & Column Mounted Cantilever Brackets',
    heroDescription:
      'High-capacity cantilever brackets engineered for mounting pipe supports directly to building columns, concrete walls, and existing steel structures.',
    badges: [
      { label: 'Cantilever Arms', icon: 'shield' },
      { label: 'Column / Wall Mount', icon: 'gear' },
      { label: 'Up to 50 kN', icon: 'layers' },
      { label: 'MSS SP-58', icon: 'check' },
    ],
    galleryImages: [
      customFabrication,
      genSteel,
      genHardware,
      slidesGuides,
      genClamp,
    ],
    overviewText:
      'AAA Supports Cantilever Brackets are designed to support piping where overhead steelwork is unavailable. Fabricated in light, medium, and heavy-duty configurations (MSS SP-58 Types 31, 32, 33) with thick mounting back-plates and triangular gusset stiffeners for wall or column bolting.',
    quickFeatures: [
      { title: 'Light, Medium & Heavy Duty', subtitle: 'Capacities from 2.5 kN up to 50 kN', icon: 'standard' },
      { title: 'Cantilever Reach up to 1.5m', subtitle: 'Custom arm lengths to clear obstructions', icon: 'insulated' },
      { title: 'Triangular Gusset Ribs', subtitle: 'High bending moment resistance', icon: 'custom' },
      { title: 'Slotted Top Flange', subtitle: 'Permits easy position tuning of pipe shoes', icon: 'material' },
    ],
    specs: [
      { label: 'Product Name', value: 'Cantilever Pipe Support Bracket' },
      { label: 'Application', value: 'Side mounting of piping from structural columns & concrete walls' },
      { label: 'Design Standards', value: 'MSS SP-58 (Types 31/32/33), ASME B31.3' },
      { label: 'Arm Lengths', value: '300mm to 1500mm cantilever projection' },
      { label: 'Safe Working Load', value: '2.5 kN to 50 kN at arm tip' },
      { label: 'Material Grades', value: 'IS 2062 Gr.B, ASTM A36 Heavy Steel' },
      { label: 'Mounting Style', value: 'Bolted to concrete/steel or welded direct to column' },
      { label: 'Surface Finish', value: 'Hot Dip Galvanized to IS:2629 / Epoxy Paint' },
    ],
    drawings: [
      { type: 'TYPE BR-1', title: '(Medium Duty Cantilever Bracket)', diagramType: 'welded-shoe' },
      { type: 'TYPE BR-2', title: '(Heavy Duty Gusseted Bracket)', diagramType: 'clamped-shoe' },
    ],
    keyFeatures: [
      'Eliminates the need for full floor-mounted stanchions, saving floor space',
      'Thick mounting plate with elongated bolt slots accommodates anchor tolerances',
      'Full penetration continuous welding withstands severe dynamic vibration',
      'Top channel flange accepts U-bolts, pipe shoes, and roller assemblies',
      'Proof tested to verify tip load capacity before delivery',
      'Built in strict compliance with MSS SP-58 load rating standards',
    ],
    applications: defaultApplications,
    relatedSlugs: ['structural-columns', 'structural-beams', 'pipe-shoe-saddles', 'pipe-clamps', 'foundation-bolts'],
    datasheetPdf: cataloguePdf,
  },

  // 25. Pipe Fittings
  'pipe-fittings': {
    slug: 'pipe-fittings',
    title: 'Pipe Fittings',
    highlightWord: 'Fittings',
    category: 'Pipe Fittings, Flanges & Spools',
    categoryNumber: '03',
    tagline: 'Precision Butt Weld & Forged High-Pressure Pipe Fittings',
    heroDescription:
      'ASME B16.9 butt-weld and ASME B16.11 forged high-pressure fittings manufactured from certified carbon, alloy, and stainless steels for high-integrity process lines.',
    badges: [
      { label: 'ASME B16.9 / B16.11', icon: 'shield' },
      { label: 'Sch 10 to XXS', icon: 'gear' },
      { label: '100% NDT Tested', icon: 'layers' },
      { label: 'IBR Certified', icon: 'check' },
    ],
    galleryImages: [
      oilGasSolutions,
      genClamp,
      genHardware,
      customFabrication,
      genRefinery,
    ],
    overviewText:
      'AAA Supports supplies an extensive line of butt weld and forged pipe fittings including 45°/90° long & short radius elbows, equal & reducing tees, concentric & eccentric reducers, caps, and stub ends. Manufactured in accordance with ASME B16.9, MSS SP-75, and IBR regulations.',
    quickFeatures: [
      { title: 'Elbows, Tees & Reducers', subtitle: '45°/90° elbows, equal/unequal tees & reducers', icon: 'standard' },
      { title: 'Schedules 10 to XXS', subtitle: 'Standard, Sch 40, Sch 80, Sch 160, XXS', icon: 'insulated' },
      { title: 'Carbon, SS & Alloy Steels', subtitle: 'WPB, WP11, WP22, WP91, SS 304L/316L', icon: 'custom' },
      { title: 'Full Bevel Inspection', subtitle: 'Precision CNC machined welding bevels', icon: 'material' },
    ],
    specs: [
      { label: 'Product Name', value: 'High Pressure Pipe Fittings' },
      { label: 'Application', value: 'Direction change, branching & diameter reduction in process piping' },
      { label: 'Design Standards', value: 'ASME B16.9, ASME B16.11, MSS SP-75, IBR' },
      { label: 'Size Range', value: '1/2" to 48" NB (DN15 to DN1200)' },
      { label: 'Wall Thickness', value: 'Sch 10, Sch 20, Sch 40, Sch 80, Sch 160, Sch XXS' },
      { label: 'Material Grades', value: 'ASTM A234 WPB/WP11/WP22/WP91, ASTM A403 WP304L/316L' },
      { label: 'End Connections', value: 'Butt Weld (Bevelled to ASME B16.25), Socket Weld, Threaded' },
      { label: 'Testing & QA', value: '100% Radiography / UT, Hydrostatic tested, Positive Material Identification (PMI)' },
    ],
    drawings: [
      { type: 'TYPE PF-1', title: '(90° Long Radius Elbow)', diagramType: 'welded-shoe' },
      { type: 'TYPE PF-2', title: '(Equal / Reducing Tee)', diagramType: 'clamped-shoe' },
    ],
    keyFeatures: [
      'Uniform wall thickness and true circularity ensure smooth laminar fluid flow',
      'CNC machined weld bevels ensure rapid, defect-free root pass welding',
      'Supplied with comprehensive 3.1 Material Test Reports and IBR Form III-C',
      'Heat treated and shot blasted for optimal grain structure and clean surface',
      '100% PMI tested to ensure absolute metallurgical compliance',
      'Engineered to withstand extreme pressure and thermal cycling',
    ],
    applications: defaultApplications,
    relatedSlugs: ['flanges', 'piping-spools', 'pipe-shoe-saddles', 'pipe-clamps', 'u-clamps-u-bolts'],
    datasheetPdf: cataloguePdf,
  },

  // 26. Flanges
  'flanges': {
    slug: 'flanges',
    title: 'Flanges',
    highlightWord: 'Flanges',
    category: 'Pipe Fittings, Flanges & Spools',
    categoryNumber: '03',
    tagline: 'Precision Forged Industrial Piping Flanges',
    heroDescription:
      'Forged steel flanges manufactured to ASME B16.5 and ASME B16.47 standards across Class 150 to Class 2500 pressure ratings for leak-tight piping connections.',
    badges: [
      { label: 'Class 150 - 2500', icon: 'shield' },
      { label: 'ASME B16.5 / B16.47', icon: 'gear' },
      { label: 'Forged Metallurgy', icon: 'layers' },
      { label: 'Serrated Face', icon: 'check' },
    ],
    galleryImages: [
      oilGasSolutions,
      customFabrication,
      genHardware,
      genClamp,
      genRefinery,
    ],
    overviewText:
      'AAA Supports supplies high-integrity forged flanges in Weld Neck (WN), Slip-On (SO), Blind (BL), Socket Weld (SW), Threaded, and Lap Joint configurations. Manufactured from normalized forgings in carbon steel (A105), low-temp steel (A350 LF2), alloy steel (A182 F11/F22), and stainless steel (A182 F304L/F316L).',
    quickFeatures: [
      { title: 'Weld Neck, Slip-On & Blind', subtitle: 'Full range of ANSI/ASME flange types', icon: 'standard' },
      { title: 'Pressure Classes 150 to 2500', subtitle: 'Class 150, 300, 600, 900, 1500, 2500', icon: 'insulated' },
      { title: 'Raised & Ring Type Joint', subtitle: 'RF (125-250 AARH serration) and RTJ grooves', icon: 'custom' },
      { title: 'Normalized Forgings', subtitle: 'Tested for grain size, impact & hardness', icon: 'material' },
    ],
    specs: [
      { label: 'Product Name', value: 'Industrial Forged Flange' },
      { label: 'Application', value: 'Removable leak-tight connections for valves, vessels & piping' },
      { label: 'Design Standards', value: 'ASME B16.5, ASME B16.47 (Series A/B), BS 4504, DIN' },
      { label: 'Size Range', value: '1/2" to 48" NB (DN15 to DN1200)' },
      { label: 'Pressure Ratings', value: 'Class 150, 300, 600, 900, 1500, 2500 LBS' },
      { label: 'Material Grades', value: 'ASTM A105, A350 LF2, A182 F11/F22/F91, A182 F304L/F316L' },
      { label: 'Facing Types', value: 'Raised Face (RF), Flat Face (FF), Ring Type Joint (RTJ)' },
      { label: 'Surface Finish', value: 'Anti-rust oiled / Yellow Varnish / Hot Dip Galvanized' },
    ],
    drawings: [
      { type: 'TYPE FLG-WN', title: '(Weld Neck Flange)', diagramType: 'welded-shoe' },
      { type: 'TYPE FLG-BL', title: '(Blind / Slip-On Flange)', diagramType: 'clamped-shoe' },
    ],
    keyFeatures: [
      'Precision CNC turned spiral serrated sealing face (125-250 micro-inch Ra)',
      'High-integrity closed die forgings free from porosity and internal inclusions',
      'Full compliance with NACE MR0175 / ISO 15156 for sour gas service',
      'Drilled to exact bolt circle diameters matching international standards',
      '100% Ultrasonic and Magnetic Particle inspection on high pressure classes',
      'Supplied with heat-numbered stamp and EN 10204 3.1 inspection certification',
    ],
    applications: defaultApplications,
    relatedSlugs: ['pipe-fittings', 'piping-spools', 'pipe-shoe-saddles', 'pipe-clamps', 'foundation-bolts'],
    datasheetPdf: cataloguePdf,
  },

  // 27. Piping Spools
  'piping-spools': {
    slug: 'piping-spools',
    title: 'Piping Spools',
    highlightWord: 'Spools',
    category: 'Pipe Fittings, Flanges & Spools',
    categoryNumber: '03',
    tagline: 'Shop-Fabricated & Hydro-Tested Isometric Piping Spools',
    heroDescription:
      'Custom pre-fabricated piping spool assemblies shop-welded, non-destructively tested, and painted under controlled factory conditions for rapid site hook-up.',
    badges: [
      { label: 'Shop Fabricated', icon: 'shield' },
      { label: '100% NDT & Hydro', icon: 'gear' },
      { label: 'ASME B31.3', icon: 'layers' },
      { label: 'Plug & Play', icon: 'check' },
    ],
    galleryImages: [
      oilGasSolutions,
      genOverhead,
      genRefinery,
      customFabrication,
      genSteel,
    ],
    overviewText:
      'AAA Supports provides turnkey fabrication of prefabricated piping spools built strictly to client isometric drawings. Utilizing automatic orbital welding, submerged arc welding (SAW), and TIG processes in controlled factory bays. Every spool undergoes 100% dimensional QA, complete non-destructive examination (RT/UT/MPI), hydrostatic pressure testing, and multi-coat protective painting.',
    quickFeatures: [
      { title: 'Built to Isometric Drawings', subtitle: 'Precision dimensional tolerance to ±2mm', icon: 'standard' },
      { title: '100% NDT & Hydro-Testing', subtitle: 'Radiography, MPI, ultrasonic & hydrostatic test', icon: 'insulated' },
      { title: 'Certified Welders & WPS/PQR', subtitle: 'Qualified to ASME Section IX & IBR standards', icon: 'custom' },
      { title: 'Blast Cleaned & Painted', subtitle: 'SA 2.5 grit blasting with epoxy/PU coating', icon: 'material' },
    ],
    specs: [
      { label: 'Product Name', value: 'Pre-Fabricated Piping Spool' },
      { label: 'Application', value: 'Refinery units, offshore skids, power plant header hook-ups' },
      { label: 'Design Standards', value: 'ASME B31.1, ASME B31.3, ASME Section VIII, IBR' },
      { label: 'Spool Size Range', value: '1/2" up to 60" NB pipe diameters' },
      { label: 'Welding Processes', value: 'GTAW (TIG), SMAW, GMAW, SAW (Submerged Arc)' },
      { label: 'Metallurgy', value: 'Carbon Steel (A106/API 5L), Low Temp (A333), SS, Alloy, Inconel' },
      { label: 'Quality Verification', value: '100% Dimensional Inspection, RT/UT, Hydrostatic Test to 1.5x design' },
      { label: 'Documentation', value: 'Complete Manufacturing Data Dossier (MDR) with As-Built isometrics' },
    ],
    drawings: [
      { type: 'TYPE SPL-1', title: '(Isometric Flanged Piping Spool)', diagramType: 'welded-shoe' },
      { type: 'TYPE SPL-2', title: '(Header Branch Spool Assembly)', diagramType: 'clamped-shoe' },
    ],
    keyFeatures: [
      'Reduces site erection time and costly field hot-work by over 70%',
      'Controlled factory environment ensures superior weld metallurgy and root penetration',
      'Post Weld Heat Treatment (PWHT) in calibrated automated furnace where required',
      'Supplied with protective end caps and flange blind protectors for transit safety',
      'Turnkey delivery with complete inspection test plan (ITP) and IBR certification',
      'Designed and tagged for seamless bolt-up directly on site structures',
    ],
    applications: defaultApplications,
    relatedSlugs: ['flanges', 'pipe-fittings', 'pipe-shoe-saddles', 'pipe-clamps', 'slide-supports'],
    datasheetPdf: cataloguePdf,
  },
}

export function getProductBySlug(slug) {
  if (productsData[slug]) {
    return productsData[slug]
  }

  // Generate clean details for un-mapped slugs
  const formattedName = slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

  const words = formattedName.split(' ')
  const highlightWord = words.length > 1 ? words[words.length - 1] : formattedName

  // Select accurate contextual product images
  let primaryImg = genSteel
  if (slug.includes('puf') || slug.includes('puff') || slug.includes('cryogenic')) primaryImg = pufCryogenicSupport
  else if (slug.includes('snubber')) primaryImg = hydraulicSnubber
  else if (slug.includes('roller')) primaryImg = pipeRollerSupport
  else if (slug.includes('slide')) primaryImg = slidesGuides
  else if (slug.includes('guide')) primaryImg = slidesGuides
  else if (slug.includes('spring')) primaryImg = variableSpringSupports
  else if (slug.includes('constant')) primaryImg = constantSpringSupports
  else if (slug.includes('hanger')) primaryImg = constantSpringHangers
  else if (slug.includes('clamp') || slug.includes('u-bolt')) primaryImg = pipeClampsUBolts
  else if (slug.includes('bolt')) primaryImg = genHardware
  else if (slug.includes('structural') || slug.includes('beam') || slug.includes('column') || slug.includes('frame') || slug.includes('bracket')) primaryImg = customFabrication
  else if (slug.includes('fitting') || slug.includes('flange') || slug.includes('spool')) primaryImg = oilGasSolutions
  else if (slug.includes('trunnion') || slug.includes('stop') || slug.includes('anchor')) primaryImg = genSteel
  else if (slug.includes('marine')) primaryImg = marinePipeSupports

  return {
    slug,
    title: formattedName,
    highlightWord,
    category: slug.includes('structural') || slug.includes('bracket') ? 'Secondary Supports' : slug.includes('fitting') || slug.includes('flange') || slug.includes('spool') ? 'Pipe Fittings & Spools' : 'Primary Supports',
    categoryNumber: slug.includes('structural') || slug.includes('bracket') ? '02' : slug.includes('fitting') || slug.includes('flange') || slug.includes('spool') ? '03' : '01',
    tagline: `Engineered Solutions for ${formattedName}`,
    heroDescription: `${formattedName} manufactured by AAA Supports Pvt. Ltd. in strict compliance with ASME, ANSI, and MSS SP-58 specifications for heavy industrial piping installations.`,
    badges: [
      { label: 'High Strength', icon: 'shield' },
      { label: 'Corrosion Resistance', icon: 'gear' },
      { label: 'Wide Material Range', icon: 'layers' },
      { label: 'Standard Compliant', icon: 'check' },
    ],
    galleryImages: [
      primaryImg,
      slidesGuides,
      genHardware,
      customFabrication,
      genSteel,
    ],
    overviewText: `${formattedName} from AAA Supports Pvt. Ltd. provides dependable structural support, load control, and thermal expansion handling for complex piping systems across refineries, power stations, and petrochemical facilities.`,
    quickFeatures: [
      { title: 'Standard Design', subtitle: 'As per ASME/MSS standards', icon: 'standard' },
      { title: 'Suitable for Insulated Lines', subtitle: 'With insulation clamping options', icon: 'insulated' },
      { title: 'Custom Fabrication', subtitle: 'Available for special requirements', icon: 'custom' },
      { title: 'Wide Material Options', subtitle: 'Carbon Steel, SS 304, SS 316, Alloys', icon: 'material' },
    ],
    specs: [
      { label: 'Product Name', value: formattedName },
      { label: 'Application', value: 'Industrial piping support and load transfer' },
      { label: 'Design Standards', value: 'ASME B31.1, ASME B31.3' },
      { label: 'Material Standards', value: 'MSS SP-58, MSS SP-69' },
      { label: 'Material Grades', value: 'Carbon Steel, SS 304, SS 316, Alloy Steel' },
      { label: 'Size Range', value: '1/2" to 48" or custom project specifications' },
      { label: 'Types', value: 'Welded, Fabricated, Clamped, or Variable Configuration' },
      { label: 'Surface Finish', value: 'Primer, Hot Dip Galvanized, Epoxy Coating' },
    ],
    drawings: [
      { type: 'TYPE 01', title: '(Standard Configuration)', diagramType: 'welded-shoe' },
      { type: 'TYPE 02', title: '(Insulated / Clamped Variant)', diagramType: 'clamped-shoe' },
    ],
    keyFeatures: [
      'Robust industrial build and reliable performance',
      'Suitable for high temperature and high pressure lines',
      'Available for insulated and non-insulated systems',
      'Custom sizes and configurations to client drawings',
      'Weather and corrosion resistant surface protection',
      'Compliance with international quality standards',
    ],
    applications: defaultApplications,
    relatedSlugs: ['pipe-shoe-saddles', 'pipe-clamps', 'slide-supports', 'u-clamps-u-bolts', 'variable-spring-hangers-supports'],
    datasheetPdf: cataloguePdf,
  }
}
