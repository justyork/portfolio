import { mkdir, rm, writeFile, copyFile } from 'node:fs/promises';
import { join } from 'node:path';
import { site, languages, proofPoints, expertise, caseStudies, experience, education, spokenLanguages, certifications } from '../src/content.mjs';

const out = 'dist';
const esc = (value) => String(value).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
const slug = (value) => value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
const list = (items, cls = 'list') => `<ul class="${cls}">${items.map((item) => `<li>${esc(item)}</li>`).join('')}</ul>`;
const tags = (items) => `<div class="tags">${items.map((item) => `<span class="tag">${esc(item)}</span>`).join('')}</div>`;
const isoDate = new Date().toISOString().slice(0, 10);

function layout(lang, body) {
  const l = languages[lang];
  const canonical = `${site.url}${l.path}`;
  const navTargets = ['profile', 'expertise', 'case-studies', 'experience', 'cv', 'contact'];
  const jsonLd = {
    '@context': 'https://schema.org', '@type': 'Person', name: site.name,
    alternateName: site.alternateName, jobTitle: site.headline, url: site.url,
    email: site.contacts.email, address: { '@type': 'PostalAddress', addressLocality: 'Limassol', addressCountry: 'Cyprus' },
    sameAs: [site.contacts.linkedin, site.contacts.telegram, site.contacts.github],
    knowsAbout: ['Technical Architecture', 'AI systems', 'High-load platforms', 'Data pipelines', 'Backend development', 'Reliability engineering']
  };
  return `<!doctype html>
<html lang="${l.htmlLang}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(l.title)}</title>
  <meta name="description" content="${esc(l.description)}">
  <meta name="robots" content="index, follow, max-image-preview:large">
  <meta name="author" content="${esc(site.name)}">
  <meta name="theme-color" content="#07090d">
  <link rel="canonical" href="${canonical}">
  <link rel="alternate" hreflang="en" href="${site.url}/en/">
  <link rel="alternate" hreflang="ru" href="${site.url}/ru/">
  <link rel="alternate" hreflang="x-default" href="${site.url}/en/">
  <meta property="og:type" content="profile">
  <meta property="og:title" content="${esc(l.title)}">
  <meta property="og:description" content="${esc(l.description)}">
  <meta property="og:url" content="${canonical}">
  <meta property="og:image" content="${site.url}/og-image.svg">
  <meta property="og:site_name" content="${esc(site.name)}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${esc(l.title)}">
  <meta name="twitter:description" content="${esc(l.description)}">
  <link rel="icon" href="/favicon.svg" type="image/svg+xml">
  <link rel="stylesheet" href="/assets/styles.css">
  <script type="application/ld+json">${JSON.stringify(jsonLd)}</script>
</head>
<body>
  <a class="skip" href="#main">Skip to content</a>
  <header class="header">
    <div class="container header__inner">
      <a class="brand" href="${l.path}" aria-label="${esc(site.name)} home"><span class="brand__mark">YS</span><span>${esc(site.name)}</span></a>
      <nav class="nav" aria-label="Primary">
        ${l.nav.map((n, i) => `<a href="#${navTargets[i]}">${esc(n)}</a>`).join('')}
        <a class="lang" href="${l.altPath}">${l.altLabel}</a>
      </nav>
    </div>
  </header>
  <main id="main">${body}</main>
  <footer class="footer"><div class="container">© ${new Date().getFullYear()} ${esc(site.name)}. Built as a static, bilingual portfolio for ${esc(site.url.replace('https://',''))}.</div></footer>
</body>
</html>`;
}

