// import './App.css';

function Button({children}) {
  return (
    <button className="button lead-text">
      {children}
    </button>
  );
}

export default Button;