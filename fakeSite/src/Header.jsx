import Navbar from "./Navbar";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "./UserContext";
import "./Header.css";
import logo from "./assets/theLogo.png";
import shoppingCart from "./assets/shoppingcart.png";
import headIcon2 from "./assets/head-icon2.png";
import { Link } from "react-router-dom";

export default function Header({ basketSize }) {
  return (
    <>
      <div className="header-container">
        <Navbar />
        <div className="logo-container">
          <Link to="/">
            <img
              src={logo}
              className="logo"
              alt="logo for fake clothing website"
            />
          </Link>
        </div>
        <div className="basket-and-chat-container">
          <div className="basket-counter-container">
            <a href="basket">
              <button className="header-button-cart">
                <img src={shoppingCart} className="cart-image" />
              </button>
            </a>
            <div
              className={
                basketSize === 0
                  ? "basket-counter-empty"
                  : "basket-counter-not-empty"
              }
            >
              {basketSize}
            </div>
            <a href="login">
              <button className="header-button-profile">
                <img src={headIcon2} className="head-image" />
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
