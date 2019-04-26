const puppeteer = require('puppeteer');
const assert = require('assert');
require('dotenv').config();

(async function() {
  // const browser = await puppeteer.launch();
  const browser = await puppeteer.launch({
    headless: false, // launch headful mode
    slowMo: 150, // slow down puppeteer script so that it's easier to follow visually
  });
  const page = await browser.newPage();

  await page.goto('https://nycdoe.sharepoint.com/:f:/s/PEPArchive/EkyMPAWycVdKleE6IXsxe-0BJ-6omfH4qZZpFigC81x0XQ?e=hBSEZH');
  await page.waitForSelector('.ms-DetailsList-contentWrapper');
  await page.click('#header0-check');
  await page.click('.od-TopBar-item .ms-Button');

  await browser.close();
})();