function page(lang) {
  const l = languages[lang];
  const cases = caseStudies[lang];
  const body = `
<section class="hero">
  <div class="container hero__grid">
    <div>
      <div class="kicker">${esc(l.heroKicker)}</div>
      <h1>${esc(l.heroTitle)}</h1>
      <p class="lead">${esc(l.heroText)}</p>
      <div class="actions">
        <a class="button button--primary" href="#contact">${esc(l.ctaPrimary)}</a>
        <a class="button" href="/cv/iurii-shpynev-cv.pdf" download>${esc(l.ctaSecondary)}</a>
        <a class="button" href="/cv/iurii-shpynev-cv.html">Printable CV</a>
      </div>
    </div>
    <aside class="card hero-card" aria-label="Profile summary">
      <div class="signal"><b>${esc(site.name)}</b><span>${esc(site.headline)}</span></div>
      <div class="signal"><b>${esc(site.location)}</b><span>Remote / Europe-friendly</span></div>
      <div class="signal"><b>${esc(site.experienceYears)} years</b><span>Software engineering</span></div>
      <div class="signal"><b>Backend · Data · AI</b><span>Architecture & delivery</span></div>
    </aside>
  </div>
  <div class="container proofs" aria-label="${esc(l.proofTitle)}">${proofPoints[lang].map((point) => `<div class="proof">${esc(point)}</div>`).join('')}</div>
</section>

<section class="section" id="profile">
  <div class="container section__head"><div><div class="kicker">01</div><h2>${esc(l.aboutTitle)}</h2></div></div>
  <div class="container grid grid--3">${l.about.map((p) => `<div class="panel"><p>${esc(p)}</p></div>`).join('')}</div>
</section>

<section class="section" id="expertise">
  <div class="container section__head"><div><div class="kicker">02</div><h2>${esc(l.expertiseTitle)}</h2></div></div>
  <div class="container grid grid--2">${expertise[lang].map((group) => `<article class="panel"><h3>${esc(group.title)}</h3>${tags(group.items)}</article>`).join('')}</div>
</section>

<section class="section" id="case-studies">
  <div class="container section__head"><div><div class="kicker">03</div><h2>${esc(l.casesTitle)}</h2></div><p>${esc(l.casesIntro)}</p></div>
  <div class="container grid grid--2">${cases.map((c) => `<article class="panel case" id="${slug(c.name)}"><div><h3>${esc(c.name)}</h3><p class="meta"><b>${esc(l.labels.role)}:</b> ${esc(c.role)} · <b>${esc(l.labels.context)}:</b> ${esc(c.context)}</p>${tags(c.technologies)}</div><dl><div><dt>${esc(l.labels.problem)}</dt><dd>${esc(c.problem)}</dd></div><div><dt>${esc(l.labels.built)}</dt><dd>${esc(c.built)}</dd></div><div><dt>${esc(l.labels.result)}</dt><dd>${esc(c.result)}</dd></div></dl></article>`).join('')}</div>
</section>

<section class="section" id="experience">
  <div class="container section__head"><div><div class="kicker">04</div><h2>${esc(l.experienceTitle)}</h2></div></div>
  <div class="container card panel timeline">${experience.map((job) => `<article class="job"><h3>${esc(job.company)} — ${esc(job.role)}</h3><p class="meta">${esc(job.dates)} · ${esc(job.location)}</p><p>${esc(job.summary)}</p></article>`).join('')}</div>
</section>

<section class="section" id="cv">
  <div class="container section__head"><div><div class="kicker">05</div><h2>${esc(l.cvTitle)}</h2></div><div class="actions"><a class="button" href="/cv/iurii-shpynev-cv.pdf" download>${esc(l.ctaSecondary)}</a></div></div>
  <div class="container cv-grid">
    <article class="panel"><h3>Education</h3>${list(education)}</article>
    <article class="panel"><h3>Languages</h3>${list(spokenLanguages)}</article>
    <article class="panel"><h3>Certifications</h3>${list(certifications)}</article>
  </div>
</section>

<section class="section" id="writing">
  <div class="container panel"><div class="kicker">06</div><h2>${esc(l.writingTitle)}</h2><p>${esc(l.writingText)}</p></div>
</section>

<section class="section" id="contact">
  <div class="container section__head"><div><div class="kicker">07</div><h2>${esc(l.contactTitle)}</h2><p>${esc(l.contactText)}</p></div></div>
  <div class="container panel">
    <div class="contact-links">
      <a class="button button--primary" href="${site.contacts.telegram}" rel="me noopener">Telegram</a>
      <a class="button" href="${site.contacts.linkedin}" rel="me noopener">LinkedIn</a>
      <a class="button" href="mailto:${site.contacts.email}">${site.contacts.email}</a>
      <a class="button" href="${site.contacts.github}" rel="me noopener">GitHub</a>
    </div>
    <p class="small" style="margin-top:16px">Phone is intentionally not published. Use LinkedIn, Telegram or email.</p>
  </div>
</section>`;
  return layout(lang, body);
}

