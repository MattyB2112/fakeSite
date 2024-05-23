import { useState } from "react";

export default function handleAddToBasket(basketSize, setBasketSize) {
  setBasketSize(basketSize + 1);
}
