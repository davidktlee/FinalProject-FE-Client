import React from 'react';
import reactDOM from 'react-dom'
interface PortalProps {
  children:React.ReactNode;
}

const Portal = ({children}:PortalProps) => {
  const modal = document.getElementById('modal') as HTMLElement;
  
  return reactDOM.createPortal(children, modal)
};

export default Portal;