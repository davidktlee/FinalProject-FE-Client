import { useEffect, useState } from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'
import CardLayout from '../common/CardLayout'
import MyClaims from './aftertabs/MyClaimsNavBar'

const DUMMY_CLAIMS = [
  {
    process: 'cancel',
    claimNumber: 22090114,
    claimTitle: '렌즈가 깨져서 도착했습니다',
    receiptAt: '2022-08-17',
    progressed: '진행중',
    completedAt: '2022-08-19'
  },
  {
    process: 'return',
    claimNumber: 22320285,
    claimTitle: '색상이 인터넷에서 본 것과 달라 반품하려고합니다',
    receiptAt: '2022-09-01',
    progressed: '진행중',
    completedAt: '2022-09-04'
  },
  {
    process: 'exchange',
    claimNumber: 22569132,
    claimTitle: '혹시 올리브색으로 바꿀 수 있을까요? 사용안했어요',
    receiptAt: '2022-07-01',
    progressed: '진행중',
    completedAt: '2022-07-14'
  },
  {
    process: 'cancel',
    claimNumber: 22459924,
    claimTitle: '제 도수랑 맞지 않는 것 같아요',
    receiptAt: '2022-09-15',
    progressed: '진행중',
    completedAt: '2022-09-16'
  }
]

interface ClaimsType {
  process: string
  claimNumber: number
  claimTitle: string
  receiptAt: string
  progressed: string
  completedAt: string
}

const MyAfter = () => {
  const [searchParams, setSearchParams] = useSearchParams('all')

  const [claims, setClaims] = useState<ClaimsType[]>([])

  useEffect(() => {
    searchParams.set('filter', 'all')
  }, [])

  useEffect(() => {
    const query = searchParams.get('filter')
    setClaims(DUMMY_CLAIMS.filter((item) => item.process === query))
    console.log(query)
    if (query === 'all') {
      setClaims(DUMMY_CLAIMS)
    }
  }, [searchParams])

  return (
    <CardLayout title="취소/교환/반품 내역">
      <div className="relative mt-2 xs:mt-0">
        <MyClaims searchParams={searchParams} setSearchParams={setSearchParams} />

        <div className="flex flex-col w-full">
          <div className="flex items-center justify-between py-2 border-b border-solid border-[#abc8df] px-1 text-sm">
            <p className="flex-1 text-left xs:text-center text-xs xs:text-base">CS처리구분</p>
            <p className="flex-1 text-center text-xs xs:text-base">접수 제목</p>
            <p className="flex-1 text-xs xs:text-base text-right xs:text-center">주문 번호</p>
            <p className="hidden xs:block flex-1 text-center text-xs xs:text-base">접수일자</p>
            <p className="hidden xs:block flex-1 text-center">진행상태</p>
            <p className="hidden xs:block flex-1 text-center">완료일자</p>
          </div>
          {claims.map((item) => (
            <div key={item.claimTitle} className="flex items-center px-1 text-center py-4 ">
              <p className="flex-1 text-xs xs:text-base text-left xs:text-center">
                {item.process === 'cancel' && '주문취소'} {item.process === 'exchange' && '상품교환'}{' '}
                {item.process === 'return' && '반품'}
              </p>
              <p className="flex-1 truncate text-center text-xs xs:text-base">{item.claimTitle}</p>
              <p className="flex-1 text-right text-xs xs:text-base xs:text-center ">{item.claimNumber}</p>
              <p className="hidden xs:block flex-1 text-center text-xs xs:text-base">{item.receiptAt}</p>
              <p className="hidden xs:block flex-1 text-center">{item.progressed}</p>
              <p className="hidden xs:block flex-1 text-center">{item.completedAt}</p>
            </div>
          ))}
        </div>
      </div>
    </CardLayout>
  )
}

export default MyAfter
