import NoticeTitle from './notice/NoticeTitle'
const MainNotice = () => {
  return (
    <>
      <div className="flex justify-center items-center text-[24px]">
        <span className="h-[45px] px-2 border-b-[5px] border-solid border-[#1B304A] text-[18px] md:text-[24px] mt-[20px] mb-[50px] font-[600] hover:cursor-pointer">
          Notice
        </span>
      </div>
      <NoticeTitle />
    </>
  )
}

export default MainNotice
