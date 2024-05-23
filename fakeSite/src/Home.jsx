import { useState } from "react";

import Carousel from "./Carousel";
import shoe1one from "./assets/shoe1first.png";
import shoe1two from "./assets/shoe1second.png";
import shoe1three from "./assets/shoe1third.png";
import shoe1four from "./assets/shoe1fourth.png";
import shoe2one from "./assets/shoe2first.jpeg";
import shoe2two from "./assets/shoe2second.png";
import shoe2three from "./assets/shoe2third.jpeg";
import shoe2four from "./assets/shoe2fourth.jpeg";
import handleAddToBasket from "./addToBasket";
const images1 = [shoe1one, shoe1two, shoe1three, shoe1four];
const images2 = [shoe2one, shoe2two, shoe2three, shoe2four];
const imagesArray = [
  { img: images1, URL: "/1" },
  { img: images2, URL: "/2" },
  { img: images2, URL: "/3" },
  { img: images2, URL: "/4" },
  { img: images2, URL: "/5" },
  { img: images2, URL: "/6" },
];

export default function Home({ basketSize, setBasketSize }) {
  return (
    <div className="home-boxes-container">
      {imagesArray.map((images) => (
        <div className="home-box">
          <Carousel images={images.img} href="www.google.co.uk" />
          <div className="details-basket-container">
            <div className="details-container">
              <div className="item-name">Hello Test!</div>
              <div className="item-price">$65.99</div>
            </div>
            <div>
              <button
                className="add-to-basket-button"
                onClick={() => setBasketSize(basketSize + 1)}
              >
                +
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
