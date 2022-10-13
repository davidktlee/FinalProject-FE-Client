import { useNavigate } from 'react-router'

interface PropsType {
  id: number
  title: string
  isFetching: boolean
  createdAt: string
}

function MobileNotice({ id, title, isFetching, createdAt }: PropsType) {
  const navigate = useNavigate()

  return (
    <>
      <div className="block xs:hidden mt-[20px]  ">
        <div className="rounded-md items-center my-2 py-2 pl-4 shadow-basic">
          <div className="">
            <span className="hover:cursor-pointer hover:underline" onClick={() => navigate(`/notice/${id}`)}>
              {title}
            </span>
          </div>
          <div className="flex">
            <div className="mr-4">{createdAt.slice(0, 10)}</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MobileNotice
