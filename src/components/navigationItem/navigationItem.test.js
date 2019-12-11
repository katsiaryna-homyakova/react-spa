import React from "react";
import NavigationItem from "./index";
import { render } from "enzyme";

describe("NavigationItem component", () => {
  it("renders correctly", () => {
    const component = render(<NavigationItem />);
    expect(component).toMatchSnapshot();
  });
});
