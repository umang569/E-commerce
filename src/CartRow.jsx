import React from 'react';
import { useState, useEffect } from 'react';
import { CiCircleRemove } from "react-icons/ci";
import {Link} from 'react-router-dom';

function CartRow({ item,quant,handleRemove, handleChange, cartitem}){
    
    const[count, setCount]=useState(quant);
    
    function handlerowChange(event){
        setCount(+event.target.value);
        handleChange(+event.target.value,item.id);
    }
    
    function removeCartItem() {
        handleRemove(item.id);
    }
    return (
        <tr className='text-black'>
            <td className="py-2 px-4 border-b flex items-center text-center justify-normal"><Link><CiCircleRemove onClick={removeCartItem}/></Link><img src={item.thumbnail} alt={item.title} className='h-16'/>{item.title}</td>
            <td className="py-2 px-4 border-b text-center">${item.price.toFixed(2)}</td>
            <td className="py-2 px-4 border-b text-center">
                <input value={count} type="number" className="border-2 text-center w-16" onChange={handlerowChange} /></td>
            <td className="py-2 px-4 border-b text-center">${(item.price * count).toFixed(2)}</td>
        </tr>
    );
};

export default CartRow;
