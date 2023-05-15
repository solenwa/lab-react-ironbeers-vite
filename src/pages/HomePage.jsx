import React from "react";
import Beers from "../components/Beers";
import NewBeer from "../components/NewBeer";
import RandomBeer from "../components/RandomBeer";

function HomePage() {
  return (
    <div>
      <Beers />
      <NewBeer />
      <RandomBeer />
    </div>
  );
}

export default HomePage;
