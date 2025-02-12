import React from 'react';
import {Link} from 'react-router-dom';
import { BsCart2 } from "react-icons/bs";

function Header({total}) {
  return (
    <div className="py-1 px-2 bg-white">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
      <Link to="/"><img src="https://static.vecteezy.com/system/resources/previews/019/766/240/non_2x/amazon-logo-amazon-icon-transparent-free-png.png" className="h-16"/></Link>
        <Link to="/cart" className="relative text-red-500 pr-4">
          <div className="absolute -mt-3 ml-4">{total}</div>
          <BsCart2  className="text-2xl"/>
        </Link>
      </div>
    </div>
  );
}
export default Header;