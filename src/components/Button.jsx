function Button({ btntype, children, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`btn ${btntype === "secondary" && "btn--secondary"}`}
    >
      {children}
    </button>
  );
}

export default Button;
