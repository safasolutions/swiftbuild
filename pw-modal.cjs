const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('http://localhost:3001/works', { waitUntil: 'networkidle' });
  await page.waitForTimeout(800);

  // Click the DevXAI card (second card)
  const cards = await page.$$('.featured-works-item');
  await cards[1].click();
  await page.waitForTimeout(600);

  await page.screenshot({ path: 'C:/tmp/modal-open.png' });
  await browser.close();
})();
