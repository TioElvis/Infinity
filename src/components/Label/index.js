function Label({ children, type, id, className, onChange, text, accept }) {
  return (
    <label htmlFor={id} className={className}>
      <input
        type={type}
        id={id}
        onChange={onChange}
        style={{ display: "none" }}
        accept={accept}
      />
      {children}
      {text}
    </label>
  );
}

export default Label;
