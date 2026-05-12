const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('http://localhost:3001/works', { waitUntil: 'networkidle' });
  await page.waitForTimeout(800);

  const cards = await page.$$('.featured-works-item');
  await cards[1].click();
  await page.waitForTimeout(400);

  // Click next arrow
  const nextBtn = await page.$('[aria-label="Next image"]');
  await nextBtn.click();
  await page.waitForTimeout(600); // wait for transition

  await page.screenshot({ path: 'C:/tmp/modal-slide2.png' });
  await browser.close();
})();
