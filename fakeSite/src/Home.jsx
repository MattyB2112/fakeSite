import { Link } from "react-router-dom";
import "./Carousel.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import right from "./assets/right.png";
import left from "./assets/left.png";
import sprite from "./assets/sprite.svg";
import shoe1one from "./assets/shoe1first.png";
import shoe1two from "./assets/shoe1second.png";
import shoe1three from "./assets/shoe1third.png";
import shoe1four from "./assets/shoe1fourth.png";
import shoe2one from "./assets/shoe2first.jpeg";
import shoe2two from "./assets/shoe2second.png";
import shoe2three from "./assets/shoe2third.jpeg";
import shoe2four from "./assets/shoe2fourth.jpeg";
import shoe3one from "./assets/shoe3first.png";
import shoe3two from "./assets/shoe3second.png";
import shoe3three from "./assets/shoe3third.png";
import shoe3four from "./assets/shoe3fourth.png";
const images1 = [
  { img: shoe1one, link: "/1" },
  { img: shoe2two, link: "/1" },
  { img: shoe2three, link: "/1" },
  { img: shoe2four, link: "/1" },
];
const images2 = [
  { img: shoe2one, link: "/1" },
  { img: shoe1two, link: "/1" },
  { img: shoe1three, link: "/1" },
  { img: shoe1four, link: "/1" },
];
const images3 = [
  { img: shoe3one, link: "/1" },
  { img: shoe3two, link: "/1" },
  { img: shoe3three, link: "/1" },
  { img: shoe3four, link: "/1" },
];

const handleClick = () => {
  console.log("Hello there!");
};

export default function Home({ basketSize, setBasketSize }) {
  return (
    <div className="carousel-container">
      <Carousel
        showIndicators={false}
        infiniteLoop={true}
        renderArrowNext={(clickHandler, hasNext) => {
          return (
            hasNext && (
              <button className="nav_btn nav_btn_right" onClick={clickHandler}>
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
        {images1.map((image, index) => (
          <Link to="/1" className="link-test">
            <img alt="sample_file" src={image.img} key={index} />
          </Link>
        ))}
      </Carousel>
      <Carousel
        showIndicators={false}
        infiniteLoop={true}
        renderArrowNext={(clickHandler, hasNext) => {
          return (
            hasNext && (
              <button className="nav_btn nav_btn_right" onClick={clickHandler}>
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
        {images2.map((image, index) => (
          <Link to="/2" className="link-test">
            <img alt="sample_file" src={image.img} key={index} />
          </Link>
        ))}
      </Carousel>
      <Carousel
        showIndicators={false}
        infiniteLoop={true}
        onClickItem={() => handleClick}
        renderArrowNext={(clickHandler, hasNext) => {
          return (
            hasNext && (
              <button className="nav_btn nav_btn_right" onClick={clickHandler}>
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
        {images3.map((image, index) => (
          <Link to="/3" className="link-test">
            <img alt="sample_file" src={image.img} key={index} />
          </Link>
        ))}
      </Carousel>
      <Carousel
        showIndicators={false}
        infiniteLoop={true}
        onClickItem={() => handleClick}
        renderArrowNext={(clickHandler, hasNext) => {
          return (
            hasNext && (
              <button className="nav_btn nav_btn_right" onClick={clickHandler}>
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
        {images3.map((image, index) => (
          <Link to="/3" className="link-test">
            <img alt="sample_file" src={image.img} key={index} />
          </Link>
        ))}
      </Carousel>
    </div>
  );
}
