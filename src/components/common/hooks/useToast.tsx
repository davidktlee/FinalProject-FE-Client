import React from 'react';
import Toast from '../Toast';


interface useToastProps {
  type: 'success' | 'warning' | 'failed' | 'complete'
  message: string
  position: 'bottom' | 'top'
  timer: number
}

const useToast = ({type,message,position,timer}:useToastProps) => {
  return <Toast type={type} message={message} position={position} timer={timer} />
  
};

export default useToast;