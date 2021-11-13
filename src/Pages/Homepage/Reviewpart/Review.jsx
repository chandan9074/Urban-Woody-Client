import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import SingleReview from './SingleReview';


const Review = () => {

    const [reviews, setReviews] = useState([])
    const [isloding, setIsloading] = useState(false)
    useEffect(() => {
        setIsloading(true)
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data =>{
                setReviews(data)
                setIsloading(false)
            });
    }, [])
    return ( 
        <div className="container mb-8">
            <div className='py-16'>
        <h1 className='text-center text-3xl md:text-4xl font-semibold'>
         Customers Feedback
        </h1>
        <div className="order-title-underline mx-auto mb-16"></div>

        {isloding ?<div class="loader">Loading...</div>:

        <div>{reviews?
        <Carousel>
            {
                reviews.map(sinReview=><Carousel.Item className="d-flex">
            <SingleReview  key={sinReview._id} sinReview={sinReview}></SingleReview>
          </Carousel.Item>)
            }
          
        </Carousel>:  <img src="https://i.ibb.co/L81J3wt/no-result.png" alt="" className="opacity-30 mx-auto" /> } </div>}
        </div>
        </div>
     );
}
 
export default Review;