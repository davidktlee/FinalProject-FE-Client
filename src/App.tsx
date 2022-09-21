import { useState,useEffect } from 'react'

import { useUser } from './components/auth/hooks/useUser'
import useToast from './components/common/toast/hooks/useToast'
import Toast from './components/common/toast/ToastItem'
import ToastList from './components/common/toast/ToastList'
import { currentDate } from './components/common/util/date'
import { getRandomId } from './components/common/util/randomId'
import Footer from './components/footer/Footer'
import { getStoredToken,clearStoredToken } from './components/local-storage/userStorage'

import Router from './routes/router'

function App() {
  
  useEffect(() => {
    const token = getStoredToken()
    if(!token) return
    const {refreshToken,accessToken,accessTokenValidTime,refreshTokenValidTime,expiresIn} = token
    if(refreshTokenValidTime + expiresIn < currentDate){
      console.log('토큰 만료!!!!!!!!!!!!!!!토큰만료!!!!!!!!!!!!!!!! 로컬스토리지 확인!!!!!!!!!!!!!!')
      // clearStoredToken()
    }else{
      
    }
    
  },[])
  
  return (
    <div className="App">
      <ToastList />
      <Router />
      
    </div>
  )
}

export default App
