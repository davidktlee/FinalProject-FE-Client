import { useState,useEffect } from 'react'
import useToast from './components/common/toast/hooks/useToast'
import Toast from './components/common/toast/ToastItem'
import ToastList from './components/common/toast/ToastList'
import { getRandomId } from './components/common/util/randomId'
import Footer from './components/footer/Footer'

import Router from './routes/router'

function App() {
  const {fireToast} = useToast()
  useEffect(() => {
    fireToast({
      id:getRandomId(),
      message:'여러분 고생 많으십니다 토스트 하나 먹고가시죠!',
      position:'bottom',
      timer: 5000,
      type:'complete'
    })
  },[])
  return (
    <div className="App">
      <ToastList />
      <Router />
      
    </div>
  )
}

export default App
