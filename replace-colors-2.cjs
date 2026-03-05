const fs = require('fs');
const path = require('path');

const dir = 'c:/Users/prudh/OneDrive/Desktop/new/vkmaxcleanz/src/components/man power';

const files = fs.readdirSync(dir);

const replacements = [
    { regex: /#16A34A/gi, replacement: '#2F5D50' },
    { regex: /16A34A/gi, replacement: '2F5D50' },
    { regex: /#22C55E/gi, replacement: '#3A6F62' },
    { regex: /22C55E/gi, replacement: '3A6F62' },
    { regex: /#DCFCE7/gi, replacement: '#F5F1E8' }, // This was a light accent, replacing with light background instead of yellow so it doesn't look weird everywhere
    { regex: /DCFCE7/gi, replacement: 'F5F1E8' },
    { regex: /22,\s*163,\s*74/g, replacement: '47, 93, 80' },
    { regex: /34,\s*197,\s*94/g, replacement: '58, 111, 98' }
];

files.forEach(file => {
    if (file.endsWith('.css')) {
        const filePath = path.join(dir, file);
        let content = fs.readFileSync(filePath, 'utf8');
        let modified = false;

        replacements.forEach(({ regex, replacement }) => {
            if (regex.test(content)) {
                content = content.replace(regex, replacement);
                modified = true;
            }
        });

        if (modified) {
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`Updated colors in ${file}`);
        }
    }
});
console.log('Script completed.');
