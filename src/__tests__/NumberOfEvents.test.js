import React from "react";
import { shallow } from "enzyme";
import NumberOfEvents from "../NumberOfEvents";

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents />);
  });

  test('render text input', () => {
    expect(NumberOfEventsWrapper.find('.numberOfEvents')).toHaveLength(1);
  });

  test('renders not empty input field', () => {
    expect(NumberOfEventsWrapper.find('.numberOfEvents')).not.toEqual(0);
  });

  test('render text input correctly', () => {
    const numberOfEvents = NumberOfEventsWrapper.prop('numberOfEvents');
    expect(NumberOfEventsWrapper.find('.numberOfEvents').prop('value')).toBe(32);
  });

  test("input value is by default 32", () => {
    expect(NumberOfEventsWrapper.find('.numberOfEvents').at(0).props().value).toEqual(32);
  })

  test("input type is entered is a number", () => {
    expect(NumberOfEventsWrapper.find('.numberOfEvents').at(0).props().type).toEqual('number');
  })
  
});