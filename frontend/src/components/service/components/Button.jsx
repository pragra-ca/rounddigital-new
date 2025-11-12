const Button = ({ children, className }) => {
  return (
    <button
      className={`bg-primary text-white w-[160px] h-[56px] p-2 rounded-[8px] hover:bg-[#c72f3b] transition-colors flex items-center justify-center gap-2 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
