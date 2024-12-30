'use client';

import Link from 'next/link';

const Button = ({ children, onClick, className, disabled, href }) => {
  const baseClasses =
    'flex justify-center items-center font-fraunces text-[18px] leading-[25px] text-white w-full h-[56px] max-w-[217px] bg-dark-cyan rounded-md cursor-pointer hover:bg-light-cyan';
  const disabledClasses = 'bg-disabled cursor-not-allowed';

  if (href) {
    return (
      <Link
        href={href}
        className={`${baseClasses} ${disabled ? disabledClasses : ''} ${className}`}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${disabled ? disabledClasses : ''} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
