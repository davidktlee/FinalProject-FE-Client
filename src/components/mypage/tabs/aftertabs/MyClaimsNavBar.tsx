import React, { useState } from 'react';
import { NavLink, URLSearchParamsInit, useSearchParams } from 'react-router-dom';


// 'ALL','주문취소','상품교환','반품접수'
const claimsMenuArray = [
  {
    title:'ALL',
    name:'all'
  },
  {
    title:'주문취소',
    name:'cancel'
  },
  {
    title:'상품교환',
    name:'exchange'
  },
  {
    title:'반품접수',
    name:'return'
  },
]


interface MyClaimsProps {
  setSearchParams: (nextInit: URLSearchParamsInit, navigateOptions?: {
    replace?: boolean | undefined;
    state?: any;
} | undefined) => void
  searchParams: URLSearchParams
}

const MyClaims = ({searchParams,setSearchParams}:MyClaimsProps) => {
  // idea . query string을 통해 주문취소,상품교환,반품접수 칸으로 이동..
  // ?query -> ...
  // searchParams를 통해 params를 가져와서 그에 맞게 filtering..

 
  const [activeQuery,setActiveQuery] = useState('');
  const addQueryHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const {currentTarget:{name}} = e;
    setSearchParams({
      filter: name
    })
    setActiveQuery(name)
  }


  return (
    <ul className='absolute flex -right-2 xs:right-0 -top-5 xs:-top-8 xs:gap-2 text-xs text-[#7a7a7a] mr-2 w-full items-center justify-between xs:justify-end px-2 xs:px-0 xs:border-b-0 border-b border-solid border-gray-200'>
      {claimsMenuArray.map((item) => (
        <li key={item.title} className="xs:text-base"><button name={item.name} onClick={addQueryHandler} className={activeQuery === item.name ? `font-bold text-[#1b304a]` : 'font-normal'}>{item.title}</button></li>
      ))}
    </ul>
  );
};

export default MyClaims;