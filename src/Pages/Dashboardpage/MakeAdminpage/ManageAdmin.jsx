import React from 'react';
import { useForm } from 'react-hook-form';
import FooterDeshboard from '../../Shared/Footer/FooterDeshboard';

import './manageAdmin.css'

const ManageAdmin = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return ( 
        <div >
            <div className="dashboard-bg-align p-4">
            <h3 className="font-semibold text-2xl">Manage Admin</h3>
            <div className="order-title-underline"></div>
            <div className="flex">
                <div className="w-1/2">
                    <form onSubmit={handleSubmit(onSubmit)} className="shadow-md border-2 border-gray-100 rounded  py-4 px-5 mt-4">
                        <h4 className="text-base font-semibold">Make New Admin</h4>
                        <p className=" py-2 px-2 m-0 shadow-md rounded-lg w-96 border-2 border-gray-200"><i class="fas fa-at text-gray-400"></i> <input {...register("email", { required: true })} className=" ml-2 outline-none w-60 bg-transparent" type="email" placeholder="Enter new admin email" /></p>

                        <div className="flex mt-3 ml-5">
                            <div class="cntr">
                                <input {...register("checkUser", { required: true })}  type="checkbox" id="cbx" class="hidden-xs-up" />
                                <label for="cbx" class="cbx"></label>
                            </div>
                            <p className="my-0 ml-3 text-sm">Are your sure to make this user admin?</p>
                        </div>
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
                </div>
                <div>chandan</div>
            </div>
        </div>
        <FooterDeshboard />
        </div>
     );
}
 
export default ManageAdmin;