import React from "react";
import Filter from "./index";
import { mount } from "enzyme";

describe("filter component", () => {
  let mockClick = jest.fn(), component;

  beforeAll(() => {
    const filters = [
      { id: "releaseDate", value: "Release date" },
      { id: "genre", value: "Genre" }
    ];
    component = mount(
      <Filter
        title={"Sort by"}
        filters={filters}
        handleChangeFilter={mockClick}
        activeByDefault={"releaseDate"}
      />
    );
  });

  it("renders correctly", () => {
    expect(component).toMatchSnapshot();
  });

  it("handle click", () => {
    component
      .find("button")
      .at(1)
      .simulate("click");
    expect(mockClick).toHaveBeenCalledTimes(1);
    expect(component).toMatchSnapshot();
  });
});
