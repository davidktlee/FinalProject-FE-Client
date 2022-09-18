import React from 'react';
import {useRecoilValue} from 'recoil'
import { toastState } from '../../../store/toast';
import ToastItem from './ToastItem';

const ToastList = () => {
  const toasts = useRecoilValue(toastState)
  return (
    <div className="bottom-0 left-0 fixed z-[9999]">
      { toasts.map((toast) => <ToastItem key={toast.id} {...toast} />)}
      
    </div>
  );
};

export default ToastList;