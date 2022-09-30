import React from 'react';
import Button from '../Button';
import Dialog from './Dialog';

interface ConfirmModalProps {
  title:string;
  
  isModalOpen:boolean;
  children:React.ReactNode
  onClose:Function
  onConfirm:Function
}

const ConfirmModal = ({isModalOpen,title,onClose,onConfirm,children}:ConfirmModalProps) => {

  if( !isModalOpen) return <></>

  return (
    
    <Dialog isModalOpen={isModalOpen} onClose={onClose}>
      <h2 className="text-lg text-white py-1 pl-2">{title}</h2>
      <div className='bg-white w-full h-[200px] flex items-center flex-col justify-center'>
      <div className="py-5 text-center">{children}</div>
      <div className="flex justify-center gap-2">
        <div className="p-1">
          <Button onClick={() => onClose()}>
          아니요
          </Button>
        </div>
        <div className="p-1">
          <Button onClick={() => {onClose(),onConfirm()}}>
            네
          </Button>
        </div>
      </div>
      </div>
    </Dialog>
    
  );
};

export default ConfirmModal;