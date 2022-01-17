import React from "react";
import App from "../App";
import Event from "../Event";
import { mockData } from "../mock-data";
import { mount } from "enzyme";
import { loadFeature, defineFeature } from "jest-cucumber";


// The code starts by importing two necessary 
// built-in functions, loadFeature() and defineFeature(), from jest-cucumber. 
// The first one, loadFeature(), is used to load a Gherkin file, 
// and the second, defineFeature(), is used to define the code for that file (feature).

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {

    // Scenario 1
    test('An events element is collapsed by default', ({given, and, when, then}) => {

        given('user is on the loaded main page', () => {    
        });
        
        let AppWrapper;
        and('app loaded', () =>{
            AppWrapper = mount(<App />)
        });

        when('the user have not click show details button', () => {
            AppWrapper.update();
            expect(AppWrapper.find(Event)).toHaveLength(mockData.length)
        });

        then('the event element should be collapsed by default', () => {
            expect(AppWrapper.find('.event_details')).toHaveLength(0);
        });
    });

    // Scenario 2
    test('The user can expand an event to see its details', ({ given, and, when, then }) => {

        let AppWrapper;
        given('app loaded and the user would like to see more details about event', () => {
            AppWrapper = mount(<App />)
        });

        and('the list of events have been loaded', () => {
            AppWrapper.update();
            expect(AppWrapper.find(Event)).toHaveLength(mockData.length);
        });

        when('the user clicks on the show details button', () => {
            AppWrapper.find('.event .details-btn').at(0).simulate('click');
        });

        then('the user can expand it to see more information about event', () => {
            expect(AppWrapper.find('.event_details')).toHaveLength(1);
        });
    });

    //Scenario 3
    test('The user can collapse an event to hide its details', ({ given, and, when,then }) => {

        let AppWrapper;
        given('the app hes been loaded', () => {
            AppWrapper = mount(<App />);
        })

        and('the events details are shown and user can see them', () => {
            AppWrapper.update();
            AppWrapper.find('.event .details-btn').at(0).simulate('click');
            expect(AppWrapper.find('.event_details')).toHaveLength(1);
        });

        when('the user clicks on the hide details button', () => {
            AppWrapper.find('.event .details-btn').at(0).simulate('click');
        });

        then('the events details are collapsed', () => {
            expect(AppWrapper.find('.event_details')).toHaveLength(0);
        });
    });   
})