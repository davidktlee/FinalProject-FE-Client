import React from 'react'
import { useNavigate } from 'react-router'

interface PropsType {
  id: number
  title: string | undefined
  isFetching: boolean
}

function WebNotice({ id, title, isFetching }: PropsType) {
  const navigate = useNavigate()
  console.log(title)
  return (
    <>
      <div className="pb-10 hidden xs:block">
        <div className="flex items-center h-[45px] my-8 py-4 border-t-[1px] border-solid border-lenssisStroke">
          <div className="w-[145px]  ml-[10px] font-[400] text-[13px] text-lenssisDark text-center">{id}</div>
          <div
            className="ml-[60px] hover:cursor-pointer hover:underline"
            onClick={() => navigate(`/notice/${id}`, { state: id })}
          >
            {title}
          </div>
        </div>
      </div>
    </>
  )
}

export default WebNotice
