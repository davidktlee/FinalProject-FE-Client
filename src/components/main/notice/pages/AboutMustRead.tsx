import React from 'react'
import { useNavigate } from 'react-router'
import MobileNotice from '../utils/MobileNotice'
import WebNotice from '../utils/WebNotice'
// 필독에 대한 내용 데이터
function MustRead() {
  const navigate = useNavigate()
  const id = 1
  return (
    <>
      <WebNotice />
      <MobileNotice />
    </>
  )
}

export default MustRead
