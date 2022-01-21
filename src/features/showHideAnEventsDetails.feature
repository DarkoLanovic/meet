Feature: Show or hide an events details

Scenario: An events element is collapsed by default
Given user is on the loaded main page
And app loaded
When the user have not click show details button
Then the event element should be collapsed by default

Scenario: The user can expand an event to see its details
Given app loaded and the user would like to see more details about event
And the list of events have been loaded
When the user clicks on the show details button
Then the user can expand it to see more information about event

Scenario: The user can collapse an event to hide its details
Given the app hes been loaded
And the events details are shown and user can see them
When the user clicks on the hide details button
Then the events details are collapsed