const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('http://localhost:3001/works', { waitUntil: 'networkidle' });
  const section = await page.$('[id="works"]');
  if (section) {
    await section.screenshot({ path: 'C:/tmp/projects-section.png' });
    const box = await section.boundingBox();
    console.log('bounds:', JSON.stringify(box));
  } else {
    console.log('works section not found');
    await page.screenshot({ path: 'C:/tmp/page-full.png', fullPage: true });
  }
  await browser.close();
})();
