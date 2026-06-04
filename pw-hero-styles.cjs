const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('http://localhost:3001/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(600);

  const styles = await page.evaluate(() => {
    const hero = document.querySelector('.title.text-display-2 .title1');
    if (!hero) return { error: 'hero title1 not found' };
    const cs = getComputedStyle(hero);
    return {
      fontFamily:      cs.fontFamily,
      fontWeight:      cs.fontWeight,
      fontSize:        cs.fontSize,
      letterSpacing:   cs.letterSpacing,
      lineHeight:      cs.lineHeight,
      color:           cs.color,
      webkitTextFillColor: cs.webkitTextFillColor,
      background:      cs.background,
      backgroundImage: cs.backgroundImage,
    };
  });

  console.log(JSON.stringify(styles, null, 2));

  // Screenshot the hero title for reference
  const hero = await page.$('.title.text-display-2');
  if (hero) await hero.screenshot({ path: 'C:/tmp/hero-title.png' });

  await browser.close();
})();
