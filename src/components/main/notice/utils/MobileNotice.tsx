import { useNavigate } from 'react-router'

function MobileNotice() {
  const navigate = useNavigate()
  const id = 1

  return (
    <>
      <div className="block xs:hidden mt-[20px]  ">
        <div className="rounded-md items-center my-2 py-2 pl-4 shadow-basic">
          <div className="">
            <span className="hover:cursor-pointer hover:underline" onClick={() => navigate(`/notice/${id}`)}>
              내용에 용에 들어 달것
            </span>
          </div>
          <div className="flex">
            <div className="mr-4">◴ 08-09</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MobileNotice
