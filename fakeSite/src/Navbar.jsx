import { slide as Menu } from "react-burger-menu";
import "./burgerMenu.css";

export default function Navbar() {
  return (
    <Menu width={250} className="burger-menu">
      <a id="home" className="menu-item" href="/">
        New In
      </a>
      <a id="about" className="menu-item" href="/">
        Mens
      </a>
      <a id="contribute" className="menu-item" href="/">
        Womens
      </a>
      <a id="download" className="menu-item" href="/">
        Kids
      </a>
    </Menu>
  );
}
