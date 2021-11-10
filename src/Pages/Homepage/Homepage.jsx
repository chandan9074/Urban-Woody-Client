// import pakages
import React from 'react';
import Footer from '../Shared/Footer/Footer';

//import files
import Navigation from '../Shared/Navigation/Navigation';
import Banner from './Banner';
import Blogs from './Blogs/Blogs';
import './homepage.css'
import Service from './ServicePart/Service';

const Homepage = () => {
    return ( 
        <div>
            <Navigation />
            <Banner />
            <Service />
            <Blogs />
            <Footer />
        </div>
     );
}
 
export default Homepage;