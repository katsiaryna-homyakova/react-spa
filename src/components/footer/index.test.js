import React from "react";
import Footer from "./index";
import { shallow } from "enzyme";

describe("Footer component", () => {
  it("renders correctly", () => {
    const component = shallow(<Footer />);
    expect(component).toMatchSnapshot();
  });
});
