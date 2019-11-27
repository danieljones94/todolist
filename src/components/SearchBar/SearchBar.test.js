import React from "react";
import { mount } from "enzyme";
import SearchBar from "./SearchBar";

describe("SearchBar component tests", () => {
  let component;
  let testFunction;

  beforeEach(() => {
    testFunction = jest.fn();
    component = mount(
      <SearchBar setSearchText={testFunction} searchText={"string"} />
    );
  });

  test("should render one input", () => {
    expect(component.find("input").length).toEqual(1);
  });

  test("it should be passed down a function as setSearchText as a prop", () => {
    expect(component.props().setSearchText).toEqual(testFunction);
  });
});
