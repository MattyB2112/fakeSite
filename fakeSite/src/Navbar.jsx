import { slide as Menu } from "react-burger-menu";

export default function Navbar() {
  return (
    <Menu width={"300px"} className="burger-menu">
      <a id="home" className="menu-item" href="/">
        Home
      </a>
      <a id="about" className="menu-item" href="/about">
        About
      </a>
      <a id="contribute" className="menu-item" href="/contribute">
        Contribute
      </a>
      <a id="download" className="menu-item" href="/download">
        Download
      </a>
    </Menu>
  );
}
