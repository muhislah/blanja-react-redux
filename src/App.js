import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Detail from './pages/detail';
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

function App() {
  return (
    <BrowserRouter>
      <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/auth/login' element={<Login />} />
        <Route path='/auth/register' element={<Register />} />
        <Route path='/categories/:id' element={<Categories />} />
        <Route path='/users' element={<Users />} >
          <Route path='profile' element={<Profile />} />
          <Route path='shipping' element={<MyAddress />} />
          <Route path='orders' element={<MyOrder />} />
        </Route>
        <Route path='/search' element={<Search />} />
        <Route path='/products/:id' element={<Products />} />
        <Route path='/mybag' element={<Mybag />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
