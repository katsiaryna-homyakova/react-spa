import React from "react";
import Title from "./index";
import { render } from "enzyme";

describe("Title component", () => {
  it("renders correctly", () => {
    const component = render(<Title />);
    expect(component).toMatchSnapshot();
  });
});
