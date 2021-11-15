import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';


const Registration = () => {

    const {setEmail,setName, setPassword, createSingInWithEmail, error, password} = useAuth();
    const [verifyPass, setVarifyPass] = useState();

    const handleName = (e) =>{
        setName(e.target.value);
        // console.log(e.target.value)
    }
    const handleEmail = (e) =>{
        setEmail(e.target.value);
        // console.log(e.target.value)
    }
    const handlePassword = (e) =>{
        setPassword(e.target.value);
        // console.log(e.target.value)
    }
    const handleVarifyPass = (e) =>{
        setVarifyPass(e.target.value);
    }

    const handleRegister = (e) =>{
        e.preventDefault();
        console.log("nice")
        if(password === verifyPass){
            createSingInWithEmail(e)
        }
        else{
            alert("password don't match")
        }
    }

    return ( 
        <div>
            <Navigation />
            <div className="w-full flex flex-col justify-center items-center py-24 login-part">
                <div className="flex flex-col shadow-md rounded-xl border-2 border-gray-200 md:py-5 md:px-5  py-4 px-4">
                    <i class="fas fa-user-plus mx-auto bg-gray-800 text-gray-200 text-6xl rounded-full shadow reg-icon"></i>
                    <form className="flex flex-col" onSubmit={(e)=>handleRegister(e)}>
                        <p className="py-2 mt-10 px-3 shadow-md border-2 border-gray-200 rounded-lg"><i class="fas fa-at mr-2"></i> <input type="text" onChange={handleName}  placeholder="Enter your name" className="md:w-72 w-56 outline-none border-l-2 border-gray-500 pl-2 text-gray-700 font-base font-semibold " /></p>
                        <p className=" py-2 px-3 shadow-md border-2 border-gray-200 rounded-lg"><i class="fas fa-unlock-alt mr-2"></i> <input type="email" onChange={handleEmail} placeholder="Enter your email" className="md:w-72 w-56 outline-none border-l-2 border-gray-500 pl-2 text-gray-700 font-base font-semibold " /></p>
                        <p className=" py-2 px-3 shadow-md border-2 border-gray-200 rounded-lg"><i class="fas fa-unlock-alt mr-2"></i> <input type="password" onChange={handlePassword} placeholder="Enter your password" className="md:w-72 w-56 outline-none border-l-2 border-gray-500 pl-2 text-gray-700 font-base font-semibold " /></p>
                        <p className="py-2 px-3 shadow-md border-2 border-gray-200 rounded-lg"><i class="fas fa-unlock-alt mr-2"></i> <input type="password" onChange={handleVarifyPass} placeholder="Rewrite your password" className="md:w-72 w-56 outline-none border-l-2 border-gray-500 pl-2 text-gray-700 font-base font-semibold " /></p>
                        <button type="submit" class="fancy mx-auto mt-3">
                            <span class="top-key"></span>
                            <a class="">Register</a>
                            <span class="bottom-key-1"></span>
                            <span class="bottom-key-2"></span>
                        </button>
                    </form>
                    <p className="mx-auto text-sm mt-2 mb-0 font-semibold">Already have an account? <Link to="/login">Login</Link></p>
                </div>
            </div>
            <Footer />
        </div>
     );
}
 
export default Registration;