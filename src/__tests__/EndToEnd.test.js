import puppeteer from 'puppeteer';


describe('Filter events by city', () => {
 
  jest.setTimeout(30000);
  let browser, page;
  beforeAll(async () => {
    browser = await puppeteer.launch({
      
    });
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.waitForSelector('.CitySearch');
  });

  afterAll(() => {
    browser.close();
  });

  test('When the user has not searched for a city, show upcoming events from all cities', async () => {
    const filterEvents = await page.$('.query .event .event_details');
    expect(filterEvents).toBeNull();
  });

  test('When the user has  searched for a city, show upcoming events from all cities', async () => {
    const myValue = 'Berlin';
    const filterEvents = await page.$('.city', (element, myValue) => {
        element.value = myValue;
        const event = new Event('change');
        element.dispatchEvent(event);
    }, myValue);
    const suggestions = await page.$('.suggestions');
    expect(filterEvents).toBeDefined();
    expect(suggestions).toBeDefined();

  const select = await page.$('.suggestions li', () => {
      const event = new Event('click');
      element.dispatchEvent(event);
  });
  expect(select).toBeDefined();

  const inputSelected = await page.$('.city')
  expect(inputSelected).toBeDefined();

  });

  test('User should see a list of suggestions when they search for the city', async () => {
    const filterEvents = await page.$('.suggestions');
    expect(filterEvents).toBeDefined();
  });

  test('User should see a event list', async () => {
    const findevents = await page.$('.EventList');
    expect(findevents).toBeDefined();
  });

  




})


describe('show/hide an event details', () => {
  
  jest.setTimeout(30000);
  let browser, page;
  beforeAll(async () => {
    browser = await puppeteer.launch({
    //  headless: false,  // turn off headless mode which was by default set to true
    //  slowMo: 250, // slow down by 250ms
    //  ignoreDefaultArgs: ['--disable-extensions'] // ignores default setting that causes timeout errors
  });
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.waitForSelector('.EventList');
  });

  afterAll(() => {
    browser.close();
  });
  
  // Scenario 1
  test('An event element is collapsed by default', async () => {
    const eventDetails = await page.$('.event .event_details');
    expect(eventDetails).toBeNull();
  });

  // Scenario 2
  test('User can expand an event to see its details', async () => {
    await page.click('.event .details-btn');
    const eventDetails = await page.$('.event .event_details');
    expect(eventDetails).toBeDefined();
  });

  // Scenario 3
  test('User can collapse an event to hide its details', async () => {
    await page.click('.event .details-btn');
    const eventDetails = await page.$('.event .event_details');
    expect(eventDetails).toBeNull();
  });
});


