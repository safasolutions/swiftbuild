const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('http://localhost:3001/works', { waitUntil: 'networkidle' });
  await page.waitForTimeout(500);

  const cards = await page.$$('.featured-works-item');
  for (let i = 0; i < 6; i++) {
    const info = await cards[i].evaluate(el => {
      const h5 = el.querySelector('h5');
      const p = el.querySelector('p');
      return {
        name: h5?.textContent?.trim(),
        nameLines: h5 ? Math.round(h5.getBoundingClientRect().height / parseFloat(getComputedStyle(h5).lineHeight)) : 0,
        nameH: h5?.getBoundingClientRect().height?.toFixed(0),
        nameLineH: h5 ? parseFloat(getComputedStyle(h5).lineHeight).toFixed(0) : 0,
        summaryH: p?.getBoundingClientRect().height?.toFixed(0),
      };
    });
    console.log(`Card ${i+1} "${info.name}": name h=${info.nameH}px (lh=${info.nameLineH}), summary h=${info.summaryH}px`);
  }
  await browser.close();
})();
