const Button = ({ text, color, bgColor, borderRadius, size }) => {
  return (
    <button
      style={{ borderRadius, backgroundColor: bgColor, color }}
      className={`text-${size} p-3 hover:drop-shadow-xl`}
      type="button"
    >
      {text}
    </button>
  );
};

export default Button;
