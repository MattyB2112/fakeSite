import axios from "axios";

export function fetchProductById(id) {
  return axios
    .get(`https://fakesitebackend.onrender.com/api/products/${id}`)
    .then((result) => result)
    .catch((error) => {
      if (error) {
        return error;
      }
    });
}

export function fetchUserById(id) {
  return axios
    .get(`https://fakesitebackend.onrender.com/api/users/${id}`)
    .then((result) => result)
    .catch((error) => {
      if (error) {
        return error;
      }
    });
}

export function getCart(id) {
  return axios
    .get(`https://fakesitebackend.onrender.com/api/users/${id}/basket`)
    .then((result) => result)
    .catch((error) => {
      if (error) {
        return error;
      }
    });
}

export function addToCart(product_id, user_id) {
  const productObj = { product: product_id };
  console.log(product_id, "<-- PRODUCT ID", user_id, "<-- USER ID");
  return axios
    .post(
      `https://fakesitebackend.onrender.com/api/users/${user_id}/basket`,
      productObj
    )
    .then((result) => result)
    .catch((error) => {
      if (error) {
        return error;
      }
    });
}
