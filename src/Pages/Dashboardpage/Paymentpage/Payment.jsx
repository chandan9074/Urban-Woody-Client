import React from 'react';
import FooterDeshboard from '../../Shared/Footer/FooterDeshboard';


const Payment = () => {
    return ( 
        <div>
            <div className=" p-4 dashboard-bg-align">
                <h3 className="font-semibold text-2xl title-font">Payment</h3>
                <div className="order-title-underline"></div>
                <h6 className="text-sm font-semibold">This feature will be comming soon</h6>
                <div className="flex justify-center items-center">
                    <i class="fas fa-money-bill-alt buycart-img opacity-10 mt-20 md:mt-0"></i>
                </div>
            </div>
            <FooterDeshboard />
        </div>
     );
}
 
export default Payment;