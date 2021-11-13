import React from 'react';
import FooterDeshboard from '../../Shared/Footer/FooterDeshboard';

const DashboardHome = () => {
    return ( 
        <div>
            <div className="flex w-full justify-center p-4 dashboard-bg-align items-center">
                <h1>Welcome to our Dashboard</h1>
            </div>
            <FooterDeshboard />
        </div>
     );
}
 
export default DashboardHome;