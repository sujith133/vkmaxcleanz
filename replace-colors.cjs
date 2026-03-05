const fs = require('fs');
const path = require('path');

const dir = 'c:/Users/prudh/OneDrive/Desktop/new/vkmaxcleanz/src/components/man power';

const files = fs.readdirSync(dir);

const replacements = [
    { regex: /#6C63FF/gi, replacement: '#16A34A' },
    { regex: /6C63FF/gi, replacement: '16A34A' },
    { regex: /#4F46E5/gi, replacement: '#22C55E' },
    { regex: /4F46E5/gi, replacement: '22C55E' },
    { regex: /#8B85FF/gi, replacement: '#DCFCE7' },
    { regex: /8B85FF/gi, replacement: 'DCFCE7' },
    { regex: /108,\s*99,\s*255/g, replacement: '22, 163, 74' }, // rgba(108, 99, 255) to green
    { regex: /79,\s*70,\s*229/g, replacement: '34, 197, 94' } // rgba(79, 70, 229)
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
