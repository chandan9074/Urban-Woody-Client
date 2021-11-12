import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';

import './myOrders.css';

const SingleMyOrder = ({order, handleCancle}) => {

    const {_id, prod_id, bill, panding, quantity} = order;

    const [proOrders, setProOrders] = useState([])
    const [isloding, setIsloading] = useState(false)
    useEffect(() => {
        setIsloading(true)
        fetch(`http://localhost:5000/product/${prod_id}`)
            .then(res => res.json())
            .then(data =>{
                setProOrders(data)
                setIsloading(false)
            });
    }, [])

    const handlesShipping = () =>{
        alert("This feature will be comming soon !!")
    }

    return ( 
        <div>
            {isloding ?<div class="loader">Loading...</div>:
            <div className="flex shadow-md p-4 rounded-lg">
                <div>
                    <img src="https://i.ibb.co/YWkrnmV/pexels-photo-6114955.jpg" alt="" className="w-52 h-52 rounded-lg" />
                    
                </div>
                <div className="w-72 ml-4">
                    <h1 className="text-2xl font-semibold mb-0">{proOrders.title}</h1>
                    <div className="order-title-underline mb-3"></div>
                    <p className="line-elipsis text-justify mb-3 text-sm font-semibold">{proOrders.des}</p>
                    <div className="flex justify-between items-center mt-1">
                        <Rating
                            readonly
                            placeholderRating={proOrders.rate}
                            emptySymbol={<i className="far fa-star text-yellow-400"></i>}
                            placeholderSymbol={<i className="fas fa-star text-yellow-400"></i>}
                            fullSymbol={<i className="fas fa-star text-yellow-400"></i>}
                        />
                        <p className="text-2xl font-bold m-0 ">$ {bill}</p>
                    </div>
                    <div className="flex justify-between items-center mt-3">
                        <div >
                            {panding ? <div className="flex items-center"> <p className="mb-0 mt-0 panding-btn rounded">Panding</p><span className="rounded pan-quantity ml-2">{quantity} pic</span></div>: <div className="flex items-center"><p className="mb-0 mt-0 shipping-btn rounded">Shipping</p><span className="rounded ship-quantity ml-2">{quantity} pic</span></div>
                            }
                        </div>
                        {panding ? 
                        <button onClick={()=>handleCancle(_id)} class="noselect"><span class="text">Cancel</span><span class="icon"><svg viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path></svg></span></button>:
                        <button onClick={handlesShipping} class="shipselect"><span class="text">Shipping Info</span><span class="icon"><svg viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path></svg></span></button>}
                    </div>
                </div>
            </div>}
        </div>
     );
}
 
export default SingleMyOrder;