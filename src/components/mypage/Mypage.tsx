import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useRefreshToken } from '../auth/hooks/useRefreshToken'



import { useUser } from '../auth/hooks/useUser'
import useToast from '../common/toast/hooks/useToast'
import CardTemplate from '../common/ui/CardTemplate'
import PageLayout from '../common/ui/PageLayout'

import { getStoredToken } from '../local-storage/userStorage'
import MobileNavBar from './MobileNavBar'
import MypageBanner from './MypageBanner'
import SideNavBar from './SideNavBar'

const Mypage = () => {
  
  const {user} = useUser()
  const refreshToken = useRefreshToken() 

  useEffect(() => {
    const token = getStoredToken()
    refreshToken(token)
    
  },[])

 
  if(!user) {
    return <div>Loading...</div>
  }

  return (
    <PageLayout layoutWidth="[90%]" innerTop="top-[30%]">
      <CardTemplate title="마이페이지" isTitleVisible={true}>
        <div className="w-full xs:w-[90%] mx-auto">
          <MypageBanner user={user} />
          <div className="flex flex-col xs:flex-row mt-8">
            <div className='hidden xs:block'>
            <SideNavBar />
            </div>
            <div className='block xs:hidden'>
            <MobileNavBar />
            </div>
            <div className="grow">
              <Outlet />
            </div>
          </div>
        </div>
      </CardTemplate>
    </PageLayout>
  )
}

export default Mypage
