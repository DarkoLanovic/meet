import puppeteer from 'puppeteer'

jest.setTimeout(30000);

describe('show/hide an event details', () => {

    test('An event element is collapsed by default', async () => {
        const browser = await puppeteer.launch();
    
        const page = await browser.newPage();
        await page.goto('http://localhost:3000/');
     
        await page.waitForSelector('.EventList');
    
        const eventDetails = await page.$('.EventList li');
        expect(eventDetails).not.toBe(null);
        browser.close();
      });

});