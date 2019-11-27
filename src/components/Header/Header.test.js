import React from "react";
import Header from "./Header";
import { shallow } from "enzyme";

describe("Header Tests", () => {
  let component;

  beforeEach(() => {
    component = shallow(<Header />);
  });

  test("should match the snapshot", () => {
    expect(component).toMatchSnapshot();
  });

  test("should be one searchbar in the header", () => {
    expect(component.find("SearchBar").length).toEqual(1);
  });
});
