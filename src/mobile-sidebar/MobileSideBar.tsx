import {useCallback,useEffect} from 'react';
import {BsX} from 'react-icons/bs'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { useUser } from '../components/auth/hooks/useUser';
import { sideBarState } from '../store/sideBarToggle';
const MobileSideBar = () => {
  const {user} = useUser()
  const [isShow,setIsShow] = useRecoilState(sideBarState)
  const navigate = useNavigate();
  const {pathname} = useLocation()
  const sideBarToggleHandler = useCallback(() => {
    setIsShow(false)
  },[])
  const pageChangeHandler = useCallback(() => {
    setIsShow(false);
    
  },[])
  const scrollHandler = useCallback((x:number) => {
    navigate("/");
    setTimeout(() => {window.scrollTo(0,x)},0)
    setIsShow(false);
  },[])

  const signoutHandler = useCallback(() => {
    setIsShow(false);
  },[])

  useEffect(() => {
    window.scrollTo(0,0)
  },[pathname])
  return (
    <div className='z-[9999] text-black fixed bg-white w-full h-screen top-0'>
      <div className='bg-lenssisSky h-fit pt-4 pb-2 text-white'>
      <div className='flex items-center justify-between pl-2'>
        {user
        ? <button className='border-2 border-solid border-white rounded-md py-1 font-semibold' onClick={signoutHandler}>ログアウト</button>
        : <button className='border-2 border-solid border-white rounded-md py-1 font-semibold'><Link to="signin">ログイン</Link></button>
        }
        <button onClick={sideBarToggleHandler}><BsX size={48} color="#ffffff" /></button>
      </div>
      <div className='mt-8 pl-2 h-[66px] flex flex-col items-start justify-end'>
      {!user && <Link onClick={pageChangeHandler} to="">非会員 注文照会 {'>'}</Link>}
      <p className='mt-[10px]'><span className='font-bold text-2xl'>{user?.name}&nbsp;</span>さん、こんにちは。</p>
      </div>
      <div className='flex items-center justify-around mt-4 border-y border-solid border-white h-20 font-bold'>
        <div className='flex flex-col items-center justify-center w-full border-r border-solid border-white h-full gap-y-2'>
          <p className='w-full text-center'>ポイント</p>
          <p><span>350</span>&nbsp;<span>P</span></p>
        </div>
        <div className='flex flex-col items-center justify-center w-full border-r border-solid border-white h-full gap-y-2'>
          <p className='w-full text-center'>配送照会</p>
          <p><span>1</span></p>
        </div>
        <div className='flex flex-col items-center justify-center w-full h-full gap-y-2'>
          <p className='w-full text-center'>クーポン</p>
          <p>2</p>
        </div>
      </div>
        <ul className='flex items-center justify-between mt-4 font-bold'>
          <li className='flex items-center justify-center w-full'><Link onClick={pageChangeHandler} to="/notice" className='flex flex-col items-center font-bold'><img className='w-10 h-10' src="/assets/ringbell.png" alt="" /><p className='h-6'>公知事項</p></Link></li>
          <li className='flex items-center justify-center w-full'><Link  onClick={pageChangeHandler}to="/favorite" className='flex flex-col items-center font-bold'><img className='w-10 h-10' src="/assets/heart.png" alt="" /><p className='h-6'>お気に入り</p></Link></li>
          <li className='flex items-center justify-center w-full'><Link onClick={pageChangeHandler} to="/cart" className='flex flex-col items-center font-bold'><img className='w-10 h-10' src="/assets/shoppingcart.png" alt="" /><p className='h-6'>カート</p></Link></li>
          <li className='flex items-center justify-center w-full'><Link onClick={pageChangeHandler} to="/mypage" className='flex flex-col items-center font-bold'><img className='w-10 h-10' src="/assets/person.png" alt="" /><p className='h-6'>マイページ</p></Link></li>
        </ul>
      </div>
      <div className='bg-[#F4F6F8] h-full pt-8 text-lenssisDark text-lg font-["SUIT"] font-semibold relative'>
        <ul className='flex flex-col gap-y-2'>
          <li className='pl-2 pr-4 pb-2 border-b border-solid border-lenssisStroke w-full flex justify-between' onClick={()=>scrollHandler(568)}><span>Best</span><span><img src="/assets/rightarrow.png" alt="" /></span></li>
          <li className='pl-2 pr-4 pb-2 border-b border-solid border-lenssisStroke w-full flex justify-between' onClick={()=>scrollHandler(2709)}><span>New</span><span><img src="/assets/rightarrow.png" alt="" /></span></li>
          <li className='pl-2 pr-4 pb-2 border-b border-solid border-lenssisStroke w-full flex justify-between' onClick={()=>scrollHandler(6228)}><span>Recommend</span><span><img src="/assets/rightarrow.png" alt="" /></span></li>
          <li className='pl-2 pr-4 pb-2 border-b border-solid border-lenssisStroke w-full '><Link onClick={pageChangeHandler} className='flex justify-between' to="/event"><span>Event</span><span><img src="/assets/rightarrow.png" alt="" /></span></Link></li>
          <li className='pl-2 pr-4 pb-2 w-full '><Link onClick={pageChangeHandler} className='flex justify-between' to="review"><span>Review</span><span><img src="/assets/rightarrow.png" alt="" /></span></Link></li>
        </ul>

{/* footer */}
        <div className='text-lenssisGray pl-6 pt-4'>
        <ul className='w-full mx-auto flex flex-col items-start xs:items-center xs:justify-center gap-y-1 '>
      <li className='font-[900] pb-2 text-xl tracking-tight'>LENSSIS</li>
      <li className='text-sm'>주식회사 <span className='font-bold'>LENSSIS</span></li>
      <li className='text-sm'>전화번호 <span className='font-bold'>050-3558-4887</span></li>
      <li className='text-sm'>문의시간 <span className='font-bold'>평일 10:00 17:30</span></li>
    </ul>
    <ul className='flex flex-col items-star xs:flex-row xs:justify-center xs:items-center pb-20 xs:gap-x-10 w-full mt-4'>
      <li className='text-xs border-b xs:border-b-0 border-solid w-fit'><Link to="/">이용 규약과 정책</Link></li>
      <li className='text-xs border-b xs:border-b-0 border-solid w-fit'><Link to="/">특정 상거래에 관한 볍률에 근거한 표기</Link></li>
      <li className='text-xs border-b xs:border-b-0 border-solid w-fit'><Link to="/">개인 정보 보호 방침</Link></li>
    </ul>
    <ul className='flex flex-col gap-y-4 absolute top-1/3 right-8'>
      <li><a href="https://www.youtube.com"><img className='mx-auto' width={40} height={40} src="/assets/tiktok.png" /></a></li>
      <li><a href="https://www.line.me/ko"><img className='mx-auto' width={40} height={40} src="/assets/line.png" /></a></li>
      <li><a href="https://www.instagram.com"><img className='mx-auto' width={40} height={40} src="/assets/insta.png" /></a></li>
    </ul>
    </div>
      </div>

    

    </div>
  );
};

export default MobileSideBar;