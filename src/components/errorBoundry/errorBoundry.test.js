import React from "react";
import ErrorBoundry from "./index";
import { mount, render } from "enzyme";

describe("error boundry component", () => {
  const Something = () => <h1>Some mocked child</h1>;
  it("renders correctly", () => {
    const component = render(
      <ErrorBoundry>
        <Something />
      </ErrorBoundry>
    );
    expect(component).toMatchSnapshot();
  });

  it("renders children when passed in", () => {
   
    const wrapper = mount(
      <ErrorBoundry>
        <Something />
      </ErrorBoundry>
    );
    const error = new Error("test");

    wrapper.find(Something).simulateError(error);
    expect(wrapper.contains(<h1>Something went wrong.</h1>)).toEqual(true);
  });
});
