import React,{useEffect,useState} from 'react';
import Product from './Product';
import {getProductDetail , getProductslist} from './api';
import Loading from './Loading';
function AllProducts() {
  
  const [query,setQuery] = useState('');
  const [sort,setSort] = useState('default');
  const [data,setdata] = useState([]);
   useEffect(function () {
     const xyz = getProductslist();
     console.log("XYZ PROMISE",xyz);
     xyz.then(function (products){
       setdata(products);
     })
   },[]);
  let prod = data.filter(function(item){
    return item.title.toLowerCase().indexOf(query.toLowerCase())!=-1;
  })
  if(sort=="LowToHigh"){
    prod.sort(function(a,b){
      return a.price-b.price;
    })
  }
  if(sort=="HighToLow"){
    prod.sort(function(a,b){
      return b.price-a.price;
    })
  }
  if(sort=="AToZ"){
    prod.sort(function(a,b){
      return a.item < b.item ? -1 : 1 ;
    })
  }
  
  
  function handleQuerychange(event){
    setQuery(event.target.value);
  }
  
  function handleSortChange(event){
    setSort(event.target.value);
  }
  
  return prod.length!=0 ?(
    <div >
    <div className ="flex flex-col w-full max-w-6xl p-8 mx-auto my-12 bg-white gap-y-6">
      <div className="flex flex-col md:flex-row md:justify-between gap-y-6 md:items-center">
      <input 
        value= {query}
        placeholder="search" 
        className="px-2 border border-gray-300 rounded-md md:w-60"
        onChange={handleQuerychange}/>
      
      <select onChange={handleSortChange} className="self-end w-48 text-gray-500 border-2 rounded bg-slate-100" value={sort}>
        <option value="default">Default Sorting</option>
        <option value="LowToHigh">Sort by price:Low-High</option>
        <option value="HighToLow">Sort by price:High-Low</option>
        <option value="AToZ">Sort by Name</option>
      </select>
        
      </div>
      
    <div className="grid gap-8 sm:grid-cols-3">
      {prod.map(function(data){
        return (<Product key={data.title} {...data}/>)
      })}
    </div>
      
    <div className="flex gap-2 m-6">
      <a className="w-10 h-10 py-1 font-semibold text-center text-white bg-red-500 border-2 border-red-500" href="">1</a>
      <a className="w-10 h-10 py-1 font-semibold text-center text-red-500 border-2 border-red-500" href="">2</a>
      <a className="w-10 h-10 py-1 font-semibold text-center text-red-500 border-2 border-red-500" href="">&rarr;</a>
    </div>
      
    </div>
      </div>
  ):(<Loading/>);
}

export default AllProducts;
