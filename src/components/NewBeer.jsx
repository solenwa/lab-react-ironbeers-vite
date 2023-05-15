import React from "react";
import { Link } from "react-router-dom";
import newbeerimg from "../assets/new-beer.png";

function NewBeer() {
  return (
    <div className="HomeComponent">
      <img src={newbeerimg} alt="A pint of beer"></img>
      <Link to="/newbeer">
        <h1>New Beer</h1>
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

export default NewBeer;
