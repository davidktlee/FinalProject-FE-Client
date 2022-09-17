import React from 'react'

const NavSearch = () => {
  return (
    <div className="flex items-center relative  rounded-3xl border border-solid border-white w-1/3 max-w-[300px] min-w-[300px]">
      <input
        className="w-full h-8 pl-4 outline-none bg-[#36729a] placeholder-white placeholder:text-sm rounded-full"
        type="text"
        placeholder="퍼스널 진단"
      />
      <button className="bg-white w-8 absolute z-10 rounded-full flex items-center -right-[1px]">
        <img className="w-full" src="/assets/search.svg" alt="" />
      </button>
    </div>
  )
}

export default NavSearch
