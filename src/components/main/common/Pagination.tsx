import { useEffect, useState } from 'react'
import { usePrefetchProductLists } from '../hooks/useProductLists'

interface PropsType {
  currentPage: number
  allCount: number
  setCurrentPage: (currentPage: number) => void
}

function Pagination({ currentPage, allCount, setCurrentPage }: PropsType) {
  const [pagesCount, setPagesCount] = useState<number[] | []>([])
  const maxPage = Math.ceil(allCount / 10)
  console.log(allCount)
  useEffect(() => {
    const arr = []
    for (let i = 1; i <= maxPage; i++) {
      arr.push(i)
    }
    setPagesCount(arr)
  }, [allCount])
  usePrefetchProductLists(currentPage, allCount)

  return (
    <div className={`my-[50px] flex grow justify-center items-center`}>
      <span
        className="hover:cursor-pointer mx-4"
        onClick={() => (currentPage <= 1 ? null : setCurrentPage(currentPage - 1))}
      >
        <svg width="5" height="15" viewBox="0 0 7 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.99805 1L1.49919 8.5L5.99805 16" stroke="#6D6D6D" strokeWidth="0.975844" />
        </svg>
      </span>
      {pagesCount.map((page: number) => (
        <span
          key={page}
          className={`${
            currentPage === page ? 'font-bold' : 'font-normal text-lenssisGray'
          } text-[11px] cursor-pointer hover:font-bold mx-2`}
          onClick={() => setCurrentPage(page)}
        >
          {page}
        </span>
      ))}
      <span
        className="hover:cursor-pointer mx-4"
        onClick={() => (currentPage >= maxPage ? null : setCurrentPage(currentPage + 1))}
      >
        <svg width="5" height="15" viewBox="0 0 7 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.998047 16L5.4969 8.5L0.998047 1" stroke="#6D6D6D" strokeWidth="0.975844" />
        </svg>
      </span>
    </div>
  )
}

export default Pagination
