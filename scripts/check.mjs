import { readFile, stat } from 'node:fs/promises';

const required = [
  'dist/index.html',
  'dist/en/index.html',
  'dist/ru/index.html',
  'dist/assets/styles.css',
  'dist/cv/iurii-shpynev-cv.html',
  'dist/cv/iurii-shpynev-cv.pdf',
  'dist/og-image.svg',
  'dist/favicon.svg'
];

for (const file of required) await stat(file);
const all = await Promise.all(required.filter((f) => f.endsWith('.html') || f.endsWith('.css') || f.endsWith('.svg')).map((f) => readFile(f, 'utf8')));
const joined = all.join('\n');
const mustContain = ['Iurii Shpynev', 'Technical Architect & AI System Builder', 'https://t.me/JustYork', 'https://www.linkedin.com/in/shpynev', 'yorkshp@gmail.com'];
for (const needle of mustContain) {
  if (!joined.includes(needle)) throw new Error(`Missing required content: ${needle}`);
}
const forbidden = ['+35795167036', '95167036'];
for (const needle of forbidden) {
  if (joined.includes(needle)) throw new Error(`Forbidden phone content leaked: ${needle}`);
}
const pdf = await readFile('dist/cv/iurii-shpynev-cv.pdf', 'latin1');
if (forbidden.some((needle) => pdf.includes(needle))) throw new Error('Forbidden phone content leaked into PDF');
if (!pdf.startsWith('%PDF-1.4')) throw new Error('Generated CV PDF is invalid');
console.log('Checks passed');
