const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('http://localhost:3001/works', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);

  const cards = await page.$$('.featured-works-item');
  for (let i = 0; i < Math.min(cards.length, 6); i++) {
    const box = await cards[i].boundingBox();
    const imgDiv = await cards[i].$('.image');
    const imgBox = imgDiv ? await imgDiv.boundingBox() : null;
    console.log(`Card ${i+1}: total h=${box?.height?.toFixed(0)}, w=${box?.width?.toFixed(0)} | image h=${imgBox?.height?.toFixed(0)}`);
  }
  await browser.close();
})();
