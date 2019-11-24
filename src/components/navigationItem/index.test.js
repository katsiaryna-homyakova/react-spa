import React from "react";
import NavigationItem from "./index";
import { shallow } from "enzyme";

describe("NavigationItem component", () => {
  it("renders correctly", () => {
    const component = shallow(<NavigationItem />);
    expect(component).toMatchSnapshot();
  });
});
