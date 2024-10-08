import Navbar from "./Navbar";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "./UserContext";
import "./Header.css";
import newlogo5 from "./assets/newerlogo1transp.png";
import newlogo6 from "./assets/orangelogo.png";
import shoppingCart from "./assets/shoppingcart.png";
import headIcon2 from "./assets/head-icon2.png";
import { Link } from "react-router-dom";

export default function Header({ basketSize }) {
  const { signedInUser, setSignedInUser } = useContext(UserContext);
  return (
    <>
      <div className="header-container">
        <Navbar />
        <div className="logo-container">
          <Link to="/">
            <img
              src={newlogo5}
              className="logo"
              alt="logo for fake clothing website"
            />
          </Link>
        </div>
        <div className="basket-and-chat-container">
          <div className="basket-counter-container">
            <Link to="/basket">
              <button className="header-button-cart">
                <img src={shoppingCart} className="cart-image" />
              </button>
            </Link>
            <div
              className={
                basketSize === 0
                  ? "basket-counter-empty"
                  : "basket-counter-not-empty"
              }
            >
              {basketSize}
            </div>
            <Link to="/login">
              <button className="header-button-profile">
                <img src={headIcon2} className="head-image" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
