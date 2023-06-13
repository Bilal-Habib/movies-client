import Hero from "../hero/Hero";
import React from "react";

const Home = ({ movies }) => {
  return <Hero data-testid="home-hero" movies={movies} />;
};

export default Home;
