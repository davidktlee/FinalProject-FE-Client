import React, { useRef } from 'react'

const SwiperButton = () => {
  const nextRef = useRef<HTMLButtonElement>(null)
  return (
    <button ref={nextRef} className=" z-[9999999] hover:color-white">
      <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="17.5" cy="17.5" r="17.5" fill="white" fillOpacity="0.5" />
        <path
          d="M13 10L22 17.5L13 25"
          stroke="#92C8ED"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13 10L22 17.5L13 25"
          stroke="#ABC8DF"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  )
}

export default SwiperButton
