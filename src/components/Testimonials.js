// import './App.css';

import timg from "../images/timg.png"
import Tcard from "./Tcard";

function Testimonials() {

  const cards = [
    {
      head: "The Best!",
      imgSrc: timg,
      name: "Mario",
      desc: "Great Food!",
    },
    {
      head: "The Best!",
      imgSrc: timg,
      name: "Jose",
      desc: "Great Food!",
    },
    {
      head: "The Best!",
      imgSrc: timg,
      name: "Maria",
      desc: "Great Food!",
    },
    {
      head: "The Best!",
      imgSrc: timg,
      name: "Jorge",
      desc: "Great Food!",
    },
  ]

  return (
    <section className="testimonials">
      <div className="cont">
        <h2 className="sub-title">Testimonials</h2>
        <div className="tcards">
          {
            cards.map(card => 
              <Tcard card={card} key={card.name} />
            )
          }
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
