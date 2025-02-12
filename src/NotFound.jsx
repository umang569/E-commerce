import React from 'react';
import {Link} from "react-router-dom";
import { TbError404 } from "react-icons/tb";

function NotFound(){
  return (
    <div className="flex flex-col items-center text-red-500 text-4xl justify-center grow gap-1">
      <TbError404 className="text-9xl text-gray-600"/>
      <h2 className="font-medium">Page Not Found</h2>
      <div className="font-mono text-lg text-gray-400 flex flex-col items-center"><p>The page you requested could not found</p>
      <p>Please go back to HomePage</p></div>
      <Link to="/" className="border font-mono bg-red-500 rounded-full text-white px-5 text-2xl py-0.5">Go Home</Link>
    </div>
  );
}
export default NotFound;