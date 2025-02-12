import React from 'react';
import {Link} from 'react-router-dom';
function Product(data){
  return (
    <div className="flex flex-col ">
      <div className= "w-full">
        <img className="h-full w-full object-cover" src={data.thumbnail} alt="Product image"/>
      </div>
      <div className ="text-gray-400 text-xs font-semibold mb-1">{data.category}</div>
      <div className= "text-sm font-semibold mb-1">{data.title}</div>
      <div className= "h-5 w-20"><img className="h-full w-full object-cover" src="https://cdn1.vectorstock.com/i/1000x1000/40/15/zero-0-star-rank-background-vector-35174015.jpg" alt="rating"/></div>
      <div className= "text-sm font-semibold">${data.price}</div>
      <Link to={`/prodDetail/${data.id}`} className="text-red-500 text-sm">View Product</Link>
    </div>
  );
}
export default Product;