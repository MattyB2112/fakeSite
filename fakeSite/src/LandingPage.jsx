import "./landingPage.css";

import landingPageImage3 from "../src/assets/landingpage3.jpg";

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
