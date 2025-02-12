import React from 'react';

function Logout({setuser}){
  function handleLogout(){
    localStorage.removeItem("token");
    // setuser("");
    window.location.href = "/login";
  }
  
  return (
    <div className ="flex justify-center my-12">
       <button onClick={handleLogout} className=" border-2 bg-red-200 px-8 py-1 rounded-md border-red-300 hover:bg-red-500 hover:border-black">Logout</button></div>
  );
} 
export default Logout;