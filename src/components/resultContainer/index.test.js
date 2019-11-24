import React from "react";
import ResultContainer from "./index";
import { shallow, mount } from "enzyme";

describe("ResultContainer component", () => {
  it("renders correctly", () => {
    const component = shallow(<ResultContainer />);
    expect(component).toMatchSnapshot();
  });

  it("handle Click correctly", () => {
    const component = mount(<ResultContainer />);
    component
        .find("button")
        .at(1)
        .simulate("click");
    expect(component.state('activeFilter')).toEqual('genre');

  });
});
