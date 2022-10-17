import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { NonMemberDataType } from '../hooks/useNonMember'

interface LocationState {
  state: NonMemberDataType[]
}

const NonMemberInquiry = () => {
  const { state } = useLocation() as LocationState
  const navigate = useNavigate()

  useEffect(() => {
    if (!state) {
      alert('비정상적 접근방식입니다. 비회원 주문조회 페이지로 이동합니다.')
      navigate('/nonmember')
    }
  }, [])
  return (
    <div className="mt-40">
      <div>
        {state &&
          state.map((item) => <p key={item.orderInfo.orderCreatedAt}>{item.orderInfo.orderCreatedAt}</p>)}
      </div>
    </div>
  )
}

export default NonMemberInquiry
