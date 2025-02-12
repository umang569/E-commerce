import React,{useState,useEffect} from 'react';
import ProductListPage from './ProductListPage';
import Header from './Header';
import Footer from './Footer';
import ProdDetail from './ProdDetail';
import {Routes,Route} from 'react-router-dom';
import NotFound from './NotFound';
import Cart from './Cart';
import axios from 'axios';
import Login from './Login';
import ForgotPassword from './ForgotPassword';
import SignUp from './SignUp';

function App() {

  const [user,setUser] = useState();

  const token = localStorage.getItem("token");
  console.log(token);
  useEffect( ()=>{
    if (token) {
      axios.get( "https://myeasykart.codeyogi.io/me",
              {
                headers:{Authorization:token}
              }).then(res=>{
                setUser(res.data);
                console.log("Contain data")
    }).catch(err=>{
      console.log("No data");
      localStorage.removeItem("token");
    })
    }
  },[])

  console.log("logged in user is ",user);

  
  const saveddataString= localStorage .getItem('cart');
  const saveddata = JSON.parse(saveddataString)||{};
  const [cart,setCart]  =useState(saveddata);

  
  function handleAddToCart(productid,count){
    let oldcountofprod = (cart[productid]) || 0;
    const newcart = {...cart,[productid]:oldcountofprod+(+count)};
    UpdateCart(newcart);
  }
   function UpdateCart(newCart){
     setCart(newCart);
     const cartString = JSON.stringify(newCart);
     localStorage.setItem('cart',cartString);
   }
  
  // console.log(Cart);
  const totalCount = Object.keys(cart).reduce(function(acc,curr){
    return acc+cart[curr];
  },0)
  // console.log(totalCount);
  return (
    <div className="flex flex-col min-h-screen bg-gray-200">
     <Header total={totalCount}/>
      <Routes>
        <Route path="/login" element={<Login user={user} setUser={setUser}/>}/>
        <Route index element={<ProductListPage setuser={setUser} user={user}/>}/>
        <Route path="*" element={<NotFound/>}/>
        <Route path={"/prodDetail/:id"} element={<ProdDetail user={user} onAddToCart={handleAddToCart} />}/>
        <Route path="/forgotPassword" element={<ForgotPassword/>}/>
        <Route path="/SignUp" element={<SignUp setUser={setUser} user={user}/>}/>
        <Route path="/cart" element={<Cart cartitem={cart} user={user} UpdateCart={UpdateCart}/>} ></Route>
      </Routes>
      
     <Footer/>
    </div>
  );
}

export default App;