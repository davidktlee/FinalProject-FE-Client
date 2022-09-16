import React, { useEffect } from 'react'
import { useLocation } from 'react-router'
import CardContainer from '../CardContainer'
import { useGetProductsList } from '../hooks/useProductLists'

function MonthlyProductList() {
  const { state } = useLocation()

  // useGetProductsList(state as string)

  return (
    <div>
      <CardContainer />
    </div>
  )
}

export default MonthlyProductList
