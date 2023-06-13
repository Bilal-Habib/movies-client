/**
 * @jest-environment jsdom
 */

import React from "react";
import { render } from "@testing-library/react";
import Home from "../../../src/components/home/Home";

describe("Home component", () => {
  const movies = [
    {
      id: "64051d6b643db80e55d804c8",
      imdbId: "tt1630029",
      title: "Avatar: The Way of Water",
      releaseDate: "2022-12-16",
      trailerLink: "https://www.youtube.com/watch?v=d9MyW72ELq0",
      poster: "https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
      genres: ["Science Fiction", "Action", "Adventure"],
      backdrops: [
        "https://image.tmdb.org/t/p/original/s16H6tpK2utvwDtzZ8Qy4qm5Emw.jpg",
      ],
      reviewIds: [],
    },
  ];

  it("should render the Hero component with movies prop", () => {
    const { getByTestId } = render(<Home movies={movies} />);
    const heroComponent = getByTestId("home-hero");
    expect(heroComponent).toBeInTheDocument();
    expect(heroComponent).toHaveAttribute("movies", JSON.stringify(movies));
  });
});
