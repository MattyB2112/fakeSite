import { slide as Menu } from "react-burger-menu";
import "./burgerMenu.css";

export default function Navbar() {
  return (
    <Menu width={"270px"} className="burger-menu">
      <a id="home" className="menu-item" href="/">
        New In
      </a>
      <a id="about" className="menu-item" href="/about">
        Mens
      </a>
      <a id="contribute" className="menu-item" href="/contribute">
        Womens
      </a>
      <a id="download" className="menu-item" href="/download">
        Kids
      </a>
    </Menu>
  );
}
