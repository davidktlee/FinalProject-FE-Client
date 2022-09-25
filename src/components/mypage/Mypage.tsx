import { useEffect,useState } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { useRefreshToken } from '../auth/hooks/useRefreshToken'
import { useUser } from '../auth/hooks/useUser'

import CardTemplate from '../common/ui/CardTemplate'
import PageLayout from '../common/ui/PageLayout'

import { getStoredToken } from '../local-storage/userStorage'
import MobileNavBar from './MobileNavBar'
import MypageBanner from './MypageBanner'
import SideNavBar from './SideNavBar'

const Mypage = () => {
  const [selectedOption,setSelectedOption] = useState<string | null>(null);
  const {user} = useUser()
  const refreshToken = useRefreshToken() 
  const {pathname} = useLocation()
  
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
            <MobileNavBar selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
            </div>
            <div className="grow">
              <Outlet />
            </div>
          </div>
        </div>
        {pathname === '/mypage' && <div className='py-10 block xs:hidden'>찾으시는 메뉴를 선택해주세요</div>}
      </CardTemplate>
    </PageLayout>
  )
}

export default Mypage
