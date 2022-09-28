import { useEffect,useState } from 'react'
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom'
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
    <PageLayout layoutWidth="w-[90%]" innerTop="top-[30%]">
      <CardTemplate title="마이페이지" isTitleVisible={true}>
        <div className="w-full xs:w-[90%] mx-auto">
          {pathname === '/mypage' && <MypageBanner user={user} />}
          <div className="flex flex-col xs:flex-row mt-8">
            <div className='hidden xs:block mx-auto'>
            <SideNavBar />
            </div>
            <div className='block xs:hidden'>
            <MobileNavBar selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
            </div>
            <div className={`${pathname === '/mypage' || pathname === '/mypage/' ? 'hidden' : 'grow'}`}>
              <Outlet />
            </div>
          </div>
        </div>
        {pathname === '/mypage' && (
        <div className=' block xs:hidden'>
          <ul className='flex flex-col items-start text-[#7a7a7a] font-semibold text-sm mr-0 xs:mr-4 min-w-[116px] gap-y-4'>
            <li className='w-full pb-2 border-b border-solid border-gray-400'><NavLink className={({isActive}) => (isActive ? 'text-[#1B304A]' : 'text-inherit')} to="myorder">주문 내역</NavLink></li>
            <li className='w-full pb-2 border-b border-solid border-gray-400'><NavLink className={({isActive}) => (isActive ? 'text-[#1B304A]' : 'text-inherit')} to="mytracking">배송 조회</NavLink></li>
            <li className='w-full pb-2 border-b border-solid border-gray-400'><NavLink className={({isActive}) => (isActive ? 'text-[#1B304A]' : 'text-inherit')} to="myafter">취소/교환/반품 내역</NavLink></li>
            <li className='w-full pb-2 border-b border-solid border-gray-400'><NavLink className={({isActive}) => (isActive ? 'text-[#1B304A]' : 'text-inherit')} to="myreview">리뷰관리</NavLink></li>
            <li className='w-full pb-2 border-b border-solid border-gray-400'><NavLink className={({isActive}) => (isActive ? 'text-[#1B304A]' : 'text-inherit')} to="myprofile">회원 정보 수정</NavLink></li>

            
            <li className='w-full text-sm font-normal pl-2 pb-2 border-b border-solid border-gray-400'><NavLink className='text-inherit' to="myprofile/editprofile">프로필 수정</NavLink></li>
            <li className='w-full text-sm font-normal pl-2 pb-2 border-b border-solid border-gray-400'><NavLink className='text-inherit' to="myprofile/editsecret">비밀번호 수정</NavLink></li>
            
            
            <li className='w-full pb-2 border-b border-solid border-gray-400'><NavLink className={({isActive}) => (isActive ? 'text-[#1B304A]' : 'text-inherit')} to="mygrade">회원등급</NavLink></li>
            <li className='w-full pb-2 border-b border-solid border-gray-400'><NavLink className={({isActive}) => (isActive ? 'text-[#1B304A]' : 'text-inherit')} to="mycoupon">쿠폰함</NavLink></li>
      
        </ul>
          </div>
          )}
      </CardTemplate>
    </PageLayout>
  )
}

export default Mypage
