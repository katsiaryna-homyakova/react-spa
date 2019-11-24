import React from "react";
import Title from "./index";
import { shallow } from "enzyme";

describe("Title component", () => {
  it("renders correctly", () => {
    const component = shallow(<Title />);
    expect(component).toMatchSnapshot();
  });
});
