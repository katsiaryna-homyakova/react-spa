import React from "react";
import Header from "./index";
import { shallow } from "enzyme";

describe("Header Section component", () => {
  it("renders correctly", () => {
    const component = shallow(<Header />);
    expect(component).toMatchSnapshot();
  });
});
