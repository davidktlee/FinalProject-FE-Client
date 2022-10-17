import { Outlet } from 'react-router-dom'
import { useUser } from '../../auth/hooks/useUser'
import CardLayout from '../common/CardLayout'

const MyProfile = () => {
  return (
    <CardLayout title="정보 수정">
      <Outlet />
    </CardLayout>
  )
}

export default MyProfile
