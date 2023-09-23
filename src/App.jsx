import {Routes,Route} from 'react-router-dom'
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { myContext } from './Components/context/context';
import { useState } from 'react';

import Food from './pages/Products/Food';
import Toys from './pages/Products/Toys';
import Dress from './pages/Products/Dress';
import { productData } from './pages/Products/Products';
import Home from './pages/Home';

import Login from './pages/LoginSignin/Login';
import Signin from './pages/LoginSignin/Signin';
import AllProducts from './pages/Products/AllProducts';
import Cart from './Components/Cart/Cart';
import View from './Components/Cart/View';
import Search from './pages/Products/Search';
import AdminHome from './Components/AdminSection/AdminHome';
import AdminEdit from './Components/AdminSection/AdminEdit';
import AdminAdd from './Components/AdminSection/AdminAddProduct';
import AdminProduct from './Components/AdminSection/AdminProduct';
import AdminUserInfo from './Components/AdminSection/AdminUserInfo';
import { UsersDetails } from './Components/AdminSection/Users';
import DetailsUsers from './Components/AdminSection/DetailsUsers';
import ThankYou from './Components/Cart/ThankYou';





function App() {
  // const [searchQuery, setSearchQuery] = useState("");
  const [cart,setCart] = useState([]);
  const [product,setProducts] = useState(productData);
  const [users, setUsers] = useState(UsersDetails);

  console.log('UsersDetails', UsersDetails);
console.log('users', users);

  return (
    <div>
        
        <myContext.Provider value={
           {productData, cart, setCart, product,setProducts,users,setUsers}
        }>
        {/* <Navbar/> */}
        <Routes>
          <Route path='/' element={<Home/>}/>
          {/* <Route path='/login' element={<Loginsignin/>}/> */}
          <Route path='/signin' element={<Signin/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/AllProducts' element={<AllProducts/>}/>
          <Route path='/Toys' element={<Toys/>} />
          <Route path='/Dress' element={<Dress/>}/>
          <Route path='/Food' element={<Food/>}/>
          <Route path='/Cart' element={<Cart/>}/>
          <Route path='/View/:id' element={<View/>}/>
          <Route path='/Search' element={<Search/>}/>
          <Route path='/AdminHome' element={<AdminHome/>}/>
          <Route path='/AdminEdit/:id' element={<AdminEdit/>}/>
          <Route path='/AdminAdd' element={<AdminAdd/>}/>
          <Route path='/ThankYou' element={<ThankYou/>}/>
          <Route path='/AdminProduct' element={<AdminProduct/>}/>
          <Route path='/AdminUserInfo' element={<AdminUserInfo/>}/>
          <Route path='/DetailsUsers/:id' element={<DetailsUsers/>}/>



        </Routes>
        </myContext.Provider>
    </div>
  );
}

export default App;
