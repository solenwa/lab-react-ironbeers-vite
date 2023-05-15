import React from "react";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SingleBeerPage() {
  const { beerId } = useParams();
  const [beer, setBeer] = useState();
  const fetchBeer = async () => {
    try {
      const response = await fetch(
        `https://ih-beers-api2.herokuapp.com/beers/${beerId}`
      );
      if (response.status === 200) {
        const parsed = await response.json();
        setBeer(parsed);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchBeer();
  }, [beerId]);

  return beer ? (
    <div className="BeerDetail">
      <Header />
      <img src={beer.image_url} alt={`Pic of ${beer.name}`}></img>
      <div className="BeerDetailHeader">
        <h1>{beer.name}</h1>
        <h2>{beer.attenuation_level}</h2>
      </div>
      <div className="BeerDetailHeader">
        <h2>{beer.tagline}</h2>
        <p>
          <strong>{beer.first_brewed}</strong>
        </p>
      </div>
      <p>{beer.description}</p>
      <h4>{beer.contributed_by}</h4>
    </div>
  ) : (
    <div>
      <Header />
      <h1>Loading information about your beer</h1>
    </div>
  );
}

export default SingleBeerPage;
