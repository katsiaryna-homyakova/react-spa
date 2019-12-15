import React from "react";
import Logo from "./index";
import { render } from "enzyme";

describe("Logo Section component", () => {
  it("renders correctly", () => {
    const component = render(<Logo />);
    expect(component).toMatchSnapshot();
  });
});
