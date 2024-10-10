// import './App.css';

import imgAbout from "../images/about.png"


function About() {
  const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint . onsectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"

  return (
    <section className="about">
      <div className="cont">
        <div className="left">
          <div className="head">
            <h1 className="title">Little Lemon</h1>
            <h2 className="sub-title">Chicago</h2>
          </div>
          <p className="lead-text">{description}</p>
        </div>
        <img src={imgAbout} alt="about" />
      </div>
    </section>
  );
}

export default About;
