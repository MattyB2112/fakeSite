import { slide as Menu } from "react-burger-menu";
import "./navbar.css";

export default function Navbar() {
  return (
    <Menu width={250} className="burger-menu">
      <a id="home" className="menu-item" href="/products">
        New In
      </a>
      <a id="about" className="menu-item" href="/products/mens">
        Mens
      </a>
      <a id="contribute" className="menu-item" href="/products/womens">
        Womens
      </a>
      <a id="download" className="menu-item" href="/products/kids">
        Kids
      </a>
      <a id="download" className="menu-item" href="/about">
        About
      </a>
    </Menu>
  );
}
