// import './App.css';

import Button from "./Button";
import hero from "../images/restaurant.png"
import { useNavigate } from "react-router-dom";

function Hero() {
  const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint ."

  const navigate = useNavigate()

  return (
    <section className="hero">
      <div className="cont">
        <div className="info">
          <div className="header">
            <h1 className="title" >Little Lemon</h1>
            <h2 className="sub-title" >Chicago</h2>
          </div>
          <p className="lead-text">{description}</p>
          <Button onClick={ () => navigate("/reservations") }>Reserve a table</Button>
        </div>
        <img src={hero} alt="hero" />
      </div>
    </section>
  );
}

export default Hero;