function cvHtml() {
  const lines = experience.map((job) => `<li><strong>${esc(job.company)} — ${esc(job.role)}</strong><br>${esc(job.dates)} · ${esc(job.location)}<br>${esc(job.summary)}</li>`).join('');
  return layout('en', `<section class="section"><div class="container"><div class="kicker">Sanitized CV</div><h1>${esc(site.name)}</h1><p class="lead">${esc(site.headline)} · ${esc(site.location)} · ${esc(site.experienceYears)} years in software engineering</p><div class="actions"><a class="button" href="/cv/iurii-shpynev-cv.pdf" download>Download PDF</a><a class="button" href="/en/">Back to portfolio</a></div></div></section><section class="section"><div class="container grid grid--2"><article class="panel"><h2>Contacts</h2>${list([site.contacts.linkedin, site.contacts.telegram, site.contacts.email, site.contacts.github])}</article><article class="panel"><h2>Core skills</h2>${list(['Technical Architecture', 'AI-assisted systems', 'High-load platforms', 'Backend/full-stack development', 'Data pipelines', 'Reliability engineering', 'Technical leadership'])}</article></div></section><section class="section"><div class="container panel"><h2>Experience</h2><ul class="list">${lines}</ul></div></section><section class="section"><div class="container cv-grid"><article class="panel"><h2>Education</h2>${list(education)}</article><article class="panel"><h2>Languages</h2>${list(spokenLanguages)}</article><article class="panel"><h2>Certifications</h2>${list(certifications)}</article></div></section>`);
}

function pdfEscape(s) { return String(s).replace(/[\u2013\u2014]/g, '-').replace(/[\u2192]/g, '->').replace(/[^\x09\x0A\x0D\x20-\x7E]/g, '').replace(/[\\()]/g, '\\$&'); }
function wrapLine(line, max = 92) {
  const words = line.split(/\s+/); const out = []; let cur = '';
  for (const w of words) { if ((cur + ' ' + w).trim().length > max) { if (cur) out.push(cur); cur = w; } else cur = (cur + ' ' + w).trim(); }
  if (cur) out.push(cur); return out;
}
function createPdf() {
  const source = [
    `${site.name} - ${site.headline}`,
    `${site.location} | ${site.contacts.linkedin} | ${site.contacts.telegram} | ${site.contacts.email} | ${site.contacts.github}`,
    '',
    'Summary',
    'Technical Lead and Technical Architect with 14+ years in software engineering. Experience in high-load platforms, backend/full-stack development, data pipelines, ML-driven content search and recommendations, reliability engineering and technical leadership.',
    '',
    'Core skills',
    'Technical Architecture; AI-assisted systems; PHP; Node.js; Go; Python; C#; JavaScript; PostgreSQL; BigQuery; Apache Airflow; OpenSearch; SLO/SLI; incident management; compliance; automation.',
    '',
    'Experience',
    ...experience.flatMap((job) => ['', `${job.company} - ${job.role}`, `${job.dates} | ${job.location}`, job.summary]),
    '',
    'Education', ...education,
    '',
    'Languages', ...spokenLanguages,
    '',
    'Certifications', ...certifications,
    '',
    'Note: phone number is intentionally not included. Use LinkedIn, Telegram or email.'
  ];
  const lines = source.flatMap((line) => line ? wrapLine(line) : ['']);
  const pages = []; let y = 800; let commands = ['BT', '/F1 10 Tf', '50 800 Td', '14 TL'];
  for (const line of lines) {
    if (y < 58) { commands.push('ET'); pages.push(commands.join('\n')); y = 800; commands = ['BT', '/F1 10 Tf', '50 800 Td', '14 TL']; }
    commands.push(`(${pdfEscape(line)}) Tj`, 'T*'); y -= 14;
  }
  commands.push('ET'); pages.push(commands.join('\n'));
  const objects = [];
  objects.push('<< /Type /Catalog /Pages 2 0 R >>');
  const kids = pages.map((_, i) => `${3 + i * 2} 0 R`).join(' ');
  objects.push(`<< /Type /Pages /Kids [${kids}] /Count ${pages.length} >>`);
  pages.forEach((content, i) => {
    const pageObj = 3 + i * 2; const contentObj = pageObj + 1;
    objects.push(`<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 842] /Resources << /Font << /F1 << /Type /Font /Subtype /Type1 /BaseFont /Helvetica >> >> >> /Contents ${contentObj} 0 R >>`);
    objects.push(`<< /Length ${Buffer.byteLength(content)} >>\nstream\n${content}\nendstream`);
  });
  let pdf = '%PDF-1.4\n'; const offsets = [0];
  objects.forEach((obj, i) => { offsets.push(Buffer.byteLength(pdf)); pdf += `${i + 1} 0 obj\n${obj}\nendobj\n`; });
  const xref = Buffer.byteLength(pdf);
  pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
  offsets.slice(1).forEach((off) => { pdf += `${String(off).padStart(10, '0')} 00000 n \n`; });
  pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xref}\n%%EOF\n`;
  return pdf;
}

await rm(out, { recursive: true, force: true });
await mkdir(join(out, 'assets'), { recursive: true });
await mkdir(join(out, 'en'), { recursive: true });
await mkdir(join(out, 'ru'), { recursive: true });
await mkdir(join(out, 'cv'), { recursive: true });
await copyFile('src/assets/styles.css', join(out, 'assets/styles.css'));
await writeFile(join(out, 'index.html'), `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(site.name)} — ${esc(site.headline)}</title>
  <meta name="description" content="Bilingual portfolio and expanded CV for ${esc(site.name)}: technical architecture, AI systems, backend platforms and data pipelines.">
  <meta name="robots" content="index, follow, max-image-preview:large">
  <link rel="canonical" href="${site.url}/en/">
  <link rel="alternate" hreflang="en" href="${site.url}/en/">
  <link rel="alternate" hreflang="ru" href="${site.url}/ru/">
  <link rel="alternate" hreflang="x-default" href="${site.url}/en/">
  <link rel="stylesheet" href="/assets/styles.css">
  <link rel="icon" href="/favicon.svg" type="image/svg+xml">
