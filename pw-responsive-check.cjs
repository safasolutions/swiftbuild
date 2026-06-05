const { chromium } = require('playwright');

const viewports = [
  { name: 'mobile-375', width: 375, height: 812 },
  { name: 'tablet-768', width: 768, height: 1024 },
  { name: 'desktop-1024', width: 1024, height: 800 },
  { name: 'desktop-1440', width: 1440, height: 900 },
];
const pages = ['/', '/about', '/services', '/works', '/contact', '/roofing'];

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  let failures = 0;

  for (const vp of viewports) {
    await page.setViewportSize({ width: vp.width, height: vp.height });
    for (const path of pages) {
      await page.goto(`http://localhost:3000${path}`, { waitUntil: 'load' });
      await page.waitForTimeout(1200);
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
      const status = overflow > 0 ? 'FAIL' : 'ok';
      if (overflow > 0) failures++;
      console.log(`${status}  ${path} @ ${vp.name}: overflow = ${overflow}px`);
    }
  }

  // timeline spacing check at 375
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto('http://localhost:3000/', { waitUntil: 'load' });
  await page.waitForTimeout(1500);
  const sec = page.locator('#process');
  await sec.scrollIntoViewIfNeeded();
  await page.waitForTimeout(1200);
  const gaps = await page.evaluate(() => {
    const items = Array.from(document.querySelectorAll('.timeline-item'));
    const out = [];
    for (let i = 0; i < items.length - 1; i++) {
      out.push(Math.round(items[i + 1].getBoundingClientRect().top - items[i].getBoundingClientRect().bottom));
    }
    return out;
  });
  console.log('timeline gaps between cards @375:', JSON.stringify(gaps));
  await sec.screenshot({ path: 'pw-process-375-fixed.png' });

  console.log(failures === 0 ? 'ALL PASS' : `${failures} FAILURES`);
  await browser.close();
})();
