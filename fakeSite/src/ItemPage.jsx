import { Navigate, useParams } from "react-router-dom";
import { fetchProductById, addToCart, getCart } from "./APICalls";
import { useEffect, useState, useContext } from "react";
import "./itemPage.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import right from "./assets/right.png";
import left from "./assets/left.png";
import { UserContext } from "./UserContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ItemPage({ handleBasketUpdate }) {
  const { signedInUser } = useContext(UserContext);
  const { product_id } = useParams();
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [images, setImages] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [error, setError] = useState(null);
  const [isSelected, setIsSelected] = useState("");

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
        let sizesArray = [];

        Object.keys(result.data.product[0]).map((key) => {
          if (key.includes("size")) {
            let obj = {};
            obj[key.substring(4)] = result.data.product[0][key];

            sizesArray.push(obj);
          }
        });

        setImages(imagesArray);
        setSizes(sizesArray);
        setIsLoading(false);
      })
      .catch((err) => {
        setError({ err });
        setIsLoading(false);
      });
  }, []);

  const showToastMessage = () => {
    toast.success("Added to basket!");
  };

  function multiFunc(product_id, user_id, size) {
    addToCart(product_id, user_id, 1, size).then(() => {
      handleBasketUpdate();
      showToastMessage();
    });
  }

  function handleSizeSelect(productSize) {
    if (isSelected === productSize) {
      setIsSelected("");
    } else setIsSelected(productSize);
  }

  if (isLoading) {
    return <div className="item-page-loading-message">LOADING API....</div>;
  } else if (error) {
    return <Navigate to="/error" />;
  } else
    return (
      <>
        <div className="product-container">
          <div className="carousel-and-sizes-container">
            <div className="carousel-item-page-container">
              <Carousel
                preventMovementUntilSwipeScrollTolerance={true}
                swipeScrollTolerance={50}
                className="item-page-carousel"
                showIndicators={false}
                infiniteLoop={true}
                thumbWidth={60}
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
            </div>
            <div className="sizes-container">
              {sizes.map((element) => {
                let available = element[Object.keys(element)];
                return (
                  <button
                    disabled={available === 0 ? true : false}
                    id={element === isSelected ? "selected" : "not selected"}
                    className={
                      available !== 0
                        ? "size-button-in-stock"
                        : "size-button-out-of-stock"
                    }
                    onClick={() => {
                      handleSizeSelect(element);
                    }}
                  >
                    {Object.keys(element)}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="product-info-container">
            <div className="product-info-title">{product.productname}</div>
            <div className="product-info">£{product.productprice}</div>
            <div className="product-info">{product.about}</div>
            <br />
            <div className="product-info">
              <button
                className={
                  isSelected === ""
                    ? "add-to-basket-button-inactive"
                    : "add-to-basket-button-active"
                }
                disabled={isSelected === "" ? true : false}
                onClick={() => {
                  multiFunc(
                    product.product_id,
                    signedInUser,
                    Number(Object.keys(isSelected))
                  );
                }}
              >
                ADD TO BASKET
              </button>
              <ToastContainer
                position="bottom-center"
                autoclose={50}
                hideProgressBar={true}
                theme="colored"
                transition:Bounce
              />
            </div>
          </div>
        </div>
      </>
    );
}
