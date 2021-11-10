import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';


const Registration = () => {
    return ( 
        <div>
            <Navigation />
            <div className="w-full flex flex-col justify-center items-center py-24 login-part">
                <div className="flex flex-col shadow-md rounded-xl border-2 border-gray-200 py-5 px-5">
                    <i class="fas fa-user-plus mx-auto bg-gray-800 text-gray-200 text-6xl rounded-full shadow reg-icon"></i>
                    <p className="py-2 mt-10 px-3 shadow-md border-2 border-gray-200 rounded-lg"><i class="fas fa-at mr-2"></i> <input type="text"  placeholder="Enter your name" className="w-72 outline-none border-l-2 border-gray-500 pl-2 text-gray-700 font-base font-semibold " /></p>
                    <p className=" py-2 px-3 shadow-md border-2 border-gray-200 rounded-lg"><i class="fas fa-unlock-alt mr-2"></i> <input type="email"  placeholder="Enter your email" className="w-72 outline-none border-l-2 border-gray-500 pl-2 text-gray-700 font-base font-semibold " /></p>
                    <p className=" py-2 px-3 shadow-md border-2 border-gray-200 rounded-lg"><i class="fas fa-unlock-alt mr-2"></i> <input type="password"  placeholder="Enter your password" className="w-72 outline-none border-l-2 border-gray-500 pl-2 text-gray-700 font-base font-semibold " /></p>
                    <p className="py-2 px-3 shadow-md border-2 border-gray-200 rounded-lg"><i class="fas fa-unlock-alt mr-2"></i> <input type="password"  placeholder="Retype your password" className="w-72 outline-none border-l-2 border-gray-500 pl-2 text-gray-700 font-base font-semibold " /></p>
                    <button class="fancy mx-auto mt-3">
                        <span class="top-key"></span>
                        <a href="#" class="">Register</a>
                        <span class="bottom-key-1"></span>
                        <span class="bottom-key-2"></span>
                    </button>
                    <p className="mx-auto text-sm mt-2 mb-0 font-semibold">Already have an account? <Link to="/login">Login</Link></p>
                </div>
            </div>
            <Footer />
        </div>
     );
}
 
export default Registration;