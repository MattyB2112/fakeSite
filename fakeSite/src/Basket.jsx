import "./basketPage.css";
import { useEffect, useState, useContext } from "react";
import { UserContext } from "./UserContext";
import { getCart } from "./APICalls";

export default function Basket({ basket, onBasketChange, onBasketDelete }) {
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
                  <li className="basket-list-item">
                    User ID: {signedInUser.user_id}
                  </li>
                  <li className="basket-list-item">
                    Item ID: {item.product_id}
                  </li>
                  <li className="basket-list-item">
                    Product Name: {item.productname}
                  </li>
                  <li className="basket-list-item">
                    Product Price: {item.productprice}
                  </li>
                  {/* <li className="basket-list-item">
                    <img src={item.productimage1} />
                  </li> */}
                  <li className="basket-list-item">
                    Quantity: {item.quantity}
                  </li>
                  <div className="add-or-minus-basket-button-container">
                    <button
                      className="update-basket-button"
                      onClick={() => {
                        onBasketChange(
                          item.product_id,
                          signedInUser.user_id,
                          1
                        );
                      }}
                    >
                      +
                    </button>
                  </div>

                  <div>
                    <button
                      className="update-basket-button"
                      onClick={() => {
                        onBasketChange(
                          item.product_id,
                          signedInUser.user_id,
                          -1
                        );
                      }}
                    >
                      -
                    </button>
                  </div>
                  <div>
                    <button
                      className="update-basket-button"
                      onClick={() => {
                        onBasketDelete(item.product_id, signedInUser.user_id);
                      }}
                    >
                      DELETE
                    </button>
                  </div>
                </ul>
              );
          })
        )}
      </div>
    );
}
