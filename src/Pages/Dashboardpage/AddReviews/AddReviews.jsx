import React from 'react';
import { useForm } from "react-hook-form";
import Rating from 'react-rating';

import './addReview.css'

const AddReviews = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    const checkrate = (rate) => {
        alert(rate)
    }
    return ( 
        <div>
            <h3 className="font-semibold text-2xl">Add Reviews</h3>
            
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col shadow-md border-2 border-gray-100 mt-5 rounded-md">
                <div className="flex">
                    <div className="flex flex-col my-5 mx-5">
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
                    <div  className="flex my-5 mx-5">
                        <div>
                            <h5 className="text-lg font-semibold mb-3">Review</h5>
                            <textarea type="text" {...register("review")} className="border-2 border-gray-200 w-96 h-40 resize-none rounded-lg py-2 px-3 rounded-lg shadow-md outline-none" placeholder="Write your Review" />
                        </div>
                        <div className="my-auto ml-10">
                            <div className="flex items-center mb-4">
                                <label class="switch">
                                    <input type="checkbox" />
                                    <span class="slider"></span>
                                </label>
                                <p className="mb-0 font-semibold ml-3">Post as an Anonymous</p>
                            </div>
                            <div className="flex items-center">
                                <label class="switch">
                                    <input type="checkbox" />
                                    <span class="slider"></span>
                                </label>   
                                <p className="mb-0 font-semibold ml-3">Post as our User</p>
                            </div>
                            <button type="submit" className="post-btn mt-4 mx-auto">
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
                                                                                                                                                                                           
            </form> 
        </div>
     );
}
 
export default AddReviews;