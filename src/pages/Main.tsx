import React,{useState} from 'react'
import Toast from '../components/common/Toast';

const Main = () => {


  return (
    
    <div>
    <Toast type='success' message="성공하셨습니다!!!" position="bottom" timer={1500} />
    <Toast type='failed' message="실패하셨습니다!!!" position="top" timer={1500} />
    
    </div>
  )
}

export default Main
