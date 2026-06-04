const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('http://localhost:3001/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(600);

  // Measure the logo wrapper, icon img, and text span
  const metrics = await page.evaluate(() => {
    const logo = document.querySelector('a.logo-site span');
    const icon = document.querySelector('a.logo-site span img');
    const text = document.querySelector('a.logo-site span span');
    const header = document.querySelector('header .header-inner');
    const measure = el => {
      if (!el) return null;
      const r = el.getBoundingClientRect();
      const s = getComputedStyle(el);
      return {
        width: Math.round(r.width),
        height: Math.round(r.height),
        top: Math.round(r.top),
        fontSize: s.fontSize,
        fontWeight: s.fontWeight,
        letterSpacing: s.letterSpacing,
        gap: s.gap,
      };
    };
    return {
      logo: measure(logo),
      icon: measure(icon),
      text: measure(text),
      headerHeight: header ? Math.round(header.getBoundingClientRect().height) : null,
    };
  });

  console.log(JSON.stringify(metrics, null, 2));

  // Screenshot just the logo area
  const logoEl = await page.$('a.logo-site');
  await logoEl.screenshot({ path: 'C:/tmp/logo-current.png' });

  // Full header screenshot
  const header = await page.$('header');
  await header.screenshot({ path: 'C:/tmp/header-current.png' });

  await browser.close();
})();
