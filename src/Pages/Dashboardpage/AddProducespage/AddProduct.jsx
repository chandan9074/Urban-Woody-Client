import axios from 'axios';
import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Rating from 'react-rating';
import FooterDeshboard from '../../Shared/Footer/FooterDeshboard';

import './addProduct.css';

const AddProduct = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [rating, setRating] = useState("");
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)
    const [isloding, setIsloading] = useState(false)

    const onSubmit = data =>{
        if(rating){
            data.rate = rating;
            setIsloading(true)
            axios.post('https://fast-island-99199.herokuapp.com/product', data)
            .then(res=>{
                console.log("chandan", res)
                reset();
                setIsloading(false)
                setError(false)
                setSuccess(true)
                
            })
            .catch((error)=>{
                setIsloading(false)
                reset()
                setError(false)
            })
        }
        else{
            setError(true)
        }
    };

    const handleSuccess= () =>{
        setSuccess(false)
    }

    const checkrate = (rate) => {
        setRating(rate)
    }
    return ( 
        <div>
            <div className="dashboard-bg-align p-4">
                <h3 className="text-2xl font-semibold title-font">Add Products</h3>
                <div className="order-title-underline"></div>
                <div className="flex mt-4">
                    <div className="md:w-1/2 w-full">
                        {
                            isloding ?<div className="w-2/5 mt-60"><div class="loader">Loading...</div></div>:
                        
                            <div>
                                {success ? 
                                <div className="shadow-md border-2 mt-44 border-gray-100 rounded  py-4 px-4  w-3/5 flex flex-col justify-center items-center bg-green-200">
                                    <p className="text-2xl font-bold">Successfully Added!!</p>
                                    <button  className="sing-btn" onClick={handleSuccess}><span>Add more</span></button>
                                </div>:
                                <form onSubmit={handleSubmit(onSubmit)} className="shadow-md border-2 border-gray-100 rounded  py-4 px-4  w-full">
                                    <label className="text-lg" >Product Title:</label>
                                    <input {...register("title")} required className=" outline-none w-full py-2 px-2 rounded-md border-2 border-gray-200 bg-transparent shadow-md" type="text" placeholder="Enter product title" />

                                    <label className="text-lg mt-3" >Product Image:</label>
                                    <input {...register("img")} required className=" outline-none w-full py-2 px-2 rounded-md border-2 border-gray-200 bg-transparent shadow-md" type="text" placeholder="Enter product image url" />

                                    <label className="text-lg mt-3" >Product Description:</label>
                                    <textarea {...register("des")} required className=" outline-none w-full py-2 px-2 rounded-md border-2 border-gray-200 bg-transparent shadow-md h-40 resize-none" type="text" placeholder="Enter product description" />

                                    <div className="flex justify-between mt-3">
                                        <div className="w-2/5">
                                            <label className="text-lg" >Product Rating:</label>
                                            <Rating
                                            // required
                                            // onRate={(rate)=>checkrate(rate)}
                                            emptySymbol={<i className="far fa-star text-xl text-yellow-400"></i>}
                                            fullSymbol={<i className="fas fa-star text-xl text-yellow-400"></i>}
                                            fractions={2}
                                            className="py-1 pl-1"
                                            onClick={(value)=>checkrate(value)}
                                        />        
                                        </div>
                                        <div className="w-2/5">
                                            <label className="text-lg" >Product Price:</label>
                                            <input {...register("price")} required  className=" outline-none w-full py-2 px-2 rounded-md border-2 border-gray-200 bg-transparent shadow-md" type="number" placeholder="Enter product price" />
                                        </div>
                                    </div>
                                    {error? 
                                    <Alert variant="warning" className="mt-3 text-center">
                                        Pleace fill up all the field properly!!
                                    </Alert>:null}
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
                                    {errors.exampleRequired && <span>This field is required</span>}
                                </form>} 
                        </div>}
                        
                    </div>
                    <div className="w-1/2 h-full py-20 px-14 prod-form-img">
                        <i class="fas fa-cart-plus buycart-img opacity-20"></i>
                    </div>
                </div>

            </div>
            <FooterDeshboard />
        </div>
     );
}
 
export default AddProduct;