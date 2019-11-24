import React from "react";
import FilmCard from "./index";
import { shallow } from "enzyme";

describe("filmCard component", () => {
 
  it("renders correctly", () => {
    const component = shallow(
      <FilmCard imgPath="somePath" title="some title" releaseDate="some date" genre="some genre" />
    );
    expect(component).toMatchSnapshot();
  });


});
