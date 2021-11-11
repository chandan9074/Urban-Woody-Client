import React from 'react';
import Rating from 'react-rating';

import './myOrders.css';

const SingleMyOrder = () => {
    return ( 
        <div className="flex shadow p-4">
            <div>
                <img src="https://i.ibb.co/YWkrnmV/pexels-photo-6114955.jpg" alt="" className="w-52 h-48" />
            </div>
            <div className="w-72 ml-4">
                <h1 className="text-2xl font-semibold">Title Name</h1>
                <p className="text-justify mb-0">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora placeat</p>
                <div className="flex justify-between items-center mt-1">
                    <Rating
                        placeholderRating={3.5}
                        emptySymbol={<i className="far fa-star text-yellow-400"></i>}
                        placeholderSymbol={<i className="fas fa-star text-yellow-400"></i>}
                        fullSymbol={<i className="fas fa-star text-yellow-400"></i>}
                    />
                    <p className="text-2xl font-bold m-0 ">$ 100 X 10</p>
                </div>
                <div className="flex justify-between items-center mt-3">
                    <p className="mb-0 mt-0 panding-btn rounded">Panding</p>
                    <button class="noselect"><span class="text">Cancel</span><span class="icon"><svg viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path></svg></span></button>
                </div>
            </div>
        </div>
     );
}
 
export default SingleMyOrder;