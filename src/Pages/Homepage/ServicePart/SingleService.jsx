import React from 'react';
import Rating from 'react-rating';


const SingleService = () => {
    return ( 
        <div className="shadow-md w-96 px-4 pb-4 border-1 border-gray-200">
            <img src="https://i.ibb.co/YWkrnmV/pexels-photo-6114955.jpg" alt="" className="service-img w-64 h-80 mx-auto -mt-12" />
            <div className="flex flex-col justify-center mt-3">
                <h1 className="text-2xl mx-auto font-bold">Title Name</h1>
                <p className="text-center text-base font-medium mb-1">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                <div className="flex justify-around items-center mt-1 mb-3">
                    <Rating
                        placeholderRating={3.5}
                        emptySymbol={<i className="far fa-star text-yellow-400"></i>}
                        placeholderSymbol={<i className="fas fa-star text-yellow-400"></i>}
                        fullSymbol={<i className="fas fa-star text-yellow-400"></i>}
                    />
                    <p className="text-2xl font-bold m-0 ">$ 100</p>
                </div>
                <button className="buy-btn w-8/12 mx-auto">Buy Now</button>
            </div>
        </div>
     );
}
 
export default SingleService;