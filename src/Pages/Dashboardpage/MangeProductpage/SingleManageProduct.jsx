import React from 'react';
import Rating from 'react-rating';

import './manageProduct.css'

const SingleManageProduct = ({product, handleDelete}) => {

    const {_id, title, img, des, price, rate} = product;

    return (  
        <div className="flex shadow-md rounded-md">
            <img src={img} alt="" className="w-52 h-60" />
            <div className="w-80 p-3">
                <h3 className="text-2xl font-semibold">{title}</h3>
                <p className="text-base line-elipsis text-justify">{des}</p>
                <div className="flex justify-between">
                    <Rating
                        readonly
                        placeholderRating={rate}
                        emptySymbol={<i className="far fa-star text-yellow-400"></i>}
                        placeholderSymbol={<i className="fas fa-star text-yellow-400"></i>}
                        fullSymbol={<i className="fas fa-star text-yellow-400"></i>}
                    />
                    <p className="text-2xl font-bold m-0 ">$ {price}</p>
                </div>
                <div className="flex justify-between mt-3">
                    <button class="select-btn"><span class="text">Update</span><span class="icon"><i class="fas fa-pen-fancy text-white"></i></span></button>

                    <button onClick={()=>handleDelete(_id)} class="noselect"><span class="text">Delete</span><span class="icon"><svg viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path></svg></span></button>
                </div>
            </div>
        </div>
    );
}
 
export default SingleManageProduct;