import React from "react";
import { shallow } from "enzyme";
import { mockData } from "../mock-data";
import Event from "../Event";

describe("<Event /> component", () => {
  let EventWrapper;
  let event = mockData[0];
  beforeAll(() => {
    EventWrapper = shallow(<Event event={event} />);
  });

  test('renders summary', () => {
    expect(EventWrapper.find('.summary')).toHaveLength(1);
  });
  test('renders start-date and timezone', () => {
    expect(EventWrapper.find('.start-date')).toHaveLength(1);
  });
  test('renders location', () => {
    expect(EventWrapper.find('.location')).toHaveLength(1);
  });
  test('renders the show/hide details button', () => {
    expect(EventWrapper.find('.show-details-btn')).toHaveLength(1);
  });

  

  test('the event element is collapsed by default', () => {
    EventWrapper.setState({
      collapsed: true,
    });
    expect(EventWrapper.state('collapsed')).toBe(true);
  });
  
  test('click on a show-details button to expand the event details', () => {
    EventWrapper.setState({
      collapsed: true,
    });
    EventWrapper.find('.show-details-btn').simulate('click');
    expect(EventWrapper.state('collapsed')).toBe(false);
  });

  test('click on hide-details button to hide the evet details', () => {
    EventWrapper.setState({
      collapsed: false,
    });
    EventWrapper.find('.hide-details-btn').simulate('click');
    expect(EventWrapper.state('collapsed')).toBe(true);
  });
});