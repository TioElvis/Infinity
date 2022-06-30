function Label({ children, type, id, className, onChange, text, accept }) {
  return (
    <label htmlFor={id} className={className}>
      <input
        type={type}
        id={id}
        onChange={onChange}
        className="hidden"
        accept={accept}
      />
      {children}
      {text}
    </label>
  );
}

export default Label;
