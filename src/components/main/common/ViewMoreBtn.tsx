import { useNavigate } from 'react-router-dom'

interface PropsType {
  moveTo: string
}

function ViewMoreBtn({ moveTo }: PropsType) {
  const navigate = useNavigate()
  return (
    <div className="flex justify-center items-center w-[100px] h-[40px] mx-auto py-[50px] xs-max:w-[80px] xs-max:h-[25px]">
      <button
        className="border-[1px] border-solid text-lenssisDark border-lenssisDark py-1 xs:py-2 px-[10px] rounded-full text-[16px] xs-max:text-[12px]"
        onClick={() => navigate(`${moveTo}`)}
      >
        View More
      </button>
    </div>
  )
}

export default ViewMoreBtn
