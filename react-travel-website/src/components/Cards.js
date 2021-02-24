import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1> Check out these EPIC Destinations </h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="\images\img-9.jpg"
              text="Xplore wonderfull waterfalls in the rain forest"
              label="Adventure"
              pat="/services"
            />
            <CardItem
              src="\images\img-2.jpg"
              text="Xplore never ending beaches in the Caribbean"
              label="Luxury"
              pat="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="\images\img-1.jpg"
              text="Xplore Canadian outback and Rockies"
              label="Camping"
              pat="/services"
            />
            <CardItem
              src="\images\img-5.jpg"
              text="Xplore New York city's busy night life"
              label="City"
              pat="/services"
            />
            <CardItem
              src="\images\img-8.jpg"
              text="Xplore cammel ride Egyptian dunes "
              label="Desert"
              pat="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
