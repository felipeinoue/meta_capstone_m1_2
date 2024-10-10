// import './App.css';

import Button from "./Button";
import greekSalad from "../images/greek_salad.png"
import bruncheta from "../images/bruncheta.png"
import lemonPie from "../images/lemon-pie.png"
import Card from "./Card";

function Highlights() {
  const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint ."

  const cards = [
    {
      imgSrc: greekSalad,
      title: "Greek Salad",
      price: "$10.00",
      text1: description,
      text2: "Lorem ipsum dolor sit amet",
    },
    {
      imgSrc: bruncheta,
      title: "Bruncheta",
      price: "$10.00",
      text1: description,
      text2: "Lorem ipsum dolor sit amet",
    },
    {
      imgSrc: lemonPie,
      title: "Lemon Pie",
      price: "$10.00",
      text1: description,
      text2: "Lorem ipsum dolor sit amet",
    },
  ]

  return (
    <section className="highlights">
      <div className="cont">
        <div className="head">
          <h2 className="title">Specials</h2>
          <Button>Order Online</Button>
        </div>
        <div className="cards">
          {
            cards.map(card => 
              <Card card={card} key={card.title} />
            )
          }
        </div>
      </div>
    </section>
  );
}

export default Highlights;
