const Button = ({ value, className, onClick }) => (
  <button
    className={`flex justify-center items-center px-3 py-3 rounded-md ${className}`}
    onClick={() => onClick(value)}
  >
    {value}
  </button>
);

export default Button;
