import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cart from '../pages/Cart'
import Favorite from '../pages/Favorite'
import Login from '../pages/Login'
import Main from '../pages/Main'
import MyPage from '../pages/MyPage'
import Order from '../pages/Order'
import ProductDetail from '../pages/ProductDetail'
import SignupPage from '../pages/SignupPage'
import NotFound from '../components/NotFound'
import EventDetail from '../components/EventDetail'
import AllProductList from '../components/main/productList/AllProductList'
import OneDayProductList from '../components/main/productList/OneDayProductList'
import MonthlyProductList from '../components/main/productList/MonthlyProductList'
import Header from '../components/common/header/Header'

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
        <Route path="/login" element={<Login />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<Order />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/event/:id" element={<EventDetail />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
