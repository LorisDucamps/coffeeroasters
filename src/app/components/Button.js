const Button = ({ children, onClick, className, disabled }) => {
  const baseClasses =
    'font-fraunces text-[18px] leading-[25px] text-white w-full h-[56px] max-w-[217px] bg-dark-cyan rounded-md cursor-pointer hover:bg-light-cyan';
  const disabledClasses = 'bg-disabled';

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${disabled && disabledClasses} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
