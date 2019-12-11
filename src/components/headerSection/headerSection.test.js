import React from "react";
import Header from "./index";
import { render } from "enzyme";

describe("Header Section component", () => {
  it("renders correctly", () => {
    const component = render(<Header />);
    expect(component).toMatchSnapshot();
  });
});
