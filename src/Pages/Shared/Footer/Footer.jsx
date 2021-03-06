//import pakages
import React from 'react';
import {
  Link
} from "react-router-dom";

// import files 
import './footer.css'

const Footer = () => {
    return ( 
        <div className="relative footer-back">
            <svg className="absolute footer-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#5f9ea0" fill-opacity="1" d="M0,0L60,16C120,32,240,64,360,69.3C480,75,600,53,720,69.3C840,85,960,139,1080,176C1200,213,1320,235,1380,245.3L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
            <div className="container flex justify-between">
                <div className="z-10 md:mt-20  md:pt-0 footer-details w-7/12 flex flex-col">
                    <div className="flex justify-between mt-10 md:mt-0">
                        <div className="w-14 md:w-auto">
                            <h1 className="text-xl font-bold  mb-2">Useful Links</h1>
                            <Link className="text-gray-800 text-sm font-semibold">Dashboard</Link><br />
                            <Link className="text-gray-800 text-sm font-semibold">Explore</Link>
                        </div>
                        <div className="w-14 md:w-auto">
                            <h1 className="text-xl font-bold  mb-2">Address</h1>
                            <p className="text-sm mb-1 font-semibold">Airport, Dhaka</p>
                            <p className="text-sm mb-1 font-semibold break-words md:break-normal">(+88) 01833039074</p>
                            <p className="text-sm font-semibold break-words md:break-normal">chandankumardas.ckd.bd@gmail.com</p>

                        </div>
                        <div className="w-14 md:w-auto prod-form-img">
                            <h1 className="text-xl font-bold mb-2">Sponsors</h1>
                            <p className="text-sm mb-1 font-semibold break-words md:break-normal">Bashundhara Group</p>
                            <p className="text-sm mb-1 font-semibold">City Group</p>
                            <p className="text-sm font-semibold">Partex Group</p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center justify-between mt-3 mb-1">
                        <div className="flex prod-form-img">
                            <img src="https://i.ibb.co/pZkbdsf/bkash-logo-FBB258-B90-F-seeklogo-com.png" alt="" className="w-16 h-12 mr-4 border-2 border-gray-600 py-2 px-2 rounded-lg" />
                            <img src="https://i.ibb.co/1zM8QtQ/Nagad-Logo-wine.png" alt="" className="w-16 h-12 mr-4 border-2 border-gray-600 py-2 px-2  rounded-lg" />
                            <img src="https://i.ibb.co/z74CVgn/paypal-logo-icon-170865.png" alt="" className="w-16 h-12 border-2 border-gray-600 py-2 px-2 rounded-lg" />
                        </div>
                        <div className="flex items-center justify-center prod-form-img">
                        <p className=" py-2 px-2 m-0 bg-gray-600"><i class="fas fa-at text-gray-400"></i> <input className="text-gray-200 md:ml-2 ml-4 outline-none md:w-60 w-20  bg-transparent" type="email" placeholder="Enter your email" /></p>
                        <button className="subscribe-btn">
                            <span>Subscribe</span>
                        </button>
                    </div>
                    </div>
                    <hr className="mb-0" />
                    <p className="m-0 text-sm font-bold text-gray-300">Copyright ?? 2021 Urban Woody</p>                                      
                </div>
                <div>
                    <h1 className="md:mt-16 mt-10 text-right web-name-font text-5xl">urban woody</h1>
                    <div className="footer-title-underline ml-auto"></div>
                    <div className="w-1/2 ml-auto mt-3">
                        <h1 className="text-xl font-bold text-right">About Us</h1>
                        <p className="text-right text-sm font-semibold">We are just working with the wooden daily things!</p>
                    </div>
                    <hr className="footer-hr" />
                    <div className="flex justify-end ">
                        <i class="fab fa-facebook-square text-xl mr-3 cursor-pointer text-gray-800"></i>
                        <i class="fab fa-linkedin text-xl mr-3 cursor-pointer text-gray-800"></i>
                        <i class="fab fa-youtube text-xl mr-3 cursor-pointer text-gray-800"></i>
                        <i class="fab fa-twitter-square text-xl mr-3 cursor-pointer text-gray-800"></i>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Footer;