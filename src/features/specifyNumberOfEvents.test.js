import React from "react";
import { mount } from 'enzyme';
import Event from "../Event"
import NumberOfEvents from '../NumberOfEvents';
import App from '../App';
import { defineFeature, loadFeature } from "jest-cucumber";


// The code starts by importing two necessary 
// built-in functions, loadFeature() and defineFeature(), from jest-cucumber. 
// The first one, loadFeature(), is used to load a Gherkin file, 
// and the second, defineFeature(), is used to define the code for that file (feature).

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {

    // Scenario 1
    test('When user has not specified a number, by default the event list should display 32 events', ({ given,when, then }) => {

        given('user has not specified an event number yet', () => {
        });

        let AppWrapper;
        when('the app loads, user see the main page', () => {
            AppWrapper = mount(<App />);
        })

        then('the event list will display 32 events', () => {
            AppWrapper.update();
            expect(AppWrapper.find(Event)).toHaveLength(9);
        });
    });

    // Scenario 2
    test('The user can change the number of events they want to see', ({ given, and, when, then }) => {

        let AppWrapper;
        given('the app has loaded', () => {
            AppWrapper = mount(<App />);
        });

        and('the event list is displaying 32 events', () => {
            AppWrapper.update();
            expect(AppWrapper.find(Event)).toHaveLength(9);
        });

        when('the user inputs desiered number', () => {
            AppWrapper.find('.numberOfEvents').simulate('change', { target: { value: 6 } });
        });

        then('the number of events in the event list corresponds to that input number', () => {
            const NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
            NumberOfEventsWrapper.setState({ query: 6 });
            expect(NumberOfEventsWrapper.state('query')).toBe(6);
        });
    });
})