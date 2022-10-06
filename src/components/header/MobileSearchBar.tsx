import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { BsX } from 'react-icons/bs'
import { Link } from 'react-router-dom'

interface MobileSearchBarHandlerProps {
  popupSearchBarHandler: () => void
}

const MobileSearchBar = ({ popupSearchBarHandler }: MobileSearchBarHandlerProps) => {
  const [searchValue, setSearchValue] = useState('')
  const [userSearched,setUserSearched] = useState<string[]>([])
  
  const searchSubmitHandler = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUserSearched(prev => [...prev,searchValue])
    
  }

  const searchValueChangeHander = (e:ChangeEvent<HTMLInputElement>) => {
    const {target:{value}} = e;
    setSearchValue(value);
  }

  const userSearchedDeleteHandler = (item:string) => {
    setUserSearched(prev => prev.filter(searchword => searchword !== item))
  }

  useEffect(() => {
    if(localStorage.getItem('lenssis_search')){
      const userSearched = JSON.parse(localStorage.getItem('lenssis_search') || '')
      console.log(userSearched);
      setUserSearched(userSearched)
    }
  },[])
  
  useEffect(() => {
    localStorage.setItem('lenssis_search', JSON.stringify(userSearched))
  },[userSearched])
  


  return (
    <div className='fixed top-0 left-0 z-50 text-black w-screen h-screen bg-lenssisLightGray font-["SUIT"]'>
      <div className="h-[60px] w-full flex bg-lenssisSky items-center">
        <div className="w-8 flex items-center justify-center" onClick={popupSearchBarHandler}>
          <img className="w-[12px] h-[20px]" src="/assets/leftarrow.png" alt="" />
        </div>
        <div className="relative w-full">
          <form onSubmit={searchSubmitHandler}>
            <input
              type="text"
              className="pl-4 pb-1 w-[95%] h-[40px] rounded-[23px] text-lenssisSky font-semibold placeholder:text-lenssisSky placeholder:font-semibold placeholder:text-sm flex items-center focus:outline-none"
              placeholder="무엇을 찾고 있나요?"
              value={searchValue}
              onChange={searchValueChangeHander}
            />
          </form>
          <div className="absolute right-8 top-[6px]">
            <img width={25} height={25} src="/assets/bluesearch.png" alt="" />
          </div>
        </div>
      </div>

      <div className="bg-white m-2 mt-4 p-4 h-[450px] shadow-[0_0_6px] shadow-lenssisStroke rounded-[5px]">
        <div className="flex flex-col  items-center">
          <div className="flex items-center justify-between w-full">
            <p className="text-lenssisDark font-bold">최근 검색어</p>
            <p>
              <button className="font-bold text-lenssisGray">전체 지우기</button>
            </p>
          </div>
          <div className="flex flex-col items-center w-full mt-4">
            {userSearched.map((item) => (
              <p className="flex items-center justify-between w-full font-semibold text-lenssisGray py-1">
              {item} <BsX size={32} color="#d3d3d3" onClick={() =>userSearchedDeleteHandler(item)} />
            </p>
            ))}
          </div>
        </div>
        <div className="mt-[30px]">
          <p className="font-bold text-lenssisDark">인기 검색어</p>
          <ul className="flex gap-2 mt-[10px] text-sm">
            <li className="bg-lenssisLightGray p-1 px-2 rounded-[23px] text-lenssisDark font-semibold">
              <button>원데이</button>
            </li>
            <li className="bg-lenssisLightGray p-1 px-2 rounded-[23px] text-lenssisDark font-semibold">
              <button>에일린 그레이</button>
            </li>
            <li className="bg-lenssisLightGray p-1 px-2 rounded-[23px] text-lenssisDark font-semibold">
              <button>14.0 직경</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default MobileSearchBar
