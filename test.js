const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    
    page.on('console', msg => console.log('BROWSER_LOG:', msg.text()));
    page.on('pageerror', error => console.log('BROWSER_ERROR:', error.message));
    page.on('requestfailed', request => {
        console.log('REQUEST_FAILED:', request.url(), request.failure().errorText);
    });

    try {
        await page.goto('http://localhost:8000/inventory.html', { waitUntil: 'networkidle0' });
    } catch (e) {
        console.log("Nav error:", e);
    }
    
    // Wait a bit to ensure all scripts run
    await new Promise(r => setTimeout(r, 1000));
    
    await browser.close();
})();
