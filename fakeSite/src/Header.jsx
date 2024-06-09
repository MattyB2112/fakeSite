import Navbar from "./Navbar";
import Search from "./Search";
import { useState } from "react";
import "./Header.css";
import logo from "./assets/theLogo.png";

export default function Header({ basketSize }) {
  return (
    <>
      <div className="header-container">
        <Navbar />

        <div className="logo-container">
          <div className="logo">
            <img src={logo} className="logo" />
          </div>
        </div>
        <div className="search-and-basket">
          <div className="search">
            <Search />
          </div>
          <div className="basket-counter-container">
            <a href="/basket">
              <button className="basket-button">🛒</button>
            </a>
            <div className="basket-counter">{basketSize}</div>
            <button className="basket-button">🗣️</button>
          </div>
        </div>
      </div>
    </>
  );
}
