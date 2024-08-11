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

export function fetchAllUsers() {
  return axios
    .get(`https://fakesitebackend.onrender.com/api/users/`)
    .then((result) => result)
    .catch((error) => {
      if (error) {
        return error;
      }
    });
}

export function fetchUserById(id) {
  return axios
    .get(`https://fakesitebackend.onrender.com/api/users/id/${id}`)
    .then((result) => result)
    .catch((error) => {
      if (error) {
        return error;
      }
    });
}

export function createNewUser(
  userFirstName,
  userSurname,
  userEmail,
  userPassword
) {
  const newUserObj = {
    firstName: userFirstName,
    surname: userSurname,
    email: userEmail,
    password: userPassword,
  };
  return axios
    .post("https://fakesitebackend.onrender.com/api/users/", newUserObj)
    .then((result) => result)
    .catch((error) => {
      if (error) {
        return error;
      }
    });
}

export function fetchUserByEmail(email) {
  return axios
    .get(`https://fakesitebackend.onrender.com/api/users/email/${email}`)
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
    .then((result) => {
      if (result.data.basket.length === 0) {
        return 0;
      } else return result;
    })

    .catch((error) => {
      if (error) {
        return error;
      }
    });
}

export function addToCart(product_id, user_id, quantity = 1) {
  const productObj = { product_id: product_id, quantity: quantity };
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

export function updateCart(product_id, user_id, quantity) {
  const updateObj = { product_id: product_id, quantity: quantity };
  return axios
    .patch(
      `https://fakesitebackend.onrender.com/api/users/${user_id}/basket`,
      updateObj
    )
    .then((result) => result)
    .catch((error) => {
      return error;
    });
}

export function deleteFromBasket(product_id, user_id) {
  const deleteObj = { product_id: product_id };
  return axios
    .delete(
      `https://fakesitebackend.onrender.com/api/users/${user_id}/basket`,
      { data: deleteObj }
    )
    .then((result) => 0)
    .catch((error) => {
      return error;
    });
}
