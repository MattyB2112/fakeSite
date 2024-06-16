import axios from "axios";

export function fetchProductById(id) {
  return axios
    .get(`https://fakesitebackend.onrender.com/api/${id}`)
    .then((result) => result)
    .catch((error) => {
      if (error) {
        return error;
      }
    });
}
