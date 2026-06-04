const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('http://localhost:3001/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(600);

  // Inject a patched logo to test different sizes live without redeploying
  const variants = [
    { iconH: 32, fontSize: 17, gap: 9,  label: '32px' },
    { iconH: 36, fontSize: 18, gap: 10, label: '36px' },
    { iconH: 40, fontSize: 20, gap: 11, label: '40px' },
    { iconH: 44, fontSize: 22, gap: 12, label: '44px' },
  ];

  for (const v of variants) {
    await page.evaluate(({ iconH, fontSize, gap }) => {
      const img  = document.querySelector('a.logo-site span img');
      const text = document.querySelector('a.logo-site span span');
      const wrap = document.querySelector('a.logo-site span');
      if (img)  { img.style.height = iconH + 'px'; img.style.width = 'auto'; }
      if (text) { text.style.fontSize = fontSize + 'px'; }
      if (wrap) { wrap.style.gap = gap + 'px'; }
    }, v);

    await page.waitForTimeout(150);
    const header = await page.$('header');
    await header.screenshot({ path: `C:/tmp/logo-${v.label}.png` });
  }

  await browser.close();
})();
