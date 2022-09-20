import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cart from '../pages/Cart'
import Favorite from '../pages/Favorite'
import SigninPage from '../pages/SigninPage'
import Main from '../pages/Main'
import MypagePage from '../pages/MypagePage'
import Order from '../pages/Order'
import ProductDetail from '../pages/ProductDetail'
import SignupPage from '../pages/SignupPage'
import NotFound from '../components/NotFound'
import EventDetail from '../components/EventDetail'
import AllProductList from '../components/main/productList/AllProductList'
import OneDayProductList from '../components/main/productList/OneDayProductList'
import MonthlyProductList from '../components/main/productList/MonthlyProductList'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import MyOrder from '../components/mypage/tabs/MyOrder'
import MyTracking from '../components/mypage/tabs/MyTracking'
import MyAfter from '../components/mypage/tabs/MyAfter'
import MyProfile from '../components/mypage/tabs/MyProfile'
import MyReview from '../components/mypage/tabs/MyReview'
import MyGrade from '../components/mypage/tabs/MyGrade'
import MyCoupon from '../components/mypage/tabs/MyCoupon'

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<AllProductList />} />
          <Route path="/oneday" element={<OneDayProductList />} />
          <Route path="/monthly" element={<MonthlyProductList />} />
        </Route>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<Order />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/mypage" element={<MypagePage />}>
          <Route path='myorder'element={<MyOrder/>} />
          <Route path="mytracking"element={<MyTracking/>} />
          <Route path="myafter"element={<MyAfter />} />
          <Route path="myprofile"element={<MyProfile />} />
          <Route path="myreview"element={<MyReview />} />
          <Route path="mygrade"element={<MyGrade />} />
          <Route path="mycoupon"element={<MyCoupon />} />
        </Route>
        <Route path="/event/:id" element={<EventDetail />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default Router
