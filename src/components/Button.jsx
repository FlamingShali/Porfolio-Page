const Button = ({ btnFunction, children }) => {
  return (
    <button
      onClick={btnFunction}
      className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
    >
      {children}
    </button>
  );
};

export default Button;
