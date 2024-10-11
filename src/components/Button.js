// import './App.css';

function Button({children, onClick}) {
  return (
    <button onClick={onClick} className="button lead-text">
      {children}
    </button>
  );
}

export default Button;