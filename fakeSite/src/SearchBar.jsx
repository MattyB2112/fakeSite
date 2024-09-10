import { Link } from "react-router-dom";
import { fetchProductById, fetchAllProducts } from "./APICalls";
import "./SearchBar.css";
import { useState, useEffect } from "react";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [matchingProducts, setMatchingProducts] = useState([]);
  let tempProducts = [];
  const onSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    fetchAllProducts().then((result) => {
      let searchTermArray = searchTerm.split("");
      let searchTermArrayCopy = [...searchTermArray];

      searchTermArrayCopy[0] = searchTermArray[0]?.toUpperCase();
      for (let i = 0; i < result.data.products.length; i++) {
        if (
          result.data.products[i].productname.startsWith(
            searchTermArrayCopy.join("")
          ) ||
          result.data.products[i].productname.startsWith(searchTermArray.join())
        ) {
          tempProducts.push(result.data.products[i]);
        }
        setMatchingProducts(tempProducts);
      }
    });
  }, [searchTerm]);
  return (
    <>
      <div
        className="search-container"
        style={{ backgroundImage: "URL('./src/assets/triangles_pattern.png')" }}
      >
        <div className="searchbar">
          <input
            type="text"
            placeholder="Search for a product..."
            className="search-input"
            onChange={onSearchChange}
          />
        </div>
        <div
          className={
            searchTerm === ""
              ? "search-results-box-inactive"
              : "search-results-box-active"
          }
        >
          {matchingProducts.map((product) => {
            return (
              <div className="search-bar-product">
                <Link to={`/products/${product.product_id}`}>
                  <img
                    src={product.productimage1}
                    className="search-bar-image"
                  />
                </Link>
                <div className="search-bar-product-title">
                  {product.productname}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
