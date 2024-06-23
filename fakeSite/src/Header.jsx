import Navbar from "./Navbar";
import Search from "./Search";
import { useState, useEffect } from "react";
import "./Header.css";
import logo from "./assets/theLogo.png";
import shoppingCart from "./assets/shoppingcart.png";
import chatBox from "./assets/chatbox.png";
import { Link } from "react-router-dom";

// useEffect(() => {
//   console.log("IM WORKING");
// }, [cart]);

export default function Header({ cart }) {
  console.log(cart.length, "HEADER");
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
        <div className="search-and-basket">
          <div className="search">
            <Search />
          </div>
          <div className="basket-counter-container">
            <a href="basket">
              <button className="header-button">
                <img src={shoppingCart} className="header-image" />
              </button>
            </a>
            <div className="basket-counter">{cart.length}</div>
            <button className="header-button">
              <img
                src={chatBox}
                className="header-image"
                alt="logo for fake clothing website"
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
