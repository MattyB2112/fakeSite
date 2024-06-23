import axios from "axios";

export function fetchProductById(id) {
  return axios
    .get(`https://fakesitebackend.onrender.com/api/products${id}`)
    .then((result) => result)
    .catch((error) => {
      if (error) {
        return error;
      }
    });
}

export function fetchUserById(id) {
  return axios
    .get(`https://fakesitebackend.onrender.com/api//users/${id}`)
    .then((result) => result)
    .catch((error) => {
      if (error) {
        return error;
      }
    });
}
