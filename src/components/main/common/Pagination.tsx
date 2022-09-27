import React from 'react'

function Pagination() {
  return (
    <div className={`my-[51px] flex grow justify-center items-center `}>
      <span className="hover:cursor-pointer mx-4">
        <svg width="7" height="17" viewBox="0 0 7 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.99805 1L1.49919 8.5L5.99805 16" stroke="#6D6D6D" strokeWidth="0.975844" />
        </svg>
      </span>
      <span>1 2 3 </span>
      <span className="hover:cursor-pointer mx-4">
        <svg width="7" height="17" viewBox="0 0 7 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.998047 16L5.4969 8.5L0.998047 1" stroke="#6D6D6D" strokeWidth="0.975844" />
        </svg>
      </span>
    </div>
  )
}

export default Pagination
