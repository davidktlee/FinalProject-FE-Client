import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cart from '../pages/Cart'
import Favorite from '../pages/Favorite'
import SigninPage from '../pages/SigninPage'
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
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import AllFavoriteList from '../components/favorite/AllFavoriteList'
import OneDayFavorite from '../components/favorite/OneDayFavorite'
import MonthlyFavorite from '../components/favorite/MonthlyFavorite'

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
        <Route path="/favorite" element={<Favorite />}>
          <Route path="all" element={<AllFavoriteList />} />
          <Route path="oneday" element={<OneDayFavorite />} />
          <Route path="monthly" element={<MonthlyFavorite />} />
        </Route>
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/event/:id" element={<EventDetail />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default Router
