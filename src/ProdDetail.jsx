import React,{useEffect,useState} from "react";
import {useParams} from "react-router-dom";
import {getProductDetail,getProductslist} from './api';
import {Link} from 'react-router-dom';
import Loading from './Loading';
import NotFound from './NotFound';
import {Navigate} from 'react-router-dom';

function ProdDetail({onAddToCart,user}) {

  if(!(user)){
      return (<Navigate to="/login"/>)
   }
  
  const id = +(useParams().id);
  const [data,setdata] = useState([]);
  const[Load,setLoad]= useState(true);
  const[quantity,setquantity] = useState(1);

  
  useEffect(function () {
    const xyz = getProductDetail(id);
    xyz.then(function (prod){
      setdata(prod);
      setLoad(false);
    }).catch(function (){
      setdata([]);
      setLoad(false);
    })
  } , [id])
  function handlechange(event){
    setquantity(event.target.value);
  }
  
  function handleaddtocart(){
    onAddToCart(id,quantity);
    setquantity(1);
  }

  if(Load){
    return(<Loading/>);
  }
  if(data.length==0){
    return <NotFound/>;
  }
  
  
  return(
    <div className="grow px-6">
      <div className="max-w-6xl mx-auto border border-gray-400 
border-3 rounded-md bg-white py-4 px-6 my-8 ">
        <Link to="/" className="text-red-500  text-center text-xl  w-10 h-10 py-1">&larr; back</Link> 
        <div className=" flex flex-col md:flex-row">
      <div className="lg:w-3/5 xl:w-2/5">
      <img  src={data.thumbnail} alt="prod Image"/>
      </div>
      <div className="pl-6 text-gray-500 md:w-auto ">
      <h1 className="text-3xl">{data.title}</h1>
      <h2 className="text-xl font-bold my-4">${data.price}</h2>
      <p className="text-lg">{data.description}</p>
      <div className="my-6 flex gap-3">
        <input
          type="number"
          value={quantity}
          className="border border-gray-400 w-12 pl-3 rounded-sm"
          onChange={handlechange}/>
          
        <button className="text-white bg-red-500 py-1 px-6 rounded-md" onClick={handleaddtocart}>ADD TO CART</button>
      </div>
      </div>
           
      </div>
        <div className="flex justify-between"><div>
          {id>1 && <Link to={"/prodDetail/"+(id-1)} className="text-indigo-500  text-center text-xl  w-10 h-10 py-1">&larr; previous</Link>}
        </div>
        <div>
        <Link to={"/prodDetail/"+(id+1)} className="text-indigo-500 text-center text-xl  w-10 h-10 py-1">next
          &rarr;</Link></div>
      </div>
    </div>
      </div>
  );
}  
export default ProdDetail;