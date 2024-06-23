import { useParams } from "react-router-dom";
import { fetchProductById } from "./APICalls";
import { useEffect, useState } from "react";
import "./itemPage.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import right from "./assets/right.png";
import left from "./assets/left.png";
import handleAddToBasket from "./addToBasket";

export default function ItemPage({ cart, setCart }) {
  let { product_id } = useParams();
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchProductById(product_id)
      .then((result) => {
        setProduct(result.data.product[0]);
        const imagesArray = [];
        imagesArray.push(
          result.data.product[0].productimage1,
          result.data.product[0].productimage2,
          result.data.product[0].productimage3,
          result.data.product[0].productimage4
        );
        setImages(imagesArray);
      })
      .catch((err) => {
        setError({ err });
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <div>PAGE LOADING</div>;
  return (
    <>
      <div className="product-container">
        <Carousel
          showIndicators={false}
          infiniteLoop={true}
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
                <button onClick={clickHandler} className="nav_btn nav_btn_left">
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
              <img alt="sample_file" src={image} key={index} />
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
                handleAddToBasket(cart, setCart, product.product_id);
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
