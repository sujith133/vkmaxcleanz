/**
 * WhatsApp message utility for VK Max Cleanz Solutions
 * Sends form submissions as structured WhatsApp messages to the business number.
 */

const WHATSAPP_NUMBER = '8500267894';

/**
 * Opens WhatsApp with a pre-filled message in a new tab.
 */
export function sendWhatsAppMessage(message: string): void {
    const encodedMsg = encodeURIComponent(message);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMsg}`;
    window.open(url, '_blank', 'noopener,noreferrer');
}

/**
 * Sends a cleaning booking enquiry via WhatsApp.
 */
export function sendCleaningBooking(data: {
    name: string;
    phone: string;
    email?: string;
    serviceName: string;
    category?: string;
    subcategory?: string;
    address?: string;
    preferredDate?: string;
    message?: string;
}): void {
    const lines = [
        `🧹 *New Cleaning Booking Request*`,
        ``,
        `*Service:* ${data.serviceName}`,
        data.category ? `*Category:* ${data.category} · ${data.subcategory}` : '',
        ``,
        `*Customer Details:*`,
        `• Name: ${data.name}`,
        `• Phone: ${data.phone}`,
        data.email ? `• Email: ${data.email}` : '',
        data.address ? `• Address: ${data.address}` : '',
        data.preferredDate ? `• Preferred Date: ${data.preferredDate}` : '',
        data.message ? `\n*Additional Notes:*\n${data.message}` : '',
        ``,
        `— Sent from VK Max Cleanz website`,
    ].filter(Boolean);
    sendWhatsAppMessage(lines.join('\n'));
}

/**
 * Sends a general contact form message via WhatsApp.
 */
export function sendContactMessage(data: {
    name: string;
    phone: string;
    email?: string;
    subject?: string;
    service?: string;
    message: string;
    brand: 'Cleanz' | 'Manpower' | 'Furnitures';
}): void {
    const icon = data.brand === 'Cleanz' ? '🧹' : data.brand === 'Manpower' ? '👷' : '🛋️';
    const lines = [
        `${icon} *New Contact Message — ${data.brand}*`,
        ``,
        `*Customer Details:*`,
        `• Name: ${data.name}`,
        `• Phone: ${data.phone}`,
        data.email ? `• Email: ${data.email}` : '',
        data.subject ? `• Subject: ${data.subject}` : '',
        data.service ? `• Service: ${data.service}` : '',
        ``,
        `*Message:*`,
        data.message,
        ``,
        `— Sent from VK Max website`,
    ].filter(Boolean);
    sendWhatsAppMessage(lines.join('\n'));
}

/**
 * Sends a manpower enquiry (staff request, hire, service enquiry) via WhatsApp.
 */
export function sendManpowerEnquiry(data: {
    formType: 'enquiry' | 'request-staff' | 'hire';
    name: string;
    phone: string;
    email?: string;
    company?: string;
    service?: string;
    staffCount?: string;
    duration?: string;
    message?: string;
}): void {
    const typeLabel = data.formType === 'enquiry' ? 'Service Enquiry'
        : data.formType === 'request-staff' ? 'Staff Request'
            : 'Hire Workers';
    const lines = [
        `👷 *New Manpower ${typeLabel}*`,
        ``,
        `*Customer Details:*`,
        `• Name: ${data.name}`,
        `• Phone: ${data.phone}`,
        data.email ? `• Email: ${data.email}` : '',
        data.company ? `• Company: ${data.company}` : '',
        ``,
        data.service ? `*Service:* ${data.service}` : '',
        data.staffCount ? `*Staff Needed:* ${data.staffCount}` : '',
        data.duration ? `*Duration:* ${data.duration}` : '',
        data.message ? `\n*Additional Details:*\n${data.message}` : '',
        ``,
        `— Sent from VK Max Manpower website`,
    ].filter(Boolean);
    sendWhatsAppMessage(lines.join('\n'));
}

/**
 * Sends a furniture product enquiry via WhatsApp.
 */
export function sendFurnitureEnquiry(data: {
    productName: string;
    category: string;
    subcategory: string;
    price: string;
    customerName?: string;
    customerPhone?: string;
    message?: string;
}): void {
    const lines = [
        `🛋️ *New Furniture Product Enquiry*`,
        ``,
        `*Product:* ${data.productName}`,
        `*Category:* ${data.category} · ${data.subcategory}`,
        `*Price:* ${data.price}`,
        ``,
        data.customerName ? `*Customer:* ${data.customerName}` : '',
        data.customerPhone ? `*Phone:* ${data.customerPhone}` : '',
        data.message ? `\n*Message:*\n${data.message}` : '',
        ``,
        `— Sent from VK Max Furnitures website`,
    ].filter(Boolean);
    sendWhatsAppMessage(lines.join('\n'));
}
