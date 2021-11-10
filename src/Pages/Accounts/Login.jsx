//import pakages
import React from 'react';
import Navigation from '../Shared/Navigation/Navigation';

// import files
import './accounts.css'

const Login = () => {
    return ( 
        <div>
            <Navigation />
            <div className="w-full flex justify-center items-center login-part">
                <div className="flex flex-col">
                    <i class="fas fa-user"></i>
                    <p className="py-2 px-3 shadow-md border-2 border-gray-200 rounded-lg"><i class="fas fa-at mr-2"></i> <input type="email"  placeholder="Enter your email" className="w-72 outline-none border-l-2 border-gray-500 pl-2 text-gray-700 font-base font-semibold " /></p>
                    <p className=" mb-2 py-2 px-3 shadow-md border-2 border-gray-200 rounded-lg"><i class="fas fa-unlock-alt mr-2"></i> <input type="password"  placeholder="Enter your password" className="w-72 outline-none border-l-2 border-gray-500 pl-2 text-gray-700 font-base font-semibold " /></p>
                    <p className="ml-auto mr-2 text-sm font-semibold">Forget Password?</p>
                    <button class="fancy mx-auto mt-2">
                        <span class="top-key"></span>
                        <a href="#" class="">Login</a>
                        <span class="bottom-key-1"></span>
                        <span class="bottom-key-2"></span>
                    </button>
                    <p className="mx-auto text-sm mt-2 font-semibold">Create a new account? Register</p>
                </div>
            </div>
        </div>
     );
}
 
export default Login;