Feature: Specify Number of Events

Scenario: When user has not specified a number, by default the event list should display 32 events
Given user has not specified an event number yet
When the app loads, user see the main page
Then the event list will display 32 events

Scenario: The user can change the number of events they want to see
Given the app has loaded
And the event list is displaying 32 events
When the user inputs desiered number
Then the number of events in the event list corresponds to that input number