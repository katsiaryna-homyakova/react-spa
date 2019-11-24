import React from "react";
import Logo from "./index";
import { shallow } from "enzyme";

describe("Logo Section component", () => {
  it("renders correctly", () => {
    const component = shallow(<Logo />);
    expect(component).toMatchSnapshot();
  });
});
