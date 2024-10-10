// import './App.css';

// {
//   imgSrc: greekSalad,
//   title: "Greek Salad",
//   price: "$10.00",
//   text1: description,
//   text2: "Lorem ipsum dolor sit amet",
// },

function Card({card}) {
  return (
    <div className="card">
      <img src={card.imgSrc} alt="img" />
      <div className="cont">
        <div className="head">
          <h3 className="card-title">{card.title}</h3>
          <p className="highlight-text">{card.price}</p>
        </div>
        <p className="paragraph">{card.text1}</p>
        <p className="highlight-text">{card.text2}</p>
      </div>
    </div>
  );
}

export default Card;
