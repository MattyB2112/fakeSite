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
    <body className="landing-page-body">
      <div className="landing-page-container">
        <div className="categories-container">
          <div className="categories-container-top">
            <Link to="/products">
              <div className="landing-page-category">Shop all</div>
            </Link>
            <Link to="/products/mens">
              <div className="landing-page-category">Mens</div>
            </Link>
          </div>
          <div className="categories-container-bottom">
            <Link to="/products/womens">
              <div className="landing-page-category">Womens</div>
            </Link>
            <Link to="/products/kids">
              <div className="landing-page-category">Kids</div>
            </Link>
          </div>
        </div>
      </div>
    </body>
  );
}
