const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('http://localhost:3001/works', { waitUntil: 'networkidle' });
  await page.waitForTimeout(500);

  const cards = await page.$$('.featured-works-item');
  for (let i = 0; i < 3; i++) {
    const info = await cards[i].evaluate(el => {
      const levels = [];
      let cur = el;
      for (let j = 0; j < 5; j++) {
        cur = cur.parentElement;
        if (!cur) break;
        const cs = window.getComputedStyle(cur);
        levels.push({
          tag: cur.tagName,
          className: cur.className.substring(0, 60),
          w: cs.width,
          overflow: cs.overflow,
        });
      }
      return levels;
    });
    console.log(`\n=== Card ${i+1} ancestors ===`);
    info.forEach((l, j) => console.log(`  L${j+1}: <${l.tag}> "${l.className}" w=${l.w} overflow=${l.overflow}`));
  }
  await browser.close();
})();
