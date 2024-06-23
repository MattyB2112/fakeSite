import "./basketPage.css";
import { useEffect, useState, useContext } from "react";
import { UserContext } from "./UserContext";
import { getCart } from "./APICalls";

export default function Basket() {
  const [basket, setBasket] = useState([]);
  const { signedInUser } = useContext(UserContext);

  useEffect(() => {
    getCart(signedInUser.user_id).then((result) => {
      setBasket(result.data.basket);
    });
  }, []);

  return (
    <div className="basket-page-container">
      {basket?.map((item) => {
        <div>ITEM ID IS {item.item_id}</div>;
      })}
      <div className="the-basket">BASKET FUNCTIONALITY BEING WORKED ON</div>
    </div>
  );
}
