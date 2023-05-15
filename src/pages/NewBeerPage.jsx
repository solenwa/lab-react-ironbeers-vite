import React from "react";
import Header from "../components/Header";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NewBeerPage() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [first_brewed, setFirst_Brewed] = useState("");
  const [brewers_tips, setBrewers_Tips] = useState("");
  const [attenuation_level, setAttenuation_Level] = useState(0);
  const [contributed_by, setContributed_By] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const payload = {
      name,
      tagline,
      description,
      first_brewed,
      brewers_tips,
      attenuation_level,
      contributed_by,
    };
    try {
      const response = await fetch(
        `https://ih-beers-api2.herokuapp.com/beers/new`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );
      if (response.status === 200) {
        console.log("All good");
        const newBeer = await response.json();
        // Navigate to the details page
        navigate(`/beers/${newBeer._id}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Header />
      <form
        style={{ display: "grid", gridTemplate: "repeat(8, 1fr) / auto" }}
        onSubmit={handleSubmit}
      >
        <label>
          Name:
          <input
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </label>
        <label>
          Tagline:
          <input
            value={tagline}
            onChange={(event) => {
              setTagline(event.target.value);
            }}
          />
        </label>
        <label>
          Description:
          <input
            value={description}
            onChange={(event) => {
              setDescription(event.target.value);
            }}
          />
        </label>
        <label>
          First Brewed:
          <input
            value={first_brewed}
            onChange={(event) => {
              setFirst_Brewed(event.target.value);
            }}
          />
        </label>
        <label>
          Brewers Tips:
          <input
            value={brewers_tips}
            onChange={(event) => {
              setBrewers_Tips(event.target.value);
            }}
          />
        </label>
        <label>
          Attenuation Level:
          <input
            type="number"
            value={attenuation_level}
            onChange={(event) => {
              setAttenuation_Level(event.target.value);
            }}
          />
        </label>
        <label>
          Contributed By:
          <input
            value={contributed_by}
            onChange={(event) => {
              setContributed_By(event.target.value);
            }}
          />
        </label>
        <button type="submit">Add new</button>
      </form>
    </div>
  );
}

export default NewBeerPage;
