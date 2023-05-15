import React from "react";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ListBeersPage() {
  const [beersList, setBeersList] = useState([]);

  const fetchBeers = async () => {
    try {
      const response = await fetch(`https://ih-beers-api2.herokuapp.com/beers`);
      if (response.status === 200) {
        const parsed = await response.json();
        setBeersList(parsed);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBeers();
  }, []);

  return (
    <div>
      <Header />
      {beersList.map((beer) => (
        <Link to={`/beers/${beer._id}`}>
          <div className="BeerBox" key={beer._id}>
            <div className="BeerBoxImg">
              <img src={beer.image_url} alt={`Pic of ${beer.name}`}></img>
            </div>
            <div className="BeerBoxDetails">
              <h3>{beer.name}</h3>
              <h4>{beer.tagline}</h4>
              <p>
                <strong>Created by:</strong> {beer.contributed_by}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ListBeersPage;
