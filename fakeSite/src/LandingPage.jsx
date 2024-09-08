import "./landingPage.css";
import landingPageImage1 from "../src/assets/landingpage1.jpg";
import landingPageImage2 from "../src/assets/landingpage2.jpg";
import landingPageImage3 from "../src/assets/landingpage3.jpg";
import landingPageImage4 from "../src/assets/landingpage4.jpg";
import landingPageImageText from "../src/assets/landingpage1ex.jpg";
import landingPageImageText3 from "../src/assets/landingpage3text.jpg";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div
      className="landing-page-container"
      style={{ backgroundImage: "url(" + landingPageImage3 + ")" }}
    >
      <div className="categories-container">
        <Link to="/products/all">
          <div className="top-left">SHOP ALL</div>
        </Link>
        <Link to="/products/mens">
          <div className="top-right">MENS</div>
        </Link>
        <Link to="/products/womens">
          <div className="mid-left">WOMENS</div>
        </Link>
        <Link to="/products/kids">
          <div className="mid-right">KIDS</div>
        </Link>
      </div>
    </div>
  );
}
