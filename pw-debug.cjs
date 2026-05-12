const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('http://localhost:3001/works', { waitUntil: 'networkidle' });
  await page.waitForTimeout(500);

  // Get the first row of cards and their parents
  const cards = await page.$$('.featured-works-item');
  for (let i = 0; i < 3; i++) {
    const card = cards[i];
    const parent = await card.evaluateHandle(el => el.parentElement);
    const grandparent = await card.evaluateHandle(el => el.parentElement?.parentElement);
    const cardBox = await card.boundingBox();
    const parentBox = await (await parent.asElement())?.boundingBox();
    const cardStyle = await card.evaluate(el => ({
      width: window.getComputedStyle(el).width,
      display: window.getComputedStyle(el).display,
      className: el.className,
    }));
    const parentStyle = await (await parent.asElement())?.evaluate(el => ({
      width: window.getComputedStyle(el).width,
      display: window.getComputedStyle(el).display,
      className: el.className,
    }));
    console.log(`\n=== Card ${i+1} ===`);
    console.log(`Card box: w=${cardBox?.width?.toFixed(0)}, h=${cardBox?.height?.toFixed(0)}`);
    console.log(`Card style: ${JSON.stringify(cardStyle)}`);
    console.log(`Parent box: w=${parentBox?.width?.toFixed(0)}`);
    console.log(`Parent style: ${JSON.stringify(parentStyle)}`);
  }
  await browser.close();
})();
