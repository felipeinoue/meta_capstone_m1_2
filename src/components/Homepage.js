// import './App.css';

import About from "./About";
import Hero from "./Hero";
import Highlights from "./Highlights";
import Testimonials from "./Testimonials";

function Homepage() {
  return (
    <main>
      <Hero />
      <Highlights />
      <Testimonials />
      <About />
    </main>
  );
}

export default Homepage;
