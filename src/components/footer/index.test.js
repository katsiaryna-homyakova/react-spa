import React from "react";
import Footer from "./index";
import { render } from "enzyme";

describe("Footer component", () => {
  it("renders correctly", () => {
    const component = render(<Footer />);
    expect(component).toMatchSnapshot();
  });
});
