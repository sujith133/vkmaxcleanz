// ========================================
// SERVICES DATA – From description.json
// ========================================

export interface Service {
    id: number;
    service_name: string;
    category: string;
    subcategory: string;
    detailed_description: string;
}

// GitHub images base URL (using raw.githubusercontent.com for direct access, no redirects)
// Images are at: https://raw.githubusercontent.com/sujith133/vkmaxcleanz/main/generated_images/<IMAGE_NAME>.webp
export const IMAGE_BASE_URL = 'https://raw.githubusercontent.com/sujith133/vkmaxcleanz/main/generated_images/';

/**
 * Converts a service name to its image URL.
 * Handles mismatches: "&" → "and", commas removed, spaces → underscores
 * e.g. "AC Full Service (Indoor & Outdoor)" → ".../AC_Full_Service_(Indoor_and_Outdoor).webp"
 */
export function getServiceImageUrl(serviceName: string): string {
    const fileName = serviceName
        .replace(/&/g, 'and')
        .replace(/,/g, '')
        .replace(/ /g, '_');
    return `${IMAGE_BASE_URL}${fileName}.webp`;
}

// Category icon mapping
export const categoryIcons: Record<string, string> = {
    'Cleaning Services': '✨',
    'AC Services': '❄️',
    'Appliance Services': '🔧',
    'Technical Services': '🛠️',
    'Pest Control': '🐛',
    'Logistics': '📦',
    'Fire and Safety': '🧯',
    'Security Services': '📹',
    'Smart Home': '🏠',
};

// Category description mapping
export const categoryDescriptions: Record<string, string> = {
    'Cleaning Services': 'Thorough deep cleaning for your entire home, bathrooms, kitchens, and more.',
    'AC Services': 'Expert AC servicing, installation, repair, and gas refilling for all types.',
    'Appliance Services': 'Professional repair and maintenance for geysers, washing machines, fridges, and more.',
    'Technical Services': 'Reliable electrician, plumber, and carpenter services for your home.',
    'Pest Control': 'Effective pest control solutions for a safe, pest-free environment.',
    'Logistics': 'Professional movers and packers for hassle-free relocation.',
    'Fire and Safety': 'Fire safety equipment maintenance and compliance services.',
    'Security Services': 'Professional CCTV installation and security system setup.',
    'Smart Home': 'Home theatre, projector, and smart entertainment system installations.',
};

// ========================================
// FULL SERVICES DATA (from description.json)
// ========================================
import servicesJson from '../description.json';

export const servicesData: Service[] = servicesJson as Service[];

// ========================================
// HELPER FUNCTIONS
// ========================================

/** Returns unique categories with their service counts */
export function getCategories(): { name: string; count: number; icon: string; description: string }[] {
    const categoryMap = new Map<string, number>();
    servicesData.forEach((s) => {
        categoryMap.set(s.category, (categoryMap.get(s.category) || 0) + 1);
    });
    return Array.from(categoryMap.entries()).map(([name, count]) => ({
        name,
        count,
        icon: categoryIcons[name] || '📦',
        description: categoryDescriptions[name] || '',
    }));
}

/** Returns unique subcategories for a given category */
export function getSubcategories(category: string): { name: string; count: number }[] {
    const subMap = new Map<string, number>();
    servicesData
        .filter((s) => s.category === category)
        .forEach((s) => {
            subMap.set(s.subcategory, (subMap.get(s.subcategory) || 0) + 1);
        });
    return Array.from(subMap.entries()).map(([name, count]) => ({ name, count }));
}

/** Returns services for a given category and subcategory */
export function getServices(category: string, subcategory: string): Service[] {
    return servicesData.filter((s) => s.category === category && s.subcategory === subcategory);
}

/** Returns the first service image URL for a given category */
export function getCategoryImageUrl(category: string): string {
    const first = servicesData.find((s) => s.category === category);
    return first ? getServiceImageUrl(first.service_name) : '';
}

/** Returns the first service image URL for a given subcategory within a category */
export function getSubcategoryImageUrl(category: string, subcategory: string): string {
    const first = servicesData.find((s) => s.category === category && s.subcategory === subcategory);
    return first ? getServiceImageUrl(first.service_name) : '';
}
