import { useState } from "react";
import { fetchProductById } from "./APICalls";

export default function handleAddToBasket(cart, setCart, id) {
  fetchProductById(id).then((result) => {
    let tempCart = cart;
    tempCart.push(result.data.product[0]);
    setCart(tempCart);
    console.log(cart.length);
    console.log(cart);
    return cart;
  });
}
