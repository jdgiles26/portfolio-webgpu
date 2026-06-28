const puppeteer = require('puppeteer');

async function runTests() {
  console.log("🚀 Starting Puppeteer UI Verification Tests...\n");
  let browser;
  try {
    browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    
    const page = await browser.newPage();
    
    // Enable console log capture from the page
    page.on('console', msg => {
      if (msg.type() === 'error') {
        console.log(`🔴 Browser Console Error: ${msg.text()}`);
      }
    });

    console.log("1. Navigating to localhost:5173...");
    await page.goto('http://localhost:5173', { waitUntil: 'networkidle2' });

    // Test Title
    const title = await page.title();
    console.log(`   Page title: "${title}"`);
    if (title.includes("Portfolio")) {
      console.log("   ✅ Success: Title loaded correctly.");
    } else {
      throw new Error("Title does not match!");
    }

    // Test Iframe Load for spaces
    console.log("2. Testing space switching and local iframe loading...");
    const cards = await page.$$('.space-card');
    console.log(`   Found ${cards.length} space cards in sidebar.`);

    // Click on DeepSeek-R1 (Index 2 in SPACES array)
    console.log("   Selecting DeepSeek-R1...");
    await cards[2].click();
    
    // Wait for iframe
    await page.waitForSelector('.space-iframe');
    const iframeSrc = await page.$eval('.space-iframe', iframe => iframe.src);
    console.log(`   Iframe target source: "${iframeSrc}"`);
    
    if (iframeSrc.includes('/deepseek-space/index.html')) {
      console.log("   ✅ Success: Iframe routed to local cloned path successfully.");
    } else {
      throw new Error("Iframe did not switch to deepseek local path!");
    }

    console.log("\n🎉 ALL TESTS COMPLETED SUCCESSFULLY! Reverted portfolio is fully functional.");
  } catch (error) {
    console.error(`\n❌ TEST FAILURE: ${error.message}`);
    process.exit(1);
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

runTests();
