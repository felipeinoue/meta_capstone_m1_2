// import './App.css';

import Nav from "./Nav";
import logo from "../images/Logo.svg"

function Header() {
  return (
    <header>
      <div>
        <img src={logo} alt="logo" />
        <Nav />
      </div>
    </header>
  );
}

export default Header;
