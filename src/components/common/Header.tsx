import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <nav className="fixed w-full flex flex-col bg-white">
      <div className='flex justify-center items-center h-10 bg-[#a4c8e1] text-white w-full mb-4'>
        <p>원데이, 먼슬리 등 상품 부가세 포함 5,000엔 이상 구입 <span className='text-lg'>배송비 무료</span></p>
      </div>
      <div className="flex items-center gap-4 ">
        <div className='flex-1 flex items-center justify-between'>
        <div>
          <span className="text-2xl font-bold p-4 pr-8">LENSSIS</span>
        </div>
        <div className="grow flex justify-between items-center gap-4">
          <NavLink to="/" className="font-bold">전체상품</NavLink>
          <NavLink to="/event" className="font-bold">이벤트</NavLink>
          <NavLink to="/review" className="font-bold">리뷰</NavLink>
        </div>
        </div>
        <div className="flex items-center relative overflow-hidden rounded-md w-1/3">
          <input className='w-full h-12 pl-2 border-gray-200 border border-solid outline-none focus:bg-sky-200 focus:bg-opacity-25' type="text" placeholder="퍼스널 진단" />
          <button className="bg-gray-200 w-12 h-full absolute right-0">
            <img className="w-full" src="/assets/search" alt="" />
          </button>
        </div>

        <div className="flex items-center justify-between flex-1">
          <div className='flex-1'>
            <p>
              <svg className='mx-auto' width={26} height={26} xmlns="http://www.w3.org/2000/svg">
                <image href="/assets/favorite.svg" />
              </svg>
            </p>
            <Link to="/favorite" className="text-sm text-[#9f9f9f] flex justify-center items-baseline">즐겨찾기</Link>
          </div>
          <div className='flex-1'>
          <p>
              <svg className='mx-auto' width={30} height={28} xmlns="http://www.w3.org/2000/svg">
                <image href="/assets/cart.svg" />
              </svg>
            </p>
            <Link to="/cart" className="text-sm text-[#9f9f9f] flex justify-center items-baseline">장바구니</Link>
          </div>
          <div className='flex-1'>
          <p>
              <svg className='mx-auto' width={34} height={28} xmlns="http://www.w3.org/2000/svg">
                <image href="/assets/person.svg" />
              </svg>
            </p>
            <Link to="/signup" className="text-sm text-[#9f9f9f] flex justify-center items-baseline">로그인</Link>
          </div>
          <div className='flex-1'>
          <p>
              <svg className='mx-auto' width={30} height={28} xmlns="http://www.w3.org/2000/svg">
                <image href="/assets/info.svg" />
              </svg>
            </p>
            <Link to="/info" className="text-sm text-[#9f9f9f] flex justify-center items-baseline">공지사항</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header
