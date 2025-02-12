import React, { useState, useEffect } from 'react';
import { IoIosArrowRoundBack } from "react-icons/io";
import {Link} from 'react-router-dom';
import {getProductDetail} from './api';
import CartRow from './CartRow';
import {Navigate} from 'react-router-dom';

function Cart({ cartitem, UpdateCart, user }){

    if(!(user)){
          return (<Navigate to="/login"/>)
       }
    
    const [cartItems, setCartItems] = useState([]);
    const prodid = Object.keys(cartitem);
    const[localcart,setlocalcart] = useState(cartitem);
    const[total,settotal] = useState(0);

    function CartUpdate(){
        UpdateCart(localcart);
    }

    useEffect(function () {

        const myProdPromise = prodid.map(function (item) {
            return getProductDetail(+(item));
        });

        setlocalcart(cartitem);

        Promise.all(myProdPromise).then(function (products){
            setCartItems(products);
            findtotal(products);
        });

        let tot = 0;
        function findtotal(products){
            products.forEach(function(item){
                tot += item.price * cartitem[item.id];
            });
            settotal(tot);
        }

    }, [cartitem]);
    function handleRemove(id){
        const productid = id;
        const newcart = {...cartitem};
        delete newcart[productid];
        UpdateCart(newcart);
    };

    function handleChange(quant,id){
        const newval = quant;
        const valprodid = id;
        const newLocalcart = {...localcart,[valprodid]:newval};
        setlocalcart(newLocalcart);
    }


    return (
        <div className="grow my-8 ">
            <div className="px-8 py-4 max-w-6xl mx-auto bg-white">
                <Link className="text-4xl inline-block hover:bg-base-taupe hover:rounded-full hover:text-white text-base-taupe p-2" to="/">
                    <IoIosArrowRoundBack className="text-red-600"/>
                </Link>
                <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
                <div className="flex flex-col gap-4 overflow-x-auto">
                    <table className="min-w-full border-2">
                        <thead>
                            <tr className='border-y-2 text-gray-500 text-xl'>
                                <th className="py-2 px-4 ">Product</th>
                                <th className="py-2 px-4 ">Price</th>
                                <th className="py-2 px-4 ">Quantity</th>
                                <th className="py-2 px-4 ">Subtotal</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map(item => (
                                <CartRow key={item.id} item={item} quant={localcart[item.id]} handleRemove={handleRemove} cartitem={cartitem} handleChange={handleChange}/>
                            ))}
                        </tbody>
                    </table>
                    <div className="flex justify-between p-2 border border-gray-200 rounded-md borde">
                        <div className="flex space-x-2">
                          <input
                            className="px-2 py-1 text-xs text-center border border-gray-600 rounded-md sm:text-sm md:w-48 w-36 md:px-4 md:py-2 md:text-lg outline-0"
                            type="text"
                            placeholder="Coupon Code"
                          />
                          <button className="px-2 py-1 text-xs text-white bg-red-500 rounded-md sm:text-sm md:px-4 md:py-2 md:text-lg">
                            Apply Coupon
                          </button>
                        </div>
                        <button
                          onClick={CartUpdate}
                          className="hover:bg-red-500 px-2 py-1 text-xs text-gray-600 bg-red-400 rounded-md sm:text-sm md:px-4 md:py-2 md:text-lg"
                        >
                          Update Cart
                        </button>
                      </div>
                </div>

                {/* bill table */}
                <div className='flex justify-end mt-6'>
                <table className='sm:w-2/5 border-2 p-4 w-full'>
                    <thead className=' bg-gray-200'>
                        <tr>
                            <td colSpan="2" className='text-lg py-2 px-4 border-b'>Cart details</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr >
                            <td className='py-2 px-4 border-b'>Subtotal</td>
                            <td className='py-2 px-4 border-b'>${total.toFixed(2)}</td>
                        </tr>
                        <tr >
                            <td className='py-2 px-4 border-b'>Total</td>
                            <td className='py-2 px-4 border-b'>${total.toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <Link to="/checkout">
                                    <button className="mt-4 text-red-400 w-full text-white align-center py-2 px-4 rounded hover:text-green-500">
                                        Proceed to Checkout
                                    </button>
                                </Link>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
    );
};

export default Cart;
