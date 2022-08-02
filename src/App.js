import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Mybag from './pages/mybag';
import Checkout from './pages/checkout';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Categories from './pages/categories';
import NotFound from './pages/notfound';
import Users from './pages/users';
import Profile from './pages/users/page/profile';
import MyAddress from './pages/users/page/address';
import MyOrder from './pages/users/page/myorder';
import Products from './pages/products';
import Search from './pages/search';
import Seller from './pages/seller';
import SellProduct from './pages/seller/page/SellProduct';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { categoryAction } from './configs/redux/actions/category';
import MyProducts from './pages/seller/page/MyProducts';
import EditProduct from './pages/seller/page/EditProduct';
import Verify from './pages/auth/Verify';
import Check from './pages/auth/Check';
import SellerProfile from './pages/seller/page/SellerProfile';
import { IsCustomer, IsSeller, RemoveToken } from './helpers/privateRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/auth/login' element={<RemoveToken><Login /></RemoveToken>} />
        <Route path='/auth/register' element={<RemoveToken><Register /></RemoveToken>} />
        <Route path='/login' element={<Navigate to="/auth/login" replace={true} />} />
        <Route path='/register' element={<Navigate to="/auth/register" replace={true} />} />
        <Route path='/categories/:id' element={<Categories />} />
        <Route path='/users' element={<IsCustomer><Users /></IsCustomer>}>
          <Route path='profile' element={<Profile />} />
          <Route path='shipping' element={<MyAddress />} />
          <Route path='orders' element={<MyOrder />} />
        </Route>
        <Route path='/seller' element={<IsSeller><Seller /></IsSeller>} >
          <Route path="profile" element={<SellerProfile />} />
          <Route path='sellproduct' element={<SellProduct />} /> 
          <Route path='myproduct' element={<MyProducts />} />
          <Route path='editproduct/:id' element={<EditProduct />} />
        </Route>
        <Route path='/search' element={<Search />} />
        <Route path='/products/:id' element={<Products />} />
        <Route path='/mybag' element={<Mybag />} />
        <Route path='/checkout' element={<IsCustomer><Checkout /></IsCustomer>} />
        <Route path="/verify" element={ <Verify />} />
        <Route path="/check" element={<Check />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
