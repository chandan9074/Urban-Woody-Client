import React from 'react';


const Banner = () => {
    return ( 
        <div  className="banner-part flex justify-center items-center" >
            <div className="bg-gray-800 bg-opacity-80 p-20 flex flex-col items-center justify-center">
                <h1 className="text-gray-200 text-6xl">Urban Woody</h1>
                <p className="text-gray-300 text-xl">Lorem ipsum dolor sit amet.</p>
                <button class="cta flex items-center justify-center">
                    <span>Shop Now</span>
                    <svg width="15px" height="10px" viewBox="0 0 13 10">
                        <path d="M1,5 L11,5"></path>
                        <polyline points="8 1 12 5 8 9"></polyline>
                    </svg>
                </button>
            </div>
            
        </div>
     );
}
 
export default Banner;