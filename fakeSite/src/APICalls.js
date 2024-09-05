import axios from "axios";

export function fetchAllProducts(
  sortByQuery = "dateadded",
  orderByQuery = "ASC",
  size = "all"
) {
  return axios
    .get(
      `https://fakesitebackend.onrender.com/api/products/?sort_by=${sortByQuery}&order_by=${orderByQuery}&size=${size}`
    )
    .then((result) => result)
    .catch((error) => {
      if (error) {
        return error;
      }
    });
}

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
    .get(`https://fakesitebackend.onrender.com/api/users/id/${id}/basket`)
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

export function addToCart(product_id, user_id, quantity = 1, size) {
  const productObj = { product_id: product_id, quantity: quantity, size: size };
  return axios
    .post(
      `https://fakesitebackend.onrender.com/api/users/id/${user_id}/basket`,
      productObj
    )
    .then((result) => result)
    .catch((error) => {
      if (error) {
        return error;
      }
    });
}

export function updateCart(product_id, user_id, quantity, size) {
  const updateObj = { product_id: product_id, quantity: quantity, size: size };
  return axios
    .patch(
      `https://fakesitebackend.onrender.com/api/users/id/${user_id}/basket`,
      updateObj
    )
    .then((result) => result)
    .catch((error) => {
      return error;
    });
}

export function deleteFromBasket(product_id, user_id, size) {
  const deleteObj = { product_id: product_id, size: size };
  return axios
    .delete(
      `https://fakesitebackend.onrender.com/api/users/id/${user_id}/basket`,
      { data: deleteObj }
    )
    .then((result) => 0)
    .catch((error) => {
      return error;
    });
}
