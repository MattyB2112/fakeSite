import { Link } from "react-router-dom";
import "./Carousel.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { fetchAllProducts } from "./APICalls";
import right from "./assets/right.png";
import left from "./assets/left.png";
import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  let imagesArray = [];

  useEffect(() => {
    fetchAllProducts()
      .then((result) => {
        console.log(result.data.products);
        setProducts(result.data.products);
        setIsLoading(false);
      })
      .catch((err) => {
        setError({ err });
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div className="loading-message">LOADING API....</div>;
  } else
    return (
      <div className="carousel-group">
        {products.map((product, index) => {
          imagesArray = [];
          imagesArray.push(
            product.productimage1,
            product.productimage2,
            product.productimage3,
            product.productimage4
          );
          console.log(imagesArray, "<--THE ARRAY");
          return (
            <div className="carousel-container">
              <div className="home-product-info">£{product.productprice}</div>
              <div className="home-product-info">{product.productname}</div>
              <Carousel
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
                {imagesArray.map((image) => (
                  <Link to={`/${product.product_id}`} className="link-test">
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
    );
}
