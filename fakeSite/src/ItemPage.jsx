import { useParams } from "react-router-dom";
import { fetchProductById, addToCart, getCart } from "./APICalls";
import { useEffect, useState, useContext } from "react";
import "./itemPage.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import right from "./assets/right.png";
import left from "./assets/left.png";
import { UserContext } from "./UserContext";

export default function ItemPage({ basket, onBasketUpdate }) {
  const [basketSize, setBasketSize] = useState(basket.length);
  const [basketChanged, setBasketChanged] = useState(false);
  const { signedInUser } = useContext(UserContext);
  const { product_id } = useParams();
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProductById(product_id)
      .then((result) => {
        setProduct(result.data.product[0]);

        let imagesArray = [];
        imagesArray.push(
          result.data.product[0].productimage1,
          result.data.product[0].productimage2,
          result.data.product[0].productimage3,
          result.data.product[0].productimage4
        );
        setImages(imagesArray);
        setIsLoading(false);
      })
      .catch((err) => {
        setError({ err });
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    getCart(signedInUser.user_id)
      .then((result) => {
        setBasket(result.data.basket);
        let sizeofbasket = 0;
        for (let i = 0; i < result.data.basket.length; i++) {
          if (result.data.basket[i].product_id !== null) {
            sizeofbasket++;
          }
        }
        setBasketSize(sizeofbasket);
        setBasketChanged(false);
        setIsLoading(false);
      })
      .catch((err) => {
        setError({ err });
        setIsLoading(false);
      });
  }, [basketChanged]);

  function multiFunc(product_id, user_id) {
    setBasketChanged(true);
    onBasketUpdate();
    addToCart(product_id, user_id);
  }

  if (isLoading) {
    return <div className="loading-message">LOADING API....</div>;
  } else
    return (
      <>
        <div className="product-container">
          <Carousel
            preventMovementUntilSwipeScrollTolerance={true}
            swipeScrollTolerance={50}
            className="item-page-carousel"
            showIndicators={false}
            infiniteLoop={true}
            thumbWidth={75}
            selectedItem={0}
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
            {images.map((image, index) => (
              <div>
                <img
                  alt="sample_file"
                  src={image}
                  key={index}
                  className="item-page-image"
                />
              </div>
            ))}
          </Carousel>
          <div className="product-info-container">
            <div className="product-info">{product.productname}</div>
            <div className="product-info">${product.productprice}</div>
            <div className="product-info">{product.about}</div>
            <br />
            <div className="product-info">
              <button
                className="add-to-basket-button"
                onClick={() => {
                  multiFunc(product.product_id, signedInUser.user_id);
                }}
              >
                ADD TO BASKET
              </button>
            </div>
          </div>
        </div>
      </>
    );
}