</head>
<body>
  <main class="hero"><div class="container"><div class="kicker">Bilingual portfolio</div><h1>${esc(site.name)}</h1><p class="lead">${esc(site.headline)}. Choose language / выберите язык.</p><div class="actions"><a class="button button--primary" href="/en/">English</a><a class="button" href="/ru/">Русский</a></div></div></main>
</body>
</html>`);
await writeFile(join(out, 'en/index.html'), page('en'));
await writeFile(join(out, 'ru/index.html'), page('ru'));
await writeFile(join(out, 'cv/iurii-shpynev-cv.html'), cvHtml());
await writeFile(join(out, 'cv/iurii-shpynev-cv.pdf'), createPdf(), 'binary');
await writeFile(join(out, 'favicon.svg'), `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="16" fill="#07090d"/><path d="M16 18h10l6 12 6-12h10L37 38v10H27V38L16 18z" fill="#7dd3fc"/></svg>`);

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <url>
    <loc>${site.url}/en/</loc>
    <lastmod>${isoDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${site.url}/en/"/>
    <xhtml:link rel="alternate" hreflang="ru" href="${site.url}/ru/"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${site.url}/en/"/>
  </url>
  <url>
    <loc>${site.url}/ru/</loc>
    <lastmod>${isoDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.95</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${site.url}/en/"/>
    <xhtml:link rel="alternate" hreflang="ru" href="${site.url}/ru/"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${site.url}/en/"/>
  </url>
  <url>
    <loc>${site.url}/cv/iurii-shpynev-cv.html</loc>
    <lastmod>${isoDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
</urlset>
`;
await writeFile(join(out, 'sitemap.xml'), sitemap);
await writeFile(join(out, 'robots.txt'), `User-agent: *
Allow: /

Sitemap: ${site.url}/sitemap.xml
`);
await writeFile(join(out, 'og-image.svg'), `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630"><rect width="1200" height="630" fill="#07090d"/><circle cx="220" cy="90" r="260" fill="#7dd3fc" opacity=".18"/><circle cx="980" cy="120" r="300" fill="#a78bfa" opacity=".18"/><text x="80" y="245" fill="#e8edf5" font-family="Arial" font-size="72" font-weight="700">Iurii Shpynev</text><text x="84" y="330" fill="#7dd3fc" font-family="Arial" font-size="38">Technical Architect &amp; AI System Builder</text><text x="84" y="420" fill="#9ca8b8" font-family="Arial" font-size="30">High-load platforms · Data pipelines · AI-assisted systems</text></svg>`);
console.log('Built static site into dist/');
