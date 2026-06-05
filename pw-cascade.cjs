const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto('http://localhost:3000/', { waitUntil: 'load' });
  await page.waitForTimeout(2000);
  const client = await page.context().newCDPSession(page);
  await client.send('DOM.enable');
  await client.send('CSS.enable');
  const { root } = await client.send('DOM.getDocument');
  const { nodeId } = await client.send('DOM.querySelector', { nodeId: root.nodeId, selector: '.timeline-item' });
  const { matchedCSSRules } = await client.send('CSS.getMatchedStylesForNode', { nodeId });
  for (const m of matchedCSSRules) {
    const props = m.rule.style.cssProperties.filter(p => p.name.includes('margin'));
    if (props.length) {
      console.log(m.rule.selectorList.text, '->', props.map(p => `${p.name}: ${p.value}`).join('; '), '| origin:', m.rule.origin, '| sheet:', m.rule.styleSheetId);
      const sheet = await client.send('CSS.getStyleSheetText', { styleSheetId: m.rule.styleSheetId }).catch(() => null);
      if (sheet) {
        // print sheet header to identify file
        console.log('   sheet starts with:', sheet.text.slice(0, 80).replace(/\n/g, ' '));
      }
    }
  }
  await browser.close();
})();
