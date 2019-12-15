import React from "react";
import FilmCard from "./index";
import { render } from "enzyme";

describe("filmCard component", () => {
 
  it("renders correctly", () => {
    const component = render(
      <FilmCard imgPath="somePath" title="some title" releaseDate="some date" genre="some genre" />
    );
    expect(component).toMatchSnapshot();
  });


});
