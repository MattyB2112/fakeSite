import Carousel from "./Carousel";
import shoe1one from "./assets/shoe1first.png";
import shoe1two from "./assets/shoe1second.png";
import shoe1three from "./assets/shoe1third.png";
import shoe1four from "./assets/shoe1fourth.png";
import shoe2one from "./assets/shoe2first.jpeg";
import shoe2two from "./assets/shoe2second.png";
import shoe2three from "./assets/shoe2third.jpeg";
import shoe2four from "./assets/shoe2fourth.jpeg";
const images1 = [shoe1one, shoe1two, shoe1three, shoe1four];
const images2 = [shoe2one, shoe2two, shoe2three, shoe2four];

export default function Home() {
  return (
    <>
      <div className="all-home-boxes">
        <div className="top-boxes">
          <div className="home-box">
            <Carousel images={images1} />
          </div>
          <div className="home-box">
            <Carousel images={images2} />
          </div>
          <div className="home-box">
            <Carousel images={images1} />
          </div>
        </div>
        <div className="mid-boxes">
          <div className="home-box">
            <Carousel images={images1} />
          </div>
          <div className="home-box">
            <Carousel images={images1} />
          </div>
          <div className="home-box">
            <Carousel images={images1} />
          </div>
        </div>
        {/* <div className="bottom-boxes">
          <div className="home-box">9</div>
          <div className="home-box">10</div>
          <div className="home-box">11</div>
          <div className="home-box">12</div>
        </div> */}
      </div>
    </>
  );
}
