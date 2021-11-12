import React from 'react';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';


const SingleService = ({product}) => {

    const {_id, title, img, des, price, rate} = product;
    return ( 
        <div className="shadow-md w-96 px-4 pb-4 border-1 border-gray-200">
            <img src={img} alt="" className="service-img w-64 h-80 mx-auto -mt-12" />
            <div className="flex flex-col justify-center mt-3">
                <h1 className="text-2xl mx-auto font-bold">{title}</h1>
                <p className="text-center text-base font-medium mb-1">{des}</p>
                <div className="flex justify-around items-center mt-1 mb-3">
                    <Rating
                        readonly
                        placeholderRating={rate}
                        emptySymbol={<i className="far fa-star text-yellow-400"></i>}
                        placeholderSymbol={<i className="fas fa-star text-yellow-400"></i>}
                        fullSymbol={<i className="fas fa-star text-yellow-400"></i>}
                    />
                    <p className="text-2xl font-bold m-0 ">$ {price}</p>
                </div>
                <Link to={`/product/${_id}`} className="w-full flex justify-center link-style">
                    <button className="buy-btn w-8/12">Buy Now</button>
                </Link>
            </div>
        </div>
     );
}
 
export default SingleService;