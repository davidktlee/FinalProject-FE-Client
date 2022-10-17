import { useUser } from '../../auth/hooks/useUser'

const CartStatusLine = () => {
  const { user } = useUser()

  return (
    <div className="flex items-center justify-between py-1 border-b border-solid border-lenssisGray w-full">
      <p className="pl-2 pb-1 text-sm xs:text-base text-lenssisDark font-bold">
        {user ? user.name : '회원'}님의 장바구니 목록입니다.
      </p>
    </div>
  )
}

export default CartStatusLine
