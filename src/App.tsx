import { useState,useEffect } from 'react'
import { useRecoilValue } from 'recoil'
import useToast from './components/common/toast/hooks/useToast'
import Toast from './components/common/toast/ToastItem'
import ToastList from './components/common/toast/ToastList'
import { getRandomId } from './components/common/util/randomId'
import Footer from './components/footer/Footer'

import Router from './routes/router'
import { userState } from './store/user'

function App() {
  const user = useRecoilValue(userState);
  
  useEffect(() => {
    console.log(user);
  },[])
  return (
    <div className="App">
      <ToastList />
      <Router />
      
    </div>
  )
}

export default App
