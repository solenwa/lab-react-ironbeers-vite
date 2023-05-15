import React from "react";
import allbeersimg from "../assets/beers.png";
import { Link } from "react-router-dom";

function Beers() {
  return (
    <div className="HomeComponent">
      <img src={allbeersimg} alt="Counter full of beers"></img>
      <Link to="/beers">
        <h1>All Beers</h1>
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

export default Beers;
