//import pakages
import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';
import useAuth from '../../hooks/useAuth';

// import files
import './accounts.css'
import Button from '@restart/ui/esm/Button';

const Login = () => {

    const {setEmail, setPassword, signInWithEmail, googleSignIn, error, setError} = useAuth()    

    const handleEmail = (e) =>{
        setEmail(e.target.value);
    }
    const handlePassword = (e) =>{
        setPassword(e.target.value);
    }
    return ( 
        <div>
            <Navigation />
            <div className="w-full flex flex-col justify-center items-center py-24 login-part">
                <div className="flex flex-col shadow-md rounded-xl border-2 border-gray-200 md:py-5 md:px-5  py-4 px-4">
                    <i class="fas fa-user mx-auto bg-gray-800 text-gray-200 text-7xl rounded-full shadow login-icon"></i>
                    <form onSubmit={(e)=>signInWithEmail(e)} className="flex flex-col">
                        <p className="py-2 mt-10 px-3 shadow-md border-2 border-gray-200 rounded-lg"><i class="fas fa-at mr-2"></i> <input type="email" onBlur={handleEmail}  placeholder="Enter your email" className="md:w-72 w-54 outline-none border-l-2 border-gray-500 pl-2 text-gray-700 font-base font-semibold " /></p>
                        <p className=" mb-2 py-2 px-3 shadow-md border-2 border-gray-200 rounded-lg"><i class="fas fa-unlock-alt mr-2"></i> <input type="password" onBlur={handlePassword}  placeholder="Enter your password" className="md:w-72 w-54 outline-none border-l-2 border-gray-500 pl-2 text-gray-700 font-base font-semibold " /></p>
                        <Link to="/login" className="ml-auto mr-2 mb-3 text-sm font-semibold">Forget Password?</Link>
                        <button type="submit" class="fancy mx-auto mt-2">
                            <span class="top-key"></span>
                            <a class="">Login</a>
                            <span class="bottom-key-1"></span>
                            <span class="bottom-key-2"></span>
                        </button>
                    </form>
                    <p className="mx-auto text-sm mt-2 mb-0 font-semibold">Create a new account? <Link to="/registration">Register</Link></p>
                </div>
                <div className="py-3 px-5 google-part shadow-md">
                    <button onClick={googleSignIn} className="gmail-btn">
                        <span>Continue with gmail</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 74 74" height="34" width="34">
                            <circle stroke-width="3" stroke="black" r="35.5" cy="37" cx="37"></circle>
                            <path fill="black" d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"></path>
                        </svg>  
                    </button>
                </div>
            </div>
            <Footer />
        </div>
     );
}
 
export default Login;