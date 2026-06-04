const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 400, height: 200 });

  // Render the icon on light and dark backgrounds side by side
  await page.setContent(`
    <html><body style="margin:0;padding:0;background:#fff;display:flex;gap:0">
      <div style="background:#fff;padding:24px;display:flex;align-items:center">
        <img src="/assets/images/logo/icon.svg" style="height:64px;width:auto">
      </div>
      <div style="background:#09090B;padding:24px;display:flex;align-items:center">
        <img src="/assets/images/logo/icon.svg" style="height:64px;width:auto">
      </div>
    </body></html>
  `, { waitUntil: 'load' });

  // Also serve local files
  await page.goto('http://localhost:3001/', { waitUntil: 'networkidle' });
  await page.setContent(`
    <html><body style="margin:0;padding:0;background:#fff;display:flex;gap:0">
      <div style="background:#fff;padding:24px;display:flex;align-items:center;gap:12px">
        <img src="http://localhost:3001/assets/images/logo/icon.svg" style="height:64px;width:auto">
        <span style="font-family:Urbanist,sans-serif;font-weight:600;font-size:28px;letter-spacing:-0.03em;background:linear-gradient(132.09deg,#43484D 11.15%,#292C2E 79.01%);-webkit-background-clip:text;-webkit-text-fill-color:transparent">SwiftBuild</span>
      </div>
      <div style="background:#09090B;padding:24px;display:flex;align-items:center;gap:12px">
        <img src="http://localhost:3001/assets/images/logo/icon.svg" style="height:64px;width:auto">
        <span style="font-family:Urbanist,sans-serif;font-weight:600;font-size:28px;letter-spacing:-0.03em;background:linear-gradient(132.09deg,#43484D 11.15%,#292C2E 79.01%);-webkit-background-clip:text;-webkit-text-fill-color:transparent">SwiftBuild</span>
      </div>
    </body></html>
  `);
  await page.waitForTimeout(800);
  await page.screenshot({ path: 'C:/tmp/icon-contrast-compare.png' });

  await browser.close();
})();
