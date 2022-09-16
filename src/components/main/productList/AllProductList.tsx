import React, { useEffect } from 'react'
import { useLocation } from 'react-router'
import { useGetProductsList } from '../hooks/useProductLists'
import CardContainer from './../CardContainer'

function AllProductList() {
  const { state } = useLocation()

  useGetProductsList(state as string)

  return (
    <div>
      <CardContainer />
      카드 컨테이너
    </div>
  )
}

export default AllProductList
