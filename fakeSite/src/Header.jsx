import Navbar from "./Navbar";
import Search from "./Search";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "./UserContext";
import "./Header.css";
import logo from "./assets/theLogo.png";
import shoppingCart from "./assets/shoppingcart.png";
import chatBox from "./assets/chatbox.png";
import { Link } from "react-router-dom";
import { getCart } from "./APICalls";

export default function Header({ basket, basketChanged }) {
  let basketSize = 0;
  for (let i = 0; i < basket.length; i++) {
    if (basket[i].product_id !== null) {
      basketSize++;
    }
  }
  const [error, setError] = useState(null);
  const { signedInUser } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getCart(signedInUser.user_id)
      .then((result) => {
        setBasket(result.data.basket);

        setIsLoading(false);
      })
      .catch((err) => {
        setError({ err });
        setIsLoading(false);
      });
  }, [basketChanged]);
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
              <button className="header-button">
                <img src={shoppingCart} className="header-image" />
              </button>
            </a>
            <div className="basket-counter">{basketSize}</div>
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
      <div></div>
    </>
  );
}
