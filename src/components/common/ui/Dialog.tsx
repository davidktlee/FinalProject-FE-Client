import React from 'react'
import IconButton from './IconButton'

interface DialogProps {
  children: React.ReactNode
  isModalOpen: boolean
  onClose: Function
}

const Dialog = ({ onClose, children, isModalOpen }: DialogProps) => {
  if (!isModalOpen) return <></>

  return (
    <div className="absolute top-0 overflow-auto w-[2560px] h-[9999px] bg-gray-300 bg-opacity-40 z-50">
      <div className="fixed top-[60%] xs:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex w-[350px] rounded-[5px] xs:w-[400px] bg-lenssisSky">
        <div className="relative w-full max-w-md m-auto flex-col flex rounded-lg ">
          <div className="flex flex-col items-start justify-center">{children}</div>
          <span className="absolute top-0 right-0 p-4"></span>
        </div>
      </div>
    </div>
  )
}

export default Dialog
