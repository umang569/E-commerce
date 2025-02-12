import React,{useEffect,useState} from 'react';
import AllProducts from './AllProducts';
import {Navigate} from 'react-router-dom';
import Logout from './Logout';

function ProductListPage({user,setuser}){ 
     if(!(user)){
            return (<Navigate to="/login"/>)
         }
    return (
         <div className="grow px-4">
              <AllProducts/>
              <Logout setuser={setuser}/>
         </div>
    );
}
export default ProductListPage;
