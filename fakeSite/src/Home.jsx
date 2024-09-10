import { Link } from "react-router-dom";
import "./home.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { fetchAllProducts } from "./APICalls";
import right from "./assets/right.png";
import left from "./assets/left.png";
import { useEffect, useState, useContext } from "react";
import { useSearchParams } from "react-router-dom";
import sortByFunction from "./sortBy";
import filterFunction from "./filter";
import { UserContext } from "./UserContext";
import LoadingAnimation from "./LoadingAnimation";

export default function Home() {
  const { signedInUser, setSignedInUser } = useContext(UserContext);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const sortByQuery = searchParams.get("sort_by") || "dateadded";
  const orderByQuery = searchParams.get("order_by") || "ASC";
  const sizeQuery = searchParams.get("size") || "all";
  let imagesArray = [];
  let sizesArray = [5, 6, 7, 8, 9, 10, 11, 12];

  function handleQueryChange(sort_by, order_by) {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("sort_by", sort_by);
    newParams.set("order_by", order_by);
    setSearchParams(newParams);
  }

  const currentUrl = window.location.href;

  useEffect(() => {
    fetchAllProducts(sortByQuery, orderByQuery, sizeQuery)
      .then((result) => {
        setProducts(result.data.products);
        setIsLoading(false);
      })
      .catch((err) => {
        setError({ err });
        setIsLoading(false);
      });
  }, [searchParams]);

  function handleSizeFilter(size) {
    const filterParams = new URLSearchParams(searchParams);
    filterParams.set("size", size);
    setSearchParams(filterParams);
  }

  if (isLoading) {
    return <LoadingAnimation />;
  } else
    return (
      <>
        <div className="sort-by-dropdown">
          <button onClick={sortByFunction} className="sort-by-dropbtn">
            Sort By
          </button>
          <div id="sortby-dropdown" className="sort-by-dropdown-content">
            <a
              href={`${currentUrl}`}
              onClick={() => handleQueryChange("productname", "ASC")}
            >
              Alphabetical
            </a>
            <a
              href={`${currentUrl}`}
              onClick={() => handleQueryChange("productprice", "ASC")}
            >
              Price {"(low to high)"}
            </a>
            <a
              href={`${currentUrl}`}
              onClick={() => handleQueryChange("productprice", "DESC")}
            >
              Price {"(high to low)"}
            </a>
          </div>
        </div>
        <div className="filter-button-dropdown">
          <button onClick={filterFunction} className="filter-dropbtn">
            Filter
          </button>
          <div id="filter-dropdown" className="filter-dropdown-content">
            <div>Size</div>
            {sizesArray.map((size) => {
              return (
                <button
                  className="filter-size-button"
                  onClick={() => {
                    handleSizeFilter(size);
                  }}
                >
                  {size}
                </button>
              );
            })}
            <div>Colour</div>
          </div>
        </div>
        <div className="carousel-group">
          {products.map((product) => {
            imagesArray = [];
            imagesArray.push(
              product.productimage1,
              product.productimage2,
              product.productimage3,
              product.productimage4
            );

            return (
              <div className="carousel-container" key={product.product_id}>
                <div className="home-product-info">£{product.productprice}</div>
                <div className="home-product-info">
                  {product.productcategory}
                </div>
                <a href={`/${product.product_id}`}>
                  <div className="home-product-info-title">
                    {product.productname}
                  </div>
                </a>
                <Carousel
                  className="home-page-carousel"
                  preventMovementUntilSwipeScrollTolerance={true}
                  swipeScrollTolerance={50}
                  showIndicators={false}
                  showThumbs={false}
                  infiniteLoop={true}
                  renderArrowNext={(clickHandler, hasNext) => {
                    return (
                      hasNext && (
                        <button
                          className="nav_btn nav_btn_right"
                          onClick={clickHandler}
                        >
                          <img src={right} />
                        </button>
                      )
                    );
                  }}
                  renderArrowPrev={(clickHandler, hasNext) => {
                    return (
                      hasNext && (
                        <button
                          onClick={clickHandler}
                          className="nav_btn nav_btn_left"
                        >
                          <img src={left} />
                        </button>
                      )
                    );
                  }}
                  renderIndicator={(clickHandler, isSelected, index) => {
                    return (
                      <li
                        onClick={clickHandler}
                        className={`ind ${isSelected ? "active" : ""}`}
                        key={index}
                        role="button"
                      />
                    );
                  }}
                  statusFormatter={(currentItem, total) => {
                    return <></>;
                  }}
                >
                  {imagesArray.map((image, index) => (
                    <Link
                      to={`/products/${product.product_id}`}
                      className="link-test"
                    >
                      <img
                        alt={`${product.productname}`}
                        src={image}
                        key={product.product_id}
                        className="carousel-image"
                      />
                    </Link>
                  ))}
                </Carousel>
              </div>
            );
          })}
        </div>
      </>
    );
}
