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
    let tempCart = [];
    getCart(signedInUser.user_id)
      .then((result) => {
        result.data.basket.map((item) => {
          if (item.product_id !== null) tempCart.push(item);
        });

        setMyCart(tempCart);
        console.log(tempCart);
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
        {myCart.length === 0 ? (
          <h1>NO ITEMS IN BASKET</h1>
        ) : (
          myCart.map((item, index) => {
            if (item.product_id !== null)
              return (
                <ul className="basket-list">
                  <li className="basket-list-item">{item.productname}</li>
                  <li className="basket-list-item">
                    <img src={item.productimage1} />
                  </li>
                  <li className="basket-list-item">quantity {item.quantity}</li>
                </ul>
              );
          })
        )}
      </div>
    );
}
