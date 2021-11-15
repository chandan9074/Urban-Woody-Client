import axios from 'axios';
import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import FooterDeshboard from '../../Shared/Footer/FooterDeshboard';

import './manageAdmin.css'

const ManageAdmin = () => {
    const { register, handleSubmit,reset, formState: { errors } } = useForm();
    const [isloding, setIsloading] = useState(false);
    const [error, setError] = useState(false)
    const onSubmit = data =>{
        const sure = document.getElementById("cbx");
        console.log(data)
        if(sure.checked === true){
            const confirmed = window.confirm("Now this user will be Admin!!!");
            if(confirmed ){
                setIsloading(true)
                    axios.put('https://fast-island-99199.herokuapp.com/users/admin', data)
                    .then(res=>{
                        reset();
                        setIsloading(false)
                        setError(false)
                    })
                    .catch((error)=>{
                        setIsloading(false)
                        reset()
                        setError(false)
                    })
            }
            else{
                reset();
                setError(false)
            }
        }
        else{
            setError(true)
        }
    };
    return ( 
        <div >
            <div className="dashboard-bg-align md:p-4 container">
            <h3 className="font-semibold text-2xl title-font">Manage Admin</h3>
            <div className="order-title-underline"></div>
            <div className="flex">
                <div className="md:w-1/2">
                    <form onSubmit={handleSubmit(onSubmit)} className="shadow-md border-2 border-gray-100 rounded  py-4 px-5 mt-4">
                        <h4 className="text-base font-semibold">Make New Admin</h4>
                        <p className=" flex items-center py-2 px-2 m-0 shadow-md rounded-lg md:w-96 w-66 border-2 border-gray-200"><i class="fas fa-at text-gray-400"></i> <input {...register("email")} required className="ml-2 outline-none md:w-60  bg-transparent" type="email" placeholder="Enter new admin email" /></p>

                        <div className="flex mt-3 ml-5">
                            <div class="cntr">
                                <input  type="checkbox" id="cbx" class="hidden-xs-up" />
                                <label for="cbx" class="cbx"></label>
                            </div>
                            <p className="my-0 ml-3 text-sm">Are your sure to make this user admin?</p>
                        </div>
                        {error? 
                        <Alert variant="warning" className="mt-3 text-center">
                            Please checked this condition!!
                        </Alert>:null}
                        <button type="submit" className="post-btn mt-4 ml-4">
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
                    <p className="bg-yellow-300 text-3xl font-bold py-2 px-3 rounded-lg w-4/5 mt-4 mb-3"> <i class="fas fa-skull-crossbones text-red-700"></i> Be Careful!!!</p>
                    <div className="border-l-4 border-gray-300 pl-4">
                        <p className="bg-blue-300 text-base font-bold py-2 px-3 rounded-lg mb-2 w-3/4">An Admin can control all of the Users</p>
                        <p className="bg-blue-300 text-base font-bold py-2 px-3 rounded-lg mb-2 w-3/4">An Admin can manage the user order</p>
                        <p className="bg-blue-300 text-base font-bold py-2 px-3 rounded-lg mb-2 w-3/4">An Admin can manage the product of the site</p>
                        <p className="bg-blue-300 text-base font-bold py-2 px-3 rounded-lg mb-2 w-3/4">An Admin can make another admin</p>
                    </div>
                </div>
                <div className="w-1/2 prod-form-img h-full py-20 px-14">
                        <i class="fas fa-user-shield buycart-img opacity-20"></i>
                    </div>
            </div>
        </div>
        <FooterDeshboard />
        </div>
     );
}
 
export default ManageAdmin;