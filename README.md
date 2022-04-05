### MEET APP ###


### Overview

The application is a serverless, progressive web application (PWA) built with React and developed by using a Test-Driven Development (TDD) approach. The application uses the Google Calendar API to fetch upcoming events.


### To install the app and its dependencies:
    run npm install

### To run tests:
    npm run test

### How to get the app running:
    npm run start


### Test Runner

    Unit Testing: Jest
    Integration Testing: Jest
    Acceptance Testing: Cucumber
    End-to-end Testing: Puppeteer

### Key Features

    Filter events by city.
    Show/hide event details.
    Specify number of events.
    Use the app when offline.
    Add an app shortcut to the home screen.
    View a chart showing the number of upcoming events by city.


### User Stories

FEATURE 1: FILTER EVENTS BY CITY

“As a user, I should be able to ‘filter events by city’, So that I can see the list of events that take place in that city”

Scenario 1: When user hasn’t searched for a city, show upcoming events from all cities.

    Given: user hasn’t searched for any city
    When: the user opens the app
    Then: the user should see a list of all upcoming events

Scenario 2: User should see a list of suggestions when they search for a city.

    Given: the main page is open
    When: user starts typing in the city textbox
    Then: the user should see a list of cities (suggestions) that match what they’ve typed

Scenario 3: User can select a city from the suggested list.

    Given: the user was typing “Berlin” in the city textbox. And the list of suggested cities is showing
    When: the user selects a city (e.g., “Berlin, Germany”) from the list.
    Then: their city should be changed to that city (i.e., “Berlin, Germany”). And the user should receive a list of upcoming events in that city

FEATURE 2: SHOW/HIDE AN EVENT’S DETAILS

“As a user, I would like to be able to show/hide event details so that I can see more/less information about an event”

Scenario 1: An event element is collapsed by default.

    Given: a list of upcoming events is displayed
    When: each event detail is hidden
    Then: the user can check a list of upcoming events

Scenario 2: User can expand an event to see its details.

    Given: a list of upcoming events is displayed
    When: the user clicks ‘show detail’ button in an event item
    Then: the user can check the detail of the event

Scenario 3: User can collapse an event to hide its details.

    Given: an event detail is displayed
    When: the user clicks ‘hide detail’ button in the event detail
    Then: a list of upcoming events is displayed

FEATURE 3: SPECIFY NUMBER OF EVENTS

“As a user, I would like to be able to specify the number of events I want to view in the app so that I can see more or fewer events in the events list at once.”

Scenario 1: When user hasn’t specified a number, 32 is the default number.

    Given: the user hasn’t specified the number of events
    When: the user opens the app
    Then: 32 item of upcoming event list will be displayed

Scenario 2: User can change the number of events they want to see.

    Given: the user specified the number of events
    When: the user open the app
    Then: specified number of item if upcoming event list will be displayed

FEATURE 4: USE THE APP WHEN OFFLINE

“As a user, I would like to be able to use the app when offline so that I can see the events I viewed the last time I was online”

Scenario 1: Show cached data when there’s no internet connection.

    Given: the user is offline and wants to use the app to check upcoming events
    When: the user opens the app
    Then: the app displays cashed data

Scenario 2: Show error when user changes the settings (city, time range).

    Given: the user is offline and wants to change the app setting
    When: the user changes the settings (e.g., city, time range)
    Then: the app shows an error because the user is offline

FEATURE 5: DATA VISUALIZATION

“As a user, I would like to be able to see a chart showing the upcoming events in each city so that I know what events are organized in which city.”

Scenario 1: Show a chart with the number of upcoming events in each city.

    Given: the user wants to see the graphical image of the number of upcoming event in each city
    When: the user opens the app
    Then: the app shows chart of upcoming events in each city


### Technical:

    React Application.
    use TDD technique.
    use the Google Calendar API and OAuth2 authentication flow
    use serverless functions for the authorization server



### App dependencies

    gh-pages
    googleapis
    enzyme
    @wojtekmaj/enzyme-adapter-react-17
    jest-cucumber
    puppeteer
