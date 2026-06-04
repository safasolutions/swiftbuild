const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 560, height: 260 });
  await page.goto('http://localhost:3001/', { waitUntil: 'networkidle' });

  await page.setContent(`
    <html><body style="margin:0;padding:0;display:grid;grid-template-columns:1fr 1fr">

      <!-- Light bg: default icon -->
      <div style="background:#f4f4f5;padding:32px;display:flex;flex-direction:column;gap:20px;align-items:flex-start">
        <p style="font-family:sans-serif;font-size:11px;color:#888;margin:0">Light bg — icon.svg</p>
        <div style="display:flex;align-items:center;gap:11px">
          <img src="http://localhost:3001/assets/images/logo/icon.svg" style="height:36px;width:auto">
          <span style="font-family:Urbanist,sans-serif;font-weight:600;font-size:20px;letter-spacing:-0.03em;background:linear-gradient(132.09deg,#43484D 11.15%,#292C2E 79.01%);-webkit-background-clip:text;-webkit-text-fill-color:transparent">SwiftBuild</span>
        </div>
        <div style="display:flex;align-items:center;gap:11px">
          <img src="http://localhost:3001/assets/images/logo/icon.svg" style="height:56px;width:auto">
          <span style="font-family:Urbanist,sans-serif;font-weight:600;font-size:32px;letter-spacing:-0.03em;background:linear-gradient(132.09deg,#43484D 11.15%,#292C2E 79.01%);-webkit-background-clip:text;-webkit-text-fill-color:transparent">SwiftBuild</span>
        </div>
      </div>

      <!-- Dark bg: light icon -->
      <div style="background:#09090B;padding:32px;display:flex;flex-direction:column;gap:20px;align-items:flex-start">
        <p style="font-family:sans-serif;font-size:11px;color:#555;margin:0">Dark bg — icon-light.svg</p>
        <div style="display:flex;align-items:center;gap:11px">
          <img src="http://localhost:3001/assets/images/logo/icon-light.svg" style="height:36px;width:auto">
          <span style="font-family:Urbanist,sans-serif;font-weight:600;font-size:20px;letter-spacing:-0.03em;background:linear-gradient(132.09deg,#C8CDD1 11.15%,#E8EAEC 79.01%);-webkit-background-clip:text;-webkit-text-fill-color:transparent">SwiftBuild</span>
        </div>
        <div style="display:flex;align-items:center;gap:11px">
          <img src="http://localhost:3001/assets/images/logo/icon-light.svg" style="height:56px;width:auto">
          <span style="font-family:Urbanist,sans-serif;font-weight:600;font-size:32px;letter-spacing:-0.03em;background:linear-gradient(132.09deg,#C8CDD1 11.15%,#E8EAEC 79.01%);-webkit-background-clip:text;-webkit-text-fill-color:transparent">SwiftBuild</span>
        </div>
      </div>

    </body></html>
  `);
  await page.waitForTimeout(800);
  await page.screenshot({ path: 'C:/tmp/icon-light-compare.png' });
  await browser.close();
})();
