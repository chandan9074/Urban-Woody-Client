import React from 'react';
import { useForm } from 'react-hook-form';
import Rating from 'react-rating';

import './addProduct.css';

const AddProduct = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    const checkrate = (rate) => {
        alert(rate)
    }
    return ( 
        <div>
            <h3 className="text-2xl font-semibold">Add Products</h3>

            <div>
                <form onSubmit={handleSubmit(onSubmit)} className="shadow-md border-2 border-gray-100 rounded  py-4 px-4 mt-4 w-1/2">
                    <label className="text-lg" >Product Title:</label>
                    <input {...register("email", { required: true })} className=" outline-none w-full py-2 px-2 rounded-md border-2 border-gray-200 bg-transparent shadow-md" type="email" placeholder="Enter product title" />

                    <label className="text-lg mt-3" >Product Image:</label>
                    <input {...register("email", { required: true })} className=" outline-none w-full py-2 px-2 rounded-md border-2 border-gray-200 bg-transparent shadow-md" type="email" placeholder="Enter product image url" />

                    <label className="text-lg mt-3" >Product Description:</label>
                    <textarea {...register("email", { required: true })} className=" outline-none w-full py-2 px-2 rounded-md border-2 border-gray-200 bg-transparent shadow-md h-40 resize-none" type="email" placeholder="Enter product description" />

                    <div className="flex justify-between mt-3">
                        <div className="w-2/5">
                            <label className="text-lg" >Product Rating:</label>
                            <Rating
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
                            <input {...register("email", { required: true })} className=" outline-none w-full py-2 px-2 rounded-md border-2 border-gray-200 bg-transparent shadow-md" type="email" placeholder="Enter product price" />
                        </div>
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
                    {errors.exampleRequired && <span>This field is required</span>}
                </form>
                
            </div>
        </div>
     );
}
 
export default AddProduct;