###MEET APP###


### Objective

To build a serverless, progressive web application (PWA) with React using a test-driven development (TDD) technique. The application uses the Google Calendar API to fetch upcoming events.
Key Features:

    Filter events by city.
    Show/hide event details.
    Specify number of events.
    Use the app when offline.
    Add an app shortcut to the home screen.
    View a chart showing the number of upcoming events by city.

### User Stories:

    As a user, I would like to be able to filter events by city so that I can see the list of events that take place in that city.
    As a user, I would like to be able to show/hide event details so that I can see more/less information about an event.
    As a user, I would like to be able to specify the number of events I want to view in the app so that I can see more or fewer events in the events list at once.
    As a user, I would like to be able to use the app when offline so that I can see the events I viewed the last time I was online.
    As a user, I would like to be able to add the app shortcut to my home screen so that I can open the app faster.
    As a user, I would like to be able to see a chart showing the upcoming events in each city so that I know what events are organized in which city.

### Technical:

    React Application.
    use TDD technique.
    use the Google Calendar API and OAuth2 authentication flow
    use serverless functions for the authorization server

### How to get the app running ### npm run start ###

### App dependencies

    gh-pages
    googleapis
    enzyme
    @wojtekmaj/enzyme-adapter-react-17
    jest-cucumber
    puppeteer
