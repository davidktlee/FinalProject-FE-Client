import { graphicDiameter } from '../../constants/filterData'
import Heart from '/assets/Heart.svg'
import { useParams } from 'react-router'
import { useRecoilState } from 'recoil'
import { mainCartModal } from '../../store/mainCart'
// import { useProductDetails } from './hooks/useProductDetails'

interface PropsType {
  isClose?: boolean
}

const ProductInfo = ({ isClose }: PropsType) => {
  const { id } = useParams()
  const [modalState, setModalState] = useRecoilState(mainCartModal)
  // const details = useProductDetails()
  // console.log(details)

  return (
    <section className="text-gray-600 body-font overflow-hidden relative">
      {isClose && (
        <img
          className="absolute top-[195px] right-[20px] font-bold z-[99999] hover:cursor-pointer"
          onClick={() => setModalState(false)}
          src={'/assets/close.png'}
        />
      )}
      <div className="container pt-44 pb-10 mx-auto ">
        <div className="lg:w-full mx-auto flex flex-wrap drop-shadow-basic rounded-[10px] p-8 xs-max:w-[95%] xs-max:px-[18px] bg-white ">
          <div className="md:flex-row lg:flex-col lg:w-1/2 w-full lg:h-auto flex flex-col gap-4">
            <h2 className="xs:hidden text-center text-[20px] text-lenssisDark font-bold">상품상세</h2>
            <img
              alt="ecommerce"
              className="object-cover object-center rounded mx-auto xs-max:w-[320px] xs-max:h-[315px]"
              src="https://user-images.githubusercontent.com/90392240/193039552-7fc9d4c3-a60b-4491-a4df-1f86bd7a54bc.png"
              width="465"
              height="460"
            />
            <div className="flex xs:justify-between sm:justify-center md:justify-between lg:justify-between gap-3 md:mx-auto md:flex-col lg:gap-[14px] lg:flex-row xl:w-[460px] xl:mx-auto xl:gap-[14.2px] xs-max:w-[320px] xs-max:mx-auto xs-max:gap-2">
              <img
                className="rounded xs-max:w-[74px] xs:w-[74px] sm:w-[105px]"
                src="https://user-images.githubusercontent.com/90392240/193039539-7085fbca-757e-47d3-b80c-372381cfb410.png"
              />
              <img
                className="rounded xs-max:w-[74px] xs:w-[74px] sm:w-[105px]"
                src="https://user-images.githubusercontent.com/90392240/193039540-03fe9fd8-53c8-4853-b1a3-5393e57536b3.png"
              />
              <img
                className="rounded xs-max:w-[74px] xs:w-[74px] sm:w-[105px]"
                src="https://user-images.githubusercontent.com/90392240/193039546-d561bfa7-30ab-4337-8a91-16824fe588e5.png"
              />
              <img
                className="rounded xs-max:w-[74px] xs:w-[74px] sm:w-[105px]"
                src="https://user-images.githubusercontent.com/90392240/193039549-32de8393-f93b-4246-ad3f-a9b117d7e6be.png"
              />
            </div>
          </div>
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-2 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-lenssisGray mb-2 text-[12px]">60개의 리뷰 &gt;</h2>
            <div className="text-gray-900 text-3xl title-font font-medium mb-2 flex justify-between">
              <span className="">스텔라</span>
              <button>
                <img width={35} height={35} src={Heart} alt="즐겨찾기" />
              </button>
            </div>

            <div className="leading-relaxed text-[14px]">
              <div className="price flex">
                <div className="text-xl font-bold">1,800円</div>
                <p className="ml-4 leading-7">2,000円</p>
              </div>
              <div className="divider h-[1px] bg-[#BCBCBC] my-2 xs-max:hidden"></div>
              <div className="badge flex gap-2 my-4">
                {graphicDiameter.map((item, index) => (
                  <span
                    key={index}
                    className="border-solid border-[1px] border-lenssisBadge text-lenssisBadge rounded-[5px] px-2 text-sm"
                  >
                    {item.name}
                  </span>
                ))}
              </div>
              <div className="point flex flex-initial my-2 ">
                <p className="text-black w-[130px] xs-max:w-[70px] lg:w-[160px]">포인트</p>
                <p className="flex-1">구매 금액의 1%</p>
              </div>
              <div className="card flex my-2">
                <p className="text-black w-[130px] xs-max:w-[70px] lg:w-[160px]">카드 혜택</p>
                <p className="flex-1">무이자 할부 카드 안내</p>
              </div>
              <div className="delivery flex my-2">
                <p className="text-black w-[130px] xs-max:w-[70px] lg:w-[160px]">배송 안내</p>
                <div>
                  <p className="flex-1 text-[14px] text-lenssisDeepGray">
                    2,500원(50,000원 이상 구매 시 무료)
                  </p>
                  <p className="text-[12px]">영업일 기준 5~7일 이내 배송</p>
                </div>
              </div>
              <div className="divider h-[1px] bg-[#BCBCBC] mt-2 mb-4 sm:hidden"></div>
              <div className="divider"></div>
              <div className="delivery flex my-2">
                <p className="text-black w-[130px] xs-max:w-[70px] lg:w-[160px]">사용 기간</p>
                <div className="flex flex-1 gap-2">
                  <div className=" border-solid border-[#D3D3D3] border-[1px] rounded-[28px] text-center py-[1px] px-[12px] text-[#5A5A5A] w-[100px] h-[30px] ">
                    원데이
                  </div>
                  <div className=" border-solid border-[#D3D3D3] border-[1px] rounded-[28px] text-center py-[1px] px-[12px] text-[#5A5A5A] w-[100px] h-[30px] ">
                    먼슬리
                  </div>
                </div>
              </div>
              <div className="text-center mr-16">★ 1箱に10枚入っております</div>
              <div className="delivery flex my-2 pt-2">
                <p className="text-black w-[130px] xs-max:w-[70px] lg:w-[160px]">세부 색상</p>
                <div className="flex gap-2">
                  <div
                    className="w-[30px] h-[30px] rounded-full"
                    style={{ backgroundColor: '#A76C27' }}
                  ></div>
                  <div
                    className="w-[30px] h-[30px] rounded-full"
                    style={{ backgroundColor: '#F2EAD1' }}
                  ></div>
                  <div
                    className="w-[30px] h-[30px] rounded-full"
                    style={{ backgroundColor: '#B9B9B9' }}
                  ></div>
                </div>
              </div>
              <div className="delivery flex my-2 pt-4">
                <p className="text-black w-[130px] xs-max:w-[70px] lg:w-[160px]">그래프 직경</p>
                <div className="flex gap-2">
                  <div className=" border-solid border-[#D3D3D3] border-[1px] rounded-[28px] text-center py-[1px] px-[12px] text-[#5A5A5A] w-[55px] h-[30px] ">
                    13.2
                  </div>
                  <div className=" border-solid border-[#D3D3D3] border-[1px] rounded-[28px] text-center py-[1px] px-[12px] text-[#5A5A5A] w-[55px] h-[30px] ">
                    13.2
                  </div>
                </div>
              </div>
            </div>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
              <div className="flex ">
                <span className=" text-black w-[130px] xs-max:w-[70px] lg:w-[160px] text-[14px]">도수</span>
              </div>
              <div className="">
                <select
                  name="상품명"
                  className="border-solid border-[1px] border-r-0 border-lenssisStroke text-lenssisGray w-[245px] h-[40px] rounded-[5px] pl-[20px] appearance-none bg-[url('/assets/selectArrow.svg')] bg-no-repeat bg-right"
                >
                  <option value="">選択してください</option>
                  <option value="0.00,0,376">0.00</option>
                  <option value="-0.5,0,301">-0.5</option>
                  <option value="-1,0,152">-1</option>
                  <option value="-1.25,0,93">-1.25</option>
                  <option value="-1.50,0,37">-1.50</option>
                  <option value="-1.75,0,18">-1.75</option>
                  <option value="-2.00,0,51">-2.00</option>
                  <option value="-2.25,0,39">-2.25</option>
                  <option value="-2.50,0,2">-2.50</option>
                  <option value="-2.75,0,-10">-2.75&nbsp;&nbsp;[品切れ]</option>
                  <option value="-3.00,0,-10">-3.00&nbsp;&nbsp;[品切れ]</option>
                  <option value="-3.25,0,26">-3.25</option>
                  <option value="-3.50,0,36">-3.50</option>
                  <option value="-3.75,0,-10">-3.75&nbsp;&nbsp;[品切れ]</option>
                  <option value="-4.00,0,20">-4.00</option>
                  <option value="-4.25,0,11">-4.25</option>
                  <option value="-4.50,0,95">-4.50</option>
                  <option value="-4.75,0,5">-4.75</option>
                  <option value="-5.00,0,71">-5.00</option>
                  <option value="-5.50,0,16">-5.50</option>
                  <option value="-6.00,0,59">-6.00</option>
                  <option value="-6.50,0,94">-6.50</option>
                  <option value="-7.00,0,44">-7.00</option>
                  <option value="-7.50,0,161">-7.50</option>
                  <option value="-8.00,0,32">-8.00</option>
                  <option value="-8.50,0,2">-8.50</option>
                  <option value="-9.00,0,10">-9.00</option>
                  <option value="-9.50,0,2">-9.50</option>
                  <option value="-10.00,0,1">-10.00</option>
                </select>
              </div>
            </div>
            <div className="flex justify-between py-2">
              <span>총 상품 금액</span>
              <span className="title-font font-medium text-2xl text-gray-900">1,800円</span>
            </div>
            <div className="divder h-[2px] bg-slate-700 my-2"></div>
            <div className="flex gap-4 xs-max:flex-col py-2">
              <button className="w-1/2 cursor-pointer bg-white text-blue-900 border-0 ring-1 ring-gray-300 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded xs-max:w-full">
                장바구니
              </button>
              <button className="w-1/2 cursor-pointer text-white bg-[#1B304A] border-0 ring-1 ring-gray-300 py-2 px-6 focus:outline-none rounded xs-max:w-full">
                바로구매
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductInfo
