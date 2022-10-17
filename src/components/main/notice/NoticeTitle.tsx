import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import MainNoticeTab from './tabs/MainNoticeTab'
import NoticePageTab from './tabs/NoticePageTab'

function NoticeTitle() {
  const location = useLocation()

  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const changeWindowWidth = () => {
    setWindowWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', changeWindowWidth)
  }, [])

  return (
    <>
      {location.pathname.includes('notice') ? (
        <>
          <NoticePageTab />
        </>
      ) : (
        <>
          <MainNoticeTab />
        </>
      )}
    </>
  )
}
export default NoticeTitle
