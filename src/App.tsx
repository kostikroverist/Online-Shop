import './App.css'
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import MainPage from './pages/MainPage';
import Orders from './pages/UserPages/Orders';
import Wallet from './pages/UserPages/Wallet';
import ProductRetService from './pages/UserPages/ProductRetService';
import Profile from './pages/UserPages/Profile';
import OrderTracking from './pages/UserPages/OrderTracking';
import Message from './pages/UserPages/Message';
import Discount from './pages/GoodsPages/Discount';
import Action from './pages/GoodsPages/Action';
import Setting from './pages/Setting/Setting';


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path='/myProfile' element={<Profile />} />
          <Route path="/myOrders" element={<Orders />} />
          <Route path='/myWallet' element={<Wallet />} />
          <Route path='/returnProductService' element={<ProductRetService />} />
          <Route path='/orderTracking' element={<OrderTracking />} />
          <Route path='/myMessage' element={<Message />} />
          <Route path='/discount' element={<Discount />} />
          <Route path='/action' element={<Action />} />
          <Route path='/setting' element={<Setting />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
