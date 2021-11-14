import axios from 'axios';
import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import Rating from 'react-rating';
import useAuth from '../../../hooks/useAuth';
import FooterDeshboard from '../../Shared/Footer/FooterDeshboard';

import './addReview.css'

const AddReviews = () => {
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
    const [rate, setRate] = useState("");
    const [error, setError] = useState(false)
    const [isloding, setIsloading] = useState(false)

    const {user, logout} = useAuth()
    
    const onSubmit = data => {
        const anony = document.getElementById("anony");
        const userRev = document.getElementById("userRev");
        if(rate){
            if(anony.checked === true || userRev.checked === true){
                if(anony.checked === true){
                    data.anony = true;
                }
                else{
                    data.anony = false;
                }
                data.user_img = user.photoURL;
                data.rate= rate;
                setIsloading(true)
                axios.post('http://localhost:5000/review', data)
                .then(res=>{
                    reset();
                    setIsloading(false)
                    setError(false)
                    
                })
                .catch((error)=>{
                    setIsloading(false)
                    setError(false)
                    reset()
                })
            }
            else{
                setError(true)
                setRate("")
            }
        }
        else{
            setError(true)
        }

    };

    const checkrate = (rate) => {
        setRate(rate)
    }
    return ( 
        <div>
        <div className="md:p-4 dashboard-bg-align container">
            <h3 className="font-semibold text-2xl">Add Reviews</h3>
            <div className="order-title-underline"></div>
            { isloding ?<div class="loader">Loading...</div>:

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col shadow-md border-2 border-gray-100 mt-5 rounded-md">
                <div className="flex flex-col md:flex-row">
                    <div className="flex flex-col ml-4 mr-4 md:my-5 md:mx-12 my-4 ">
                        <h5 className="text-lg font-semibold">Basic Info</h5>
                        <label className="mt-2 text-base font-semibold ml-1">Name</label>
                        <input type="text" {...register("name")} value="Chandan Kumar Das" className="border-2 border-gray-200 w-72 py-1 px-2 rounded-lg shadow-md outline-none" readOnly />
                        <label className="mt-2 text-base font-semibold ml-1">Email</label>
                        <input {...register("email", { required: true })} className="border-2 border-gray-200 w-72 py-1 px-2 rounded-lg shadow-md outline-none"
                         readOnly value="chandanraj9074@gmail.com" />
                         <label className="mt-2 text-base font-semibold ml-1">Rate Us</label>
                        <Rating
                            // onRate={(rate)=>checkrate(rate)}
                            emptySymbol={<i className="far fa-star text-xl text-yellow-400"></i>}
                            fullSymbol={<i className="fas fa-star text-xl text-yellow-400"></i>}
                            fractions={2}
                            className=""
                            onClick={(value)=>checkrate(value)}
                        />                                          
                    </div>
                    <div className="border-r-2 border-gray-100 "></div>
                    <div  className="flex md:w-full flex-col md:flex-row md:my-5 md:mx-5 mb-4 mx-4">
                        <div className="md:ml-10">
                            <h5 className="text-lg font-semibold mb-3">Review</h5>
                            <textarea type="text" {...register("review")} required className="border-2 border-gray-200 w-72 md:w-96 h-40 resize-none rounded-lg py-2 px-3 rounded-lg shadow-md outline-none" placeholder="Write your Review" />
                        </div>
                        <div className=" mt-3 md:mt-auto md:mb-auto ">
                            <div className="flex items-center mb-4">
                                <label class="switch">
                                    <input type="checkbox" id="anony"/>
                                    <span class="slider"></span>
                                </label>
                                <p className="mb-0 font-semibold ml-3">Post as an Anonymous</p>
                            </div>
                            <div className="flex items-center">
                                <label class="switch">
                                    <input type="checkbox" id="userRev"/>
                                    <span class="slider"></span>
                                </label>   
                                <p className="mb-0 font-semibold ml-3">Post as our User</p>
                            </div>
                            {error? 
                            <Alert variant="warning" className="mt-3 text-center">
                                Pleace fill up all the field properly!!
                            </Alert>:null}
                            <button type="submit" className="post-btn mt-4 md:mx-auto ml-10">
                                    <div class="svg-wrapper-1">
                                        <div class="svg-wrapper">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                                <path fill="none" d="M0 0h24v24H0z"></path>
                                                <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <span>Post</span>
                                </button>
                        </div>
                    </div>
                </div>
                {errors.exampleRequired && <span>This field is required</span>}
                                                                                                                                                                                           
            </form>}
            <div className="container">
                <div className="flex flex-col md:flex-row justify-evenly py-14 md:py-0 bg-gray-100 mt-20 mb-10 rounded-full">
                    <div className="shadow-md border-2 border-gray-200 rounded-lg py-3 px-5 flex flex-col items-center md:-mt-10 md:-mb-10">
                        <i class="fas fa-users text-5xl mb-2 text-yellow-500"></i>
                        <span className="text-2xl font-bold">1300+</span>
                        <p className="text-2xl font-bold">Members</p>
                    </div>
                    <div className="shadow-md border-2 border-gray-200 rounded-lg py-3 px-5 flex flex-col items-center md:-mt-10 md:-mb-10">
                        <i class="fas fa-smile-wink text-5xl mb-2 text-yellow-500"></i>
                        <span className="text-2xl font-bold">1000+</span>
                        <p className="text-2xl font-bold">Happy Users</p>
                    </div>
                    <div className="shadow-md border-2 border-gray-200 rounded-lg py-3 px-5 flex flex-col items-center md:-mt-10 md:-mb-10">
                        <i class="fas fa-star text-5xl mb-2 text-yellow-500"></i>
                        <span className="text-2xl font-bold">4.9</span>
                        <p className="text-2xl font-bold">Rating</p>
                    </div>
                    <div className="shadow-md border-2 border-gray-200 rounded-lg py-3 px-5 flex flex-col items-center md:-mt-10 md:-mb-10">
                        <i class="fas fa-handshake text-5xl mb-2 text-yellow-500"></i>
                        <span className="text-2xl font-bold">50+</span>
                        <p className="text-2xl font-bold">Sponsors</p>
                    </div>
                </div>
            </div>
        </div>
        <FooterDeshboard />
        </div>
     );
}
 
export default AddReviews;