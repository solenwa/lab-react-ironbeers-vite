import React from "react";
import { Link } from "react-router-dom";
import randombeerimg from "../assets/random-beer.png";

function RandomBeer() {
  return (
    <div className="HomeComponent">
      <img src={randombeerimg} alt="Counter showing one beer"></img>
      <Link to="/randombeer">
        <h1>Random Beer</h1>
      </Link>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
        condimentum pulvinar venenatis. Phasellus consectetur tempor
        sollicitudin. Suspendisse dapibus eu felis nec egestas. Phasellus quis
        blandit nisl, et laoreet turpis. Ut pellentesque quis quam in
        consectetur. Nulla facilisi. Curabitur suscipit molestie diam non porta.
        Donec pellentesque, risus non commodo auctor, lorem turpis lobortis
        tortor, vel placerat est enim in leo.
      </p>
    </div>
  );
}

export default RandomBeer;
