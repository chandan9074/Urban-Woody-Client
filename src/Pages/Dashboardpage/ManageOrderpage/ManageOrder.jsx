import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

import './manageOrder.css'

const ManageOrder = () => {
    const sample = [1, 2, 3, 4];
    const {user, logout} = useAuth()

    const [orders, setOrders] = useState([])
    const [isloding, setIsloading] = useState(false)
    useEffect(() => {
        setIsloading(true)
        getOrders();
    }, [])

    const getOrders = () =>{
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data =>{
                setOrders(data)
                setIsloading(false)
            });
    }

    const handleDelete = (id) =>{
        const confirmed = window.confirm("Are you sure, you want to delete this orders?");
        if(confirmed){
            const url = `http://localhost:5000/orders/${id}`;
            fetch(url, {
                method: "DELETE"
            })
            .then(res => res.json())
            .then(res =>{
                if(res.deletedCount > 0){
                    alert("deleted successfully!!");
                    const remainingOrder = orders.filter(order => order._id !== id);
                    setOrders(remainingOrder);
                }
            })
        }
    }

    const handleUpdate = (id, orderSt) =>{
        if(orderSt===true){
            const newOrderSt = false;
            const updateOrder ={newOrderSt}
            fetch(`http://localhost:5000/orders/${id}`, {
                method: "PUT",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(updateOrder)
            })
            .then(res=>res.json())
            .then(res=>{
                if(res.modifiedCount > 0){
                    alert("updated successfully")
                    getOrders();
                }
            })
        }
    }

    return ( 
        <div>
            <h3 className="font-semibold text-2xl">Manage Orders</h3>

            <div>
                <div className="flex w-full table-head-part rounded-md mb-3 mt-5">
                    <h5 className="user-img-st-quan-part py-2 text-center m-0 text-gray-200 text-base font-semibold">User</h5>

                    <h5 className="user-date-part py-2 text-center m-0 text-gray-200 text-base font-semibold">Date</h5>

                    <h5 className="user-other py-2 text-center m-0 text-gray-200 text-base font-semibold">User Name</h5>

                    <h5 className="user-other py-2 text-center m-0 text-gray-200 text-base font-semibold">Product Name</h5>

                    <h5 className="user-img-st-quan-part py-2 text-center m-0 text-gray-200 text-base font-semibold">Quantity</h5>

                    <h5 className="user-other py-2 text-center m-0 text-gray-200 text-base font-semibold">Amount</h5>

                    <h5 className="user-img-st-quan-part py-2 text-center m-0 text-gray-200 text-base font-semibold">Status</h5>

                    <h5 className="user-other py-2 text-center m-0 text-gray-200 text-base font-semibold">Actions</h5>
                </div>
                {isloding ?<div class="loader">Loading...</div>:
                <div>
                    {
                        orders.map(order =>
                        <div className="flex w-full shadow-md rounded-md mb-2 border-2 border-gray-100 hover:bg-gray-100">
                            <h5 className="user-img-st-quan-part py-4 text-center m-0 text-gray-800 text-base font-semibold">{order.user_img?<img src={order.user_img} alt="" className="w-9 rounded-full mx-auto" />:<i class="fas fa-user text-2xl"></i>}</h5>

                            <h5 className="user-date-part my-auto text-center m-0 text-gray-800 text-base font-semibold">{order.date}</h5>

                            <h5 className="user-other my-auto text-center m-0 text-gray-800 text-base font-semibold">{order.name}</h5>

                            <h5 className="user-other my-auto text-center m-0 text-gray-800 text-base font-semibold">{order.prod_title}</h5>

                            <h5 className="user-img-st-quan-part my-auto text-center m-0 text-gray-800 text-base font-semibold">{order.quantity} pic</h5>

                            <h5 className="user-other my-auto text-center m-0 text-gray-800 text-base font-semibold">$ {order.bill}</h5>
                            {order.panding? 
                            <h5 className="user-img-st-quan-part my-auto text-center m-0 text-gray-800 text-base font-semibold"><span className="pan-quantity rounded-md">Panding</span></h5>:
                            <h5 className="user-img-st-quan-part my-auto text-center m-0 text-gray-800 text-base font-semibold"><span className="ship-quantity rounded-md">Shipping</span></h5>}

                            <h5 className="user-other my-auto text-center m-0 text-gray-800 text-base font-semibold">
                                <button onClick={()=>handleDelete(order._id)} class="noselect mx-auto"><span class="text">Cancel</span><span class="icon"><svg viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path></svg></span></button>

                                <button onClick={()=>handleUpdate(order._id, order.panding)} class="select-btn mx-auto mt-2"><span class="text">Aprove</span><span class="icon"><i class="fas fa-check text-white"></i></span></button>
                            </h5>
                        </div>
                        )
                    }
                </div>}
            </div>
        </div>
     );
}
 
export default ManageOrder;