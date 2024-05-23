import Navbar from "./Navbar";
import Search from "./Search";
import { useState } from "react";

export default function Header({ basketSize }) {
  return (
    <>
      <div className="header-container">
        <Navbar />

        <div className="logo-container">
          <div className="logo">LOGO</div>
        </div>
        <div className="search-and-basket">
          <div className="search">
            <Search />
          </div>
          <div className="basket-counter-container">
            <button className="basket-button">🛒</button>
            <div className="basket-counter">{basketSize}</div>
            <button className="basket-button">🗣️</button>
          </div>
        </div>
      </div>
    </>
  );
}
