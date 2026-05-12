const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('http://localhost:3001/works', { waitUntil: 'networkidle' });
  await page.waitForTimeout(500);
  const section = await page.$('[id="works"]');
  await section.screenshot({ path: 'C:/tmp/projects-fixed.png' });
  await browser.close();
})();
