import React from 'react';
import Rating from 'react-rating';
import useAuth from '../../../hooks/useAuth';

const SingleReview = ({sinReview}) => {

    const {user, logout} = useAuth()
    const { _id, name, review, anony, user_img, rate } = sinReview

    return ( 
        <div className='md:min-h-72 w-full'>
      <div className='py-10 bg-gray-700 bg-opacity-70 backdrop-filter backdrop-blur-sm rounded-lg'>
        <div className='container md:flex flex-col justify-evelny items-center'>
          <div className='md:w-1/4 flex justify-center'>
            {user_img && !anony ? <img className='w-20 h-20 rounded-full mx-auto' src={user_img} alt="" ></img>:<i class="fas fa-user mb-2 rounded-full mx-auto text-7xl"></i>}
          </div>
          <div className=' mx-auto'>
              {anony? <h3 className="text-center my-2 font-bold text-3xl">Anonymous</h3>:
              <h3 className="text-center my-2 font-bold text-3xl">{name}</h3>}
            <div className='text-gray-100 text-center text-base font-semibold'>{review}
            </div>
            <div>
              <p className='text-base pt-3 flex justify-center'>
                <Rating
                        readonly
                        placeholderRating={rate}
                        emptySymbol={<i className="far fa-star text-yellow-400"></i>}
                        placeholderSymbol={<i className="fas fa-star text-yellow-400"></i>}
                        fullSymbol={<i className="fas fa-star text-yellow-400"></i>}
                    />
              </p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
     );
}
 
export default SingleReview;