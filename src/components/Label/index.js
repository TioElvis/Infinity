import "./index.css";

function Label({ children, type, id, className, onChange, text }) {
  return (
    <label htmlFor={id} className={className}>
      <input
        type={type}
        id={id}
        onChange={onChange}
        style={{ display: "none" }}
      />
      {children}
      {text}
    </label>
  );
}

export default Label;
