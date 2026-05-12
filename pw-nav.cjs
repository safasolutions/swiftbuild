const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('http://localhost:3001/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(600);

  // Screenshot the nav bar at rest
  const header = await page.$('header');
  await header.screenshot({ path: 'C:/tmp/nav-rest.png' });

  // Hover over Services to open dropdown
  await page.hover('li.has-child:first-of-type a');
  await page.waitForTimeout(400);
  await page.screenshot({ path: 'C:/tmp/nav-services-hover.png', clip: { x: 0, y: 0, width: 1440, height: 350 } });

  // Hover over Trades
  await page.hover('li.has-child:last-of-type a');
  await page.waitForTimeout(400);
  await page.screenshot({ path: 'C:/tmp/nav-trades-hover.png', clip: { x: 0, y: 0, width: 1440, height: 300 } });

  await browser.close();
})();
