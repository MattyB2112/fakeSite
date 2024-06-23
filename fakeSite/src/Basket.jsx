import "./basketPage.css";
import { useEffect, useState, useContext } from "react";
import { UserContext } from "./UserContext";
import { getCart } from "./APICalls";

export default function Basket({ basket, setBasket }) {
  const { signedInUser } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [myCart, setMyCart] = useState([]);

  useEffect(() => {
    getCart(signedInUser.user_id)
      .then((result) => {
        setMyCart(result.data.basket);
        setIsLoading(false);
      })
      .catch((err) => {
        setError({ err });
        setIsLoading(false);
      });
  }, [basket]);

  if (isLoading) {
    return <div className="loading-message">LOADING...</div>;
  } else
    return (
      <div className="basket-list-container">
        <h1>ITEMS IN MY BASKET</h1>
        {myCart.length === 0 ? (
          <div>NO ITEMS IN BASKET</div>
        ) : (
          myCart.map((item, index) => {
            return (
              <ul className="basket-list">
                <li className="basket-list-item">
                  ITEM ID IS {item.product_id}
                </li>
              </ul>
            );
          })
        )}
      </div>
    );
}
