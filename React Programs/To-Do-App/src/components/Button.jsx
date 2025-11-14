import "./Button.css";

function Button({ label, onClick, className = "", type = "button" }) {
  return (
    <button
      type={type}               // default button type to prevent accidental form submit
      className={`button ${className}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default Button;
