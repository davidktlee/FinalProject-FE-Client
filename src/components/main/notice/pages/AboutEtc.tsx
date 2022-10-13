import React, { useEffect, useState } from 'react'
import Pagination from '../../common/Pagination'
import { useGetAllNotice } from '../../hooks/useNotice'
import { BoardMainList } from '../../types/noticeTypes'
import MobileNotice from '../utils/MobileNotice'
import WebNotice from '../utils/WebNotice'

function AboutEtc() {
  // 필독에 대한 내용 데이터

  const [currentPage, setCurrentPage] = useState(1)
  const [boardList, setBoardList] = useState<BoardMainList[]>([])
  const divideCount = 10
  const indexOfEnd = currentPage * divideCount
  const indexOfStart = indexOfEnd - divideCount
  const { data, isFetching } = useGetAllNotice(6)
  useEffect(() => {
    if (data) {
      setBoardList(data?.boardMainList?.slice(indexOfStart, indexOfEnd))
    }
  }, [data, currentPage])

  // 쿼리 키를 페이지네이션 부분에 내려줘서 버튼 누를 때 가능하게 만들기
  return (
    <>
      {boardList &&
        boardList.map((item: BoardMainList) => (
          <>
            <WebNotice id={item.boardId} title={item.boardTitle} isFetching={isFetching} />
            <MobileNotice id={item.boardId} title={item.boardTitle} isFetching={isFetching} />
          </>
        ))}
      <div className="flex justify-center items-center relative">
        {data && (
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

export default AboutEtc
