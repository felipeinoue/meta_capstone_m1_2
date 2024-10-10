// import './App.css';

// {
//   title: "Social Media Links",
//   links: "Facebook\nInstagram\nLinkedin"
// },

function Menu({menu}) {
  return (
    <div className="menu">
      <h3 className="sub-title">{menu.title}</h3>
      <p className="lead-text">{menu.links}</p>
    </div>
  );
}

export default Menu;
