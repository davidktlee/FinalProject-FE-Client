import React from 'react'

interface ButtonProps {
  children: React.ReactNode;
  type?:'submit' | 'button' | 'reset';
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  bgColor:'dark' | 'white'
}

const Button = ({children,type,onClick,bgColor}:ButtonProps) => {
  return (
    <button
      className={`${bgColor === 'dark' ? 'bg-lenssisDark text-white ' : 'bg-white text-lenssisDark '} border border-solid border-lenssisDark hover:bg-primary-light font-semibold h-10 rounded focus:outline-none focus:shadow-outline min-w-[120px]`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
