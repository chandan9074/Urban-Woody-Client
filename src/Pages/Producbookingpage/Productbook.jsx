import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import Navigation from '../Shared/Navigation/Navigation';

import Footer from '../Shared/Footer/Footer';
import './productBook.css';
import { useParams, useHistory } from 'react-router';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';
import { Alert } from 'react-bootstrap';

const ProductBook = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [isloding, setIsloading] = useState(false);
    const [toggleForm, setToggleForm] = useState(false);
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(false)
    const {user, admin} = useAuth();
    const {id} = useParams();
    const [quantity, setQuantity] = useState(1);
    const [newPrice, setNewprice] = useState(0);
    const [mainprice, setMainprice] = useState(0);
    const history = useHistory();

    const newdate = new Date();
    const localDate = newdate.toLocaleDateString();

    useEffect(() => {
        setIsloading(true)
        fetch(`https://fast-island-99199.herokuapp.com/product/${id}`)
            .then(res => res.json())
            .then(data =>{
                setProducts(data)
                setNewprice(data.price)
                setMainprice(data.price)
                setIsloading(false)
            });
    }, [])

    const onSubmit = data => {
        const check = document.getElementById("cbx");
        
        data.quantity = quantity;
        data.prod_id = id;
        data.panding = true;
        data.prod_title = products.title; 
        data.prod_img = products.img;
        data.prod_des = products.des;
        data.prod_rate = products.rate;
        data.user_img = user.photoURL;
        delete data.checkUser;
        if(check.checked === true){
            setIsloading(true)
            axios.post('https://fast-island-99199.herokuapp.com/orders', data)
            .then(res=>{
                console.log("chandan", res)
                reset();
                setIsloading(false)
                setToggleForm(false)
                setError(false)
                history.push("/dashboard/my-orders");
                
            })
            .catch((error)=>{
                setIsloading(false)
                setError(false)
                reset()
            })
        }
        else{
           setError(true)
        }
    };

    const handlePlus = () =>{
        const price = quantity + 1;
        const newprice = mainprice * price;
        setNewprice(newprice)
        setQuantity(quantity + 1);
    }

    const handleMinus = () =>{
        if(quantity>1){
            const price = quantity - 1;
            const newprice = mainprice * price;
            setNewprice(newprice)
            setQuantity(quantity - 1);
        }
    }

    const handleToggleForm = () =>{
        setToggleForm(true)
    }

    return ( 
        <div>
            <Navigation />
            <div className="container">
                <h1 className="text-3xl font-bold mt-3 text-center title-font">Order Here</h1>
                <div className="order-title-underline mx-auto md:mb-20 mb-10"></div>
                <div className="w-full flex flex-col items-center justify-center mb-20">
                    {isloding ?<div class="loader">Loading...</div>:

                    <div className="flex md:w-4/6 flex-col md:flex-row shadow-md border-2 border-gray-100 p-4">
                        <img src={products.img} alt="" className="w-72 h-72 md:-ml-10" />
                        <div className="py-4 md:pl-10 pl-2 md:pr-4 pr-2 md:w-3/4">
                            <h3 className="text-3xl font-semibold">{products.title}</h3>
                            <p className="text-base mt-3 font-semibold text-justify line-elipsis">{products.des}</p>
                            <div className="flex justify-between items-center mx-4 mt-3">
                                <p className="text-2xl font-semibold">$ {newPrice}</p>
                                <Rating
                                    readonly
                                    placeholderRating={products.rate}
                                    emptySymbol={<i className="far fa-star text-yellow-400"></i>}
                                    placeholderSymbol={<i className="fas fa-star text-yellow-400"></i>}
                                    fullSymbol={<i className="fas fa-star text-yellow-400"></i>}
                                />
                            </div>
                            <div className="flex justify-between mx-3 mt-3">
                                <div className="flex justify-center items-center">
                                    <button onClick={handlePlus} className="plus-minus-btn bg-gray-300 px-2 py-1 rounded-lg text-gray-100"><i class="fas fa-plus"></i></button>
                                    <p className="m-0 text-3xl font-semibold mx-2">{quantity}</p>
                                    <button onClick={handleMinus} className="plus-minus-btn bg-gray-300 px-2 py-1 rounded-lg text-gray-100"><i class="fas fa-minus"></i></button>
                                </div>
                                <div>
                                    {admin ? <Link to="/dashboard" className="sing-btn"><span>Dashboard</span></Link>:
                                    <button onClick={handleToggleForm} className="sing-btn"><span>Checkout</span></button>}
                                </div>
                            </div>
                        </div>
                    </div>}
                    {!toggleForm ? null:
                    <div>
                        {isloding ?<div></div>:
                        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col md:flex-row shadow-md border-2 border-gray-100 mt-5 rounded-md">
                        <div className="flex flex-col md:m-5 m-4">
                            <h5 className="text-2xl font-semibold">Basic Info</h5>
                            <label className="mt-2 text-base font-semibold ml-1">Name</label>
                            <input type="text" {...register("name")} value={user.displayName} className="border-2 border-gray-200 w-72 py-1 px-2 rounded-lg shadow-md outline-none" readOnly />

                            <label className="mt-2 text-base font-semibold ml-1">Email</label>
                            <input type="text" {...register("email")} value={user.email} className="border-2 border-gray-200 w-72 py-1 px-2 rounded-lg shadow-md outline-none" readOnly />

                            <label className="mt-2 text-base font-semibold ml-1">Date</label>
                            <input type="text" {...register("date")} value={localDate} className="border-2 border-gray-200 w-72 py-1 px-2 rounded-lg shadow-md outline-none" readOnly />

                        </div>
                        <div className="border-r-2 border-gray-100 "></div>
                        <div className="flex flex-col md:m-5 m-4">
                            <h5 className="text-2xl font-semibold">Order Details</h5>
                            <label className="mt-2 text-base font-semibold ml-1">Address</label>
                            <input type="text" {...register("address")} required placeholder="Enter your shipping address" className="border-2 border-gray-200 w-72 py-1 px-2 rounded-lg shadow-md outline-none" />

                            <label className="mt-2 text-base font-semibold ml-1">Transection Number</label>
                            <input type="text" {...register("transId")} required placeholder="Enter your payment trans id" className="border-2 border-gray-200 w-72 py-1 px-2 rounded-lg shadow-md outline-none" />

                            <label className="mt-2 text-base font-semibold ml-1">Phone Number</label>
                            <input type="text" {...register("number")} required className="border-2 border-gray-200 w-72 py-1 px-2 rounded-lg shadow-md outline-none" placeholder="Enter your phone number" />

                            <label className="mt-2 text-base font-semibold ml-1">Bill</label>
                            <input type="text" {...register("bill")} required value={newPrice} className="border-2 border-gray-200 w-72 py-1 px-2 rounded-lg shadow-md outline-none" readOnly />

                        </div>
                        <div className="flex flex-col my-auto md:ml-5 md:mr-7 m-4">
                            <div class="cntr flex">
                                <input {...register("checkUser")} type="checkbox" id="cbx" class="hidden-xs-up" />
                                <label for="cbx" class="cbx"></label>
                            <p className="my-0 ml-3 text-sm">I agree to accept all terms and conditions</p>
                            </div>
                            {error? 
                            <Alert variant="warning" className="mt-3 text-center">
                                Please checked this condition!!
                            </Alert>:null}
                            <button type="submit" className="sing-btn mt-3 mx-auto md:mb-0 mb-4"><span>Pay</span></button>
                        </div>
                        {errors.exampleRequired && <span>This field is required</span>}
                        </form>}
                    </div>}
                </div>
                
            </div>
            <Footer />
        </div>
     );
}
 
export default ProductBook;