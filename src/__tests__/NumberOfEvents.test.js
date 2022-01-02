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

  test('renders input field and is not empty', () => {
    expect(NumberOfEventsWrapper.find('.numberOfEvents')).not.toEqual(0);
  });

  test('render text input correctly', () => {
    const numberOfEvents = NumberOfEventsWrapper.prop('numberOfEvents');
    expect(NumberOfEventsWrapper.find('.numberOfEvents').prop('value')).toBe(32);
  });

  // test("input value is by default 32", () => {
  //   expect(NumberOfEventsWrapper.find('.eventNumberInput').at(0).prop().value).toEqual(32);
  // })

  // test("input type is entered is a number", () => {
  //   expect(NumberOfEventsWrapper.find('.eventNumberInput').at(0).prop().type).toEqual('number');
  // })
  
});