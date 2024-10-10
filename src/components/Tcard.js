// import './App.css';

// {
//   head: "The Best!",
//   imgSrc: timg,
//   name: "Mario",
//   desc: "Great Food!",
// },

function Tcard({card}) {
  return (
    <div className="tcard">
      <h3 className="card-title">{card.head}</h3>
      <div className="person">
        <img src={card.imgSrc} alt="img" />
        <p className="highlight-text">{card.name}</p>
      </div>
      <p className="highlight-text">{card.desc}</p>
    </div>
  );
}

export default Tcard;
