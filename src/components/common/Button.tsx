import React from 'react'

interface ButtonProps {
  children: React.ReactNode;
  type?:'submit' | 'button' | 'reset';
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  
}

const Button = ({children,type,onClick}:ButtonProps) => {
  return (
    <button
      className={`bg-lenssisDark hover:bg-primary-light text-white font-bold h-10 rounded focus:outline-none focus:shadow-outline min-w-[120px]`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
