import React, { useEffect, useState } from 'react'
import { NoticeDetailSkeleton } from '../../../common/ui/Skeleton'
import Pagination from '../../common/Pagination'
import { useGetAllNotice } from '../../hooks/useNotice'
import { BoardMainList } from '../../types/noticeTypes'
import MobileNotice from '../utils/MobileNotice'
import WebNotice from '../utils/WebNotice'
// 필독에 대한 내용 데이터
function AboutProduct() {
  const [currentPage, setCurrentPage] = useState(1)
  const [boardList, setBoardList] = useState<BoardMainList[]>([])
  const divideCount = 10
  const indexOfEnd = currentPage * divideCount
  const indexOfStart = indexOfEnd - divideCount
  const { data, isFetching } = useGetAllNotice(4)
  useEffect(() => {
    if (data) {
      setBoardList(data?.boardMainList?.slice(indexOfStart, indexOfEnd))
    }
  }, [data, currentPage])
  // 쿼리 키를 페이지네이션 부분에 내려줘서 버튼 누를 때 가능하게 만들기
  return (
    <>
      {isFetching ? (
        <NoticeDetailSkeleton />
      ) : data && data?.totalCount === 0 ? (
        <div className="text-center text-[24px] mt-10 text-lenssisDark">등록된 내용이 없습니다</div>
      ) : (
        boardList.map((item: BoardMainList) => (
          <div key={item.boardId}>
            <WebNotice id={item.boardId} title={item.boardTitle} />
            <MobileNotice id={item.boardId} title={item.boardTitle} createdAt={item.createdAt} />
          </div>
        ))
      )}
      <div className="flex justify-center items-center relative">
        {boardList != [] && data && (
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            allCount={data.totalCount}
            divide={divideCount}
          />
        )}
      </div>
    </>
  )
}

export default AboutProduct
