const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('http://localhost:3001/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(800);

  // Screenshot nav at rest
  await page.screenshot({ path: 'C:/tmp/nav-rest.png', clip: { x: 300, y: 30, width: 840, height: 80 } });

  // Hover Services (text "Services")
  await page.getByRole('link', { name: 'Services' }).first().hover();
  await page.waitForTimeout(400);
  await page.screenshot({ path: 'C:/tmp/nav-services.png', clip: { x: 300, y: 30, width: 840, height: 320 } });

  // Hover Trades
  await page.getByRole('link', { name: 'Trades', exact: false }).hover();
  await page.waitForTimeout(400);
  await page.screenshot({ path: 'C:/tmp/nav-trades.png', clip: { x: 300, y: 30, width: 840, height: 280 } });

  await browser.close();
})();
