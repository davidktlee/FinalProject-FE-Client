import star from '/assets/star.svg'

const MobileReviewCard = () => {
  return (
    <div className="w-[160px] h-[200px] p-[5px] border-solid border-[1px] border-lenssisLightStroke rounded-[5px] bg-white">
      <div>
        <img
          width="150px"
          height="140px"
          className=" rounded rounded-t-[5px]"
          src="https://user-images.githubusercontent.com/90392240/191562901-054caaf5-0245-44fd-8715-848853dcca4e.png"
        />
      </div>
      <div className="p-[2px] mt-[2px] w-[150px] h-[45px]">
        <p className="text-[13px] leading-4 font-bold">샌드 플러스 그레이 착용</p>
        <p className="text-[12px] leading-4 text-[#7F7F7F]">@velvet.ineffable</p>
        <img src={star} width="70" alt="star" />
      </div>
    </div>
  )
}

export default MobileReviewCard
