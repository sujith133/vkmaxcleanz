export interface FurnitureProduct {
    id: number;
    name: string;
    category: string;
    subcategory: string;
    price: number;
    image: string;
    description: string;
    features: string[];
    isNew?: boolean;
    isBestseller?: boolean;
}

export const categories = [
    { name: 'Living Room', slug: 'living-room', image: '/images/furniture/cat_living_room.webp', count: 10 },
    { name: 'Bedroom', slug: 'bedroom', image: '/images/furniture/cat_bedroom.webp', count: 8 },
    { name: 'Dining Room', slug: 'dining-room', image: '/images/furniture/cat_dining.webp', count: 8 },
    { name: 'Home Office', slug: 'home-office', image: '/images/furniture/cat_office.webp', count: 8 },
    { name: 'Outdoor', slug: 'outdoor', image: '/images/furniture/cat_outdoor.webp', count: 6 },
    { name: 'Storage', slug: 'storage', image: '/images/furniture/cat_storage.webp', count: 7 },
];

export const furnitureProducts: FurnitureProduct[] = [
    // ── Living Room (10) ──
    {
        id: 1, name: 'Velvet Curve Sofa', category: 'Living Room', subcategory: 'Sofas',
        price: 42999, image: '/images/furniture/prod_velvet_curve_sofa.webp',
        description: 'Modern curved 3-seater sofa in olive green velvet with wooden legs.',
        features: ['Premium velvet upholstery', 'Solid wood frame', 'High-density foam cushions'],
        isBestseller: true,
    },
    {
        id: 2, name: 'Cognac Leather Armchair', category: 'Living Room', subcategory: 'Accent Chairs',
        price: 18999, image: '/images/furniture/prod_cognac_armchair.webp',
        description: 'Mid-century modern accent armchair in cognac brown leather with wooden frame.',
        features: ['Genuine leather', 'Ergonomic design', 'Sturdy hardwood legs'],
        isNew: true,
    },
    {
        id: 3, name: 'Marble Top Coffee Table', category: 'Living Room', subcategory: 'Coffee Tables',
        price: 14999, image: '/images/furniture/prod_marble_coffee_table.webp',
        description: 'Modern coffee table with white marble top and black metal geometric base.',
        features: ['Natural marble top', 'Powder-coated steel base', 'Anti-scratch pads'],
        isBestseller: true,
    },
    {
        id: 4, name: 'Walnut TV Console', category: 'Living Room', subcategory: 'TV Units',
        price: 22999, image: '/images/furniture/prod_walnut_tv_console.webp',
        description: 'Mid-century walnut wood TV console with sliding doors and open shelving.',
        features: ['Solid walnut wood', 'Cable management', 'Sliding door storage'],
    },
    {
        id: 5, name: 'Modular L-Shape Sofa', category: 'Living Room', subcategory: 'Sofas',
        price: 67999, image: '/images/furniture/prod_modular_l_sofa.webp',
        description: 'Large modular L-shaped sofa in charcoal grey fabric with chaise lounge.',
        features: ['Modular configuration', 'Removable covers', 'Pocket spring seating'],
        isNew: true,
    },
    {
        id: 6, name: 'Rattan Accent Chair', category: 'Living Room', subcategory: 'Accent Chairs',
        price: 12999, image: '/images/furniture/prod_rattan_accent_chair.webp',
        description: 'Natural rattan woven accent chair with cream cushion, bohemian style.',
        features: ['Handwoven rattan', 'Removable cushion', 'Lightweight & durable'],
    },
    {
        id: 7, name: 'Nested Side Tables Set', category: 'Living Room', subcategory: 'Side Tables',
        price: 8999, image: '/images/furniture/prod_nested_side_tables.webp',
        description: 'Set of two nesting round side tables with brass frame and black marble top.',
        features: ['Marble & brass', 'Space-saving nesting', 'Two sizes included'],
    },
    {
        id: 8, name: 'Industrial Bookshelf', category: 'Living Room', subcategory: 'Shelving',
        price: 16999, image: '/images/furniture/prod_industrial_bookshelf.webp',
        description: 'Tall industrial-style ladder bookshelf with black metal frame and wooden shelves.',
        features: ['5-tier shelving', 'Industrial aesthetic', 'Wall-mountable'],
    },
    {
        id: 46, name: 'Floor Lamp with Shelf', category: 'Living Room', subcategory: 'Lighting',
        price: 7999, image: '/images/furniture/prod_floor_lamp_shelf.webp',
        description: 'Modern floor lamp with built-in wooden shelves and warm fabric shade.',
        features: ['3 wooden tiers', 'Warm ambient light', 'Multi-functional'],
    },
    {
        id: 47, name: 'Pouf Ottoman', category: 'Living Room', subcategory: 'Ottomans',
        price: 3999, image: '/images/furniture/prod_pouf_ottoman.webp',
        description: 'Round knitted pouf ottoman in mustard yellow cotton yarn.',
        features: ['Hand-knitted', '100% cotton', 'Dense comfortable seating'],
    },

    // ── Bedroom (8) ──
    {
        id: 9, name: 'Upholstered King Bed', category: 'Bedroom', subcategory: 'Beds',
        price: 54999, image: '/images/furniture/prod_upholstered_king_bed.webp',
        description: 'Luxury upholstered king-size bed frame with tufted headboard in warm beige.',
        features: ['Button-tufted headboard', 'Solid wood slats', 'No box spring needed'],
        isBestseller: true,
    },
    {
        id: 10, name: 'Platform Queen Bed', category: 'Bedroom', subcategory: 'Beds',
        price: 38999, image: '/images/furniture/prod_platform_queen_bed.webp',
        description: 'Modern platform queen bed in solid walnut wood with minimalist floating design.',
        features: ['Floating design', 'Built-in nightstand ledges', 'Under-bed storage'],
    },
    {
        id: 11, name: 'Bedside Table Set', category: 'Bedroom', subcategory: 'Nightstands',
        price: 9999, image: '/images/furniture/prod_bedside_table_set.webp',
        description: 'Pair of modern wooden bedside tables with single drawer and open shelf.',
        features: ['Set of 2', 'Soft-close drawer', 'Warm teak finish'],
    },
    {
        id: 12, name: 'Sliding Door Wardrobe', category: 'Bedroom', subcategory: 'Wardrobes',
        price: 62999, image: '/images/furniture/prod_sliding_wardrobe.webp',
        description: 'Large modern 3-door sliding wardrobe in matte black and walnut wood.',
        features: ['Full-length mirror', 'Internal organizers', 'Smooth sliding mechanism'],
        isNew: true,
    },
    {
        id: 13, name: 'Dresser with Mirror', category: 'Bedroom', subcategory: 'Dressers',
        price: 28999, image: '/images/furniture/prod_dresser_mirror.webp',
        description: 'Elegant 6-drawer dresser in white lacquer finish with brass handles.',
        features: ['6 spacious drawers', 'Matching round mirror', 'Brass handle accents'],
    },
    {
        id: 14, name: 'Storage Ottoman Bench', category: 'Bedroom', subcategory: 'Benches',
        price: 11999, image: '/images/furniture/prod_storage_ottoman.webp',
        description: 'Upholstered storage ottoman bench in dusty pink velvet with gold legs.',
        features: ['Hidden storage', 'Velvet upholstery', 'Gold-finish legs'],
    },
    {
        id: 15, name: 'Wooden Clothes Rack', category: 'Bedroom', subcategory: 'Storage',
        price: 6999, image: '/images/furniture/prod_clothes_rack.webp',
        description: 'Minimalist freestanding wooden clothes rack in natural oak with bottom shelf.',
        features: ['Natural oak wood', 'Bottom shoe shelf', 'Easy assembly'],
    },
    {
        id: 16, name: 'Bunk Bed with Storage', category: 'Bedroom', subcategory: 'Beds',
        price: 44999, image: '/images/furniture/prod_bunk_bed.webp',
        description: 'Modern children\'s bunk bed in solid pine with built-in storage drawers.',
        features: ['Built-in drawers', 'Safety guardrails', 'Sturdy pine construction'],
    },

    // ── Dining Room (8) ──
    {
        id: 17, name: '6-Seater Dining Table', category: 'Dining Room', subcategory: 'Dining Tables',
        price: 34999, image: '/images/furniture/prod_6_seater_dining.webp',
        description: 'Solid sheesham wood 6-seater dining table with tapered legs.',
        features: ['Solid sheesham wood', 'Seats 6 comfortably', 'Natural grain finish'],
        isBestseller: true,
    },
    {
        id: 18, name: 'Upholstered Dining Chair', category: 'Dining Room', subcategory: 'Dining Chairs',
        price: 5999, image: '/images/furniture/prod_upholstered_dining_chair.webp',
        description: 'Modern dining chair with grey fabric seat and curved wooden backrest.',
        features: ['Padded fabric seat', 'Curved back support', 'Stackable design'],
    },
    {
        id: 19, name: 'Round Dining Table', category: 'Dining Room', subcategory: 'Dining Tables',
        price: 27999, image: '/images/furniture/prod_round_dining_table.webp',
        description: 'Modern round dining table with white marble top and black pedestal base.',
        features: ['Marble top', 'Pedestal base', 'Seats 4'],
        isNew: true,
    },
    {
        id: 20, name: 'Dining Bench', category: 'Dining Room', subcategory: 'Benches',
        price: 12999, image: '/images/furniture/prod_dining_bench.webp',
        description: 'Long solid wood dining bench with honey finish.',
        features: ['Solid hardwood', 'Seats 3', 'Warm honey finish'],
    },
    {
        id: 21, name: 'Crockery Cabinet', category: 'Dining Room', subcategory: 'Cabinets',
        price: 38999, image: '/images/furniture/prod_crockery_cabinet.webp',
        description: 'Tall wooden crockery display cabinet with glass doors and closed storage.',
        features: ['Glass display doors', 'Adjustable shelves', 'Walnut finish'],
    },
    {
        id: 22, name: 'Bar Cabinet', category: 'Dining Room', subcategory: 'Bar Units',
        price: 24999, image: '/images/furniture/prod_bar_cabinet.webp',
        description: 'Art deco style bar cabinet in dark wood with brass accents.',
        features: ['Fold-down serving shelf', 'Glass holder rack', 'Brass detailing'],
    },
    {
        id: 23, name: 'Folding Dining Set', category: 'Dining Room', subcategory: 'Dining Sets',
        price: 18999, image: '/images/furniture/prod_folding_dining_set.webp',
        description: 'Compact space-saving folding dining table with 4 chairs stored inside.',
        features: ['4 chairs included', 'Foldable design', 'Space-saving'],
    },
    {
        id: 24, name: 'Serving Trolley Cart', category: 'Dining Room', subcategory: 'Trolleys',
        price: 8999, image: '/images/furniture/prod_serving_trolley.webp',
        description: 'Modern 2-tier serving trolley cart with black metal frame and wooden trays.',
        features: ['Smooth rolling wheels', '2-tier storage', 'Portable design'],
    },

    // ── Home Office (8) ──
    {
        id: 25, name: 'Executive Desk', category: 'Home Office', subcategory: 'Desks',
        price: 29999, image: '/images/furniture/prod_executive_desk.webp',
        description: 'Large executive writing desk in dark walnut with 3 drawers.',
        features: ['Dark walnut finish', 'Leather desk pad inlay', '3 lockable drawers'],
        isBestseller: true,
    },
    {
        id: 26, name: 'Ergonomic Mesh Chair', category: 'Home Office', subcategory: 'Office Chairs',
        price: 15999, image: '/images/furniture/prod_ergonomic_mesh_chair.webp',
        description: 'High-back ergonomic office chair with breathable mesh back.',
        features: ['Adjustable armrests', 'Lumbar support', 'Breathable mesh'],
        isBestseller: true,
    },
    {
        id: 27, name: 'Standing Desk', category: 'Home Office', subcategory: 'Desks',
        price: 34999, image: '/images/furniture/prod_standing_desk.webp',
        description: 'Modern electric height-adjustable standing desk with walnut top.',
        features: ['Electric height adjustment', 'Memory presets', 'Cable management'],
        isNew: true,
    },
    {
        id: 28, name: 'Office Bookcase', category: 'Home Office', subcategory: 'Shelving',
        price: 19999, image: '/images/furniture/prod_office_bookcase.webp',
        description: 'Professional wooden bookcase with 4 shelves and lower cabinet doors.',
        features: ['4 open shelves', 'Lower cabinet', 'Oak finish'],
    },
    {
        id: 29, name: 'Filing Cabinet', category: 'Home Office', subcategory: 'Storage',
        price: 10999, image: '/images/furniture/prod_filing_cabinet.webp',
        description: 'Modern 3-drawer filing cabinet in matte white with wooden top.',
        features: ['3 deep drawers', 'Wooden top surface', 'Brass handles'],
    },
    {
        id: 30, name: 'Monitor Stand Shelf', category: 'Home Office', subcategory: 'Accessories',
        price: 3999, image: '/images/furniture/prod_monitor_stand.webp',
        description: 'Bamboo wood monitor riser stand with storage compartments.',
        features: ['Bamboo wood', 'Storage underneath', 'Ergonomic height'],
    },
    {
        id: 31, name: 'Study Table for Kids', category: 'Home Office', subcategory: 'Desks',
        price: 12999, image: '/images/furniture/prod_kids_study_table.webp',
        description: 'Height-adjustable children\'s study desk with built-in book shelf.',
        features: ['Height adjustable', 'Built-in shelf', 'Fun blue & white color'],
    },
    {
        id: 32, name: 'Corner Desk', category: 'Home Office', subcategory: 'Desks',
        price: 18999, image: '/images/furniture/prod_corner_desk.webp',
        description: 'L-shaped corner computer desk with cable management and shelving.',
        features: ['L-shaped design', 'Built-in cable management', 'Shelving unit'],
    },

    // ── Outdoor (6) ──
    {
        id: 33, name: 'Garden Swing Chair', category: 'Outdoor', subcategory: 'Swing & Hammocks',
        price: 21999, image: '/images/furniture/prod_garden_swing.webp',
        description: 'Stylish macrame hanging swing chair in natural cotton with wooden spreader.',
        features: ['Handwoven macrame', 'Supports 120kg', 'Weather-resistant'],
        isNew: true,
    },
    {
        id: 34, name: 'Teak Patio Set', category: 'Outdoor', subcategory: 'Outdoor Dining',
        price: 48999, image: '/images/furniture/prod_teak_patio_set.webp',
        description: 'Premium teak wood outdoor dining set with round table and 4 chairs.',
        features: ['Grade-A teak', '4 folding chairs', 'Weather-resistant finish'],
        isBestseller: true,
    },
    {
        id: 35, name: 'Planter Stand Set', category: 'Outdoor', subcategory: 'Planters',
        price: 4999, image: '/images/furniture/prod_planter_stands.webp',
        description: 'Set of 3 modern metal plant stands at different heights.',
        features: ['3 stands included', 'Geometric design', 'Rust-resistant coating'],
    },
    {
        id: 36, name: 'Outdoor Lounge Chair', category: 'Outdoor', subcategory: 'Loungers',
        price: 15999, image: '/images/furniture/prod_outdoor_lounger.webp',
        description: 'Modern outdoor reclining lounge chair in teak with white cushion.',
        features: ['5-position recline', 'Teak wood frame', 'Removable cushion'],
    },
    {
        id: 37, name: 'Balcony Bistro Set', category: 'Outdoor', subcategory: 'Bistro Sets',
        price: 9999, image: '/images/furniture/prod_balcony_bistro.webp',
        description: 'Compact 2-person bistro table and chairs in powder-coated black metal.',
        features: ['Space-saving', 'Powder-coated metal', 'Foldable chairs'],
    },
    {
        id: 38, name: 'Garden Bench', category: 'Outdoor', subcategory: 'Benches',
        price: 13999, image: '/images/furniture/prod_garden_bench.webp',
        description: 'Traditional wrought iron and wooden garden bench with curved armrests.',
        features: ['Wrought iron & teak', 'Seats 3', 'Classic design'],
    },

    // ── Storage (7) ──
    {
        id: 39, name: 'Shoe Rack Tower', category: 'Storage', subcategory: 'Shoe Storage',
        price: 7999, image: '/images/furniture/prod_shoe_rack.webp',
        description: 'Tall narrow 6-tier wooden shoe rack holding 18 pairs.',
        features: ['6 slatted shelves', 'Holds 18 pairs', 'Oak finish'],
    },
    {
        id: 40, name: 'Entryway Console', category: 'Storage', subcategory: 'Console Tables',
        price: 16999, image: '/images/furniture/prod_entryway_console.webp',
        description: 'Slim entryway console table in dark walnut with 2 drawers.',
        features: ['2 drawers', 'Lower shelf', 'Slim profile'],
    },
    {
        id: 41, name: 'Wall-Mounted Shelf Unit', category: 'Storage', subcategory: 'Wall Shelves',
        price: 5999, image: '/images/furniture/prod_wall_shelf_unit.webp',
        description: 'Set of 3 floating wall-mounted wooden shelves in walnut finish.',
        features: ['3 different lengths', 'Hidden brackets', 'Easy installation'],
    },
    {
        id: 42, name: 'Cube Storage Organizer', category: 'Storage', subcategory: 'Organizers',
        price: 10999, image: '/images/furniture/prod_cube_organizer.webp',
        description: 'Modern 9-cube wooden storage organizer unit with fabric baskets.',
        features: ['9 cubes', 'Includes fabric baskets', 'Versatile placement'],
    },
    {
        id: 43, name: 'Hallway Coat Rack', category: 'Storage', subcategory: 'Racks',
        price: 4499, image: '/images/furniture/prod_coat_rack.webp',
        description: 'Modern freestanding wooden coat rack tree with multiple hooks.',
        features: ['Multiple hooks', 'Base shelf', 'Bamboo finish'],
    },
    {
        id: 44, name: 'Multipurpose Cabinet', category: 'Storage', subcategory: 'Cabinets',
        price: 21999, image: '/images/furniture/prod_multipurpose_cabinet.webp',
        description: 'Versatile storage cabinet with adjustable shelves and glass/wooden doors.',
        features: ['Glass + wooden doors', 'Adjustable shelves', 'Teak finish'],
    },
    {
        id: 45, name: 'Under-bed Storage Drawers', category: 'Storage', subcategory: 'Under-bed',
        price: 6499, image: '/images/furniture/prod_underbed_drawers.webp',
        description: 'Set of 2 rolling under-bed storage drawers in natural pine.',
        features: ['Set of 2', 'Rolling wheels', 'Fabric-lined interior'],
    },

    // ── Extra Living Room ──
    {
        id: 48, name: 'Media Console Unit', category: 'Living Room', subcategory: 'TV Units',
        price: 26999, image: '/images/furniture/prod_media_console.webp',
        description: 'Modern media console in matte black and walnut wood combination.',
        features: ['Open + closed storage', 'Cable routing', 'Black & walnut finish'],
    },
    {
        id: 49, name: 'Scandinavian Dining Set', category: 'Dining Room', subcategory: 'Dining Sets',
        price: 42999, image: '/images/furniture/prod_scandinavian_dining.webp',
        description: 'Complete 4-seater Scandinavian dining set with round white table.',
        features: ['Round table + 4 chairs', 'Light oak legs', 'Scandi minimalist style'],
        isNew: true,
    },
    {
        id: 50, name: 'Vanity Dressing Table', category: 'Bedroom', subcategory: 'Dressers',
        price: 19999, image: '/images/furniture/prod_vanity_table.webp',
        description: 'Modern vanity dressing table with round LED-lit mirror and matching stool.',
        features: ['LED-lit mirror', '2 drawers', 'Matching stool included'],
        isNew: true,
    },
];
