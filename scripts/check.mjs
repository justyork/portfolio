import { readFile, stat } from 'node:fs/promises';

function getExperienceYears(startIso = '2011-06-01') {
  const [year, month, day] = startIso.split('-').map(Number);
  const now = new Date();
  let years = now.getFullYear() - year;
  const beforeAnniversary = now.getMonth() + 1 < month || (now.getMonth() + 1 === month && now.getDate() < day);
  if (beforeAnniversary) years -= 1;
  return `${years}+`;
}

const experienceYears = getExperienceYears();

const required = [
  'dist/index.html',
  'dist/404.html',
  'dist/en/index.html',
  'dist/ru/index.html',
  'dist/assets/styles.css',
  'dist/cv/iurii-shpynev-cv.html',
  'dist/cv/iurii-shpynev-cv.pdf',
  'dist/og-image.svg',
  'dist/favicon.svg',
  'dist/sitemap.xml',
  'dist/robots.txt'
];

for (const file of required) await stat(file);
const all = await Promise.all(required.filter((f) => f.endsWith('.html') || f.endsWith('.css') || f.endsWith('.svg')).map((f) => readFile(f, 'utf8')));
const joined = all.join('\n');
const mustContain = ['Iurii Shpynev', 'Technical Architect & AI System Builder', `${experienceYears} years in software engineering`, 'https://t.me/JustYork', 'https://www.linkedin.com/in/shpynev', 'yorkshp@gmail.com', 'meta name="robots" content="index, follow', 'rel="alternate" hreflang="en"', 'Irkutsk, Russia', 'Открыт к релевантным обсуждениям', 'Architecture notes', 'Multi-agent architecture for autonomous development', 'WoodBricks', 'Sudoku Secrets', 'Services I can provide', 'AI workflow automation', 'Agentic development systems', 'AI agents', 'LLM-assisted development', 'mobile-toc', 'Quick navigation', 'Быстрая навигация', 'Page not found'];
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
const sitemap = await readFile('dist/sitemap.xml', 'utf8');
if (!sitemap.includes('<loc>https://justyork.dev/en/</loc>') || !sitemap.includes('<loc>https://justyork.dev/ru/</loc>')) throw new Error('Sitemap misses localized pages');
const robots = await readFile('dist/robots.txt', 'utf8');
if (!robots.includes('Sitemap: https://justyork.dev/sitemap.xml')) throw new Error('Robots misses sitemap URL');
const source = await readFile('src/content.mjs', 'utf8');
if (!source.includes("experienceStart: '2011-06-01'")) throw new Error('Experience start date is not configured');
if (source.includes('experienceYears')) throw new Error('Hardcoded experienceYears field should not be used');
console.log('Checks passed');
