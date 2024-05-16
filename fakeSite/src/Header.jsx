import burger from "../src/assets/burger.png";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <>
      <div className="header-container">
        <Navbar />

        <div className="logo">LOGO</div>
        <div className="search">SEARCH </div>
      </div>
    </>
  );
}
