import React, { useEffect, useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import FooterDeshboard from '../../Shared/Footer/FooterDeshboard';
import useAuth from '../../../hooks/useAuth';

import SingleMyOrder from './SingleMyOrder';

const MyOrders = () => {
    const {user} = useAuth();
    const [orders, setOrders] = useState([])
    const [isloding, setIsloading] = useState(false)
    useEffect(() => {
        setIsloading(true)
        fetch('https://fast-island-99199.herokuapp.com/orders')
            .then(res => res.json())
            .then(data =>{
                const usersOrders = data.filter((order) => order.email === user.email);
                setOrders(usersOrders)
                setIsloading(false)
            });
    }, [])

    const handleCancle = (id) =>{
        // console.log("dukhche", id)
        const confirmed = window.confirm("Are you sure, you want to delete this user?");
        if(confirmed){
            const url = `https://fast-island-99199.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: "DELETE"
            })
            .then(res => res.json())
            .then(res =>{
                if(res.deletedCount > 0){
                    alert("deleted successfully");
                    const remainingUser = orders.filter(order => order._id !== id);
                    setOrders(remainingUser);
                }
            })
        }
    }
    return ( 
        <div>
            <div className="dashboard-bg-align p-4">
                <h3 className="font-semibold text-2xl title-font">My Oders</h3>
                <div className="order-title-underline"></div>
                {orders.length?
                <div className="grid md:grid-cols-2 md:gap-4 grid-cols-1 mt-4">
                    {
                        orders.map(order => <SingleMyOrder key={order._id} order={order} handleCancle={handleCancle} />)
                    }
                </div> :  <img src="https://i.ibb.co/L81J3wt/no-result.png" alt="" className="opacity-30 mx-auto" />}
            </div>
            <FooterDeshboard />
        </div>
     );
}
 
export default MyOrders;