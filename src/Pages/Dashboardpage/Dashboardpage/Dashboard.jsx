// import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import FooterDeshboard from '../../Shared/Footer/FooterDeshboard';

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CircularProgress, {
  circularProgressClasses,
} from '@mui/material/CircularProgress';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

import './dashboardHome.css';

const DashboardHome = () => {
    const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
        height: 10,
        borderRadius: 5,
        [`&.${linearProgressClasses.colorPrimary}`]: {
            backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
        },
        [`& .${linearProgressClasses.bar}`]: {
            borderRadius: 5,
            backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
        },
    }));

    return ( 
        <div>
            <div className="md:p-4 dashboard-bg-align container">
                <h3 className="font-semibold text-2xl title-font">Dashboard</h3>
                <div className="order-title-underline mb-4"></div>
                <div className="grid md:grid-cols-4 md:gap-4 gap-y-10">
                    <div className="py-4 px-4 hover:shadow-md bg-blue-200 rounded-md">
                        <div className="flex justify-between items-center mb-0">
                            <i class="fas fa-chart-bar text-7xl text-gray-600"></i>
                            <div className="flex flex-col items-end">
                                <span className="text-3xl font-semibold">+120</span>
                                <h6 className="text-sm font-semibold">Total Order Products</h6>
                            </div>
                        </div>
                        <Box sx={{ width: '100%', marginTop:"0.8rem", marginBottom:"1rem" }}>
                            <LinearProgress />
                        </Box>
                        <Box sx={{ flexGrow: 1}}>
                            <BorderLinearProgress variant="determinate" value={30} />
                        </Box>
                    </div>
                    <div className="py-4 px-4 hover:shadow-md bg-indigo-200 rounded-md">
                        <div className="flex justify-between items-center mb-0">
                            <i class="fas fa-money-check-alt text-7xl text-gray-600"></i>
                            <div className="flex flex-col items-end">
                                <span className="text-3xl font-semibold"><i class="fas fa-euro-sign"></i> 5217</span>
                                <h6 className="text-sm font-semibold">Total Transection</h6>
                            </div>
                        </div>
                        <Box sx={{ width: '100%', marginTop:"0.8rem", marginBottom:"1rem" }}>
                            <LinearProgress />
                        </Box>
                        <Box sx={{ flexGrow: 1}}>
                            <BorderLinearProgress variant="determinate" value={50} />
                        </Box>
                    </div>
                    <div className="py-4 px-4 hover:shadow-md bg-purple-200 rounded-md">
                        <div className="flex justify-between items-center mb-0">
                            <i class="fas fa-cart-plus text-7xl text-gray-600"></i>
                            <div className="flex flex-col items-end">
                                <span className="text-3xl font-semibold">+530</span>
                                <h6 className="text-sm font-semibold">Lettest Products</h6>
                            </div>
                        </div>
                        <Box sx={{ width: '100%', marginTop:"0.8rem", marginBottom:"1rem" }}>
                            <LinearProgress />
                        </Box>
                        <Box sx={{ flexGrow: 1}}>
                            <BorderLinearProgress variant="determinate" value={80} />
                        </Box>
                    </div>
                    <div className="py-4 px-4 hover:shadow-md bg-blue-200 rounded-md">
                        <div className="flex justify-between items-center mb-0">
                            <i class="fas fa-trophy text-7xl text-gray-600"></i>
                            <div className="flex flex-col items-end">
                                <span className="text-3xl font-semibold flex justify-center items-center"><span>53</span><i class="fas fa-star text-yellow-600 text-xl"></i></span>
                                <h6 className="text-sm font-semibold">Get Bonous For Offer</h6>
                            </div>
                        </div>
                        <Box sx={{ width: '100%', marginTop:"0.8rem", marginBottom:"1rem" }}>
                            <LinearProgress />
                        </Box>
                        <Box sx={{ flexGrow: 1}}>
                            <BorderLinearProgress variant="determinate" value={45} />
                        </Box>
                    </div>
                    
                </div>
                <div className="grid md:grid-cols-3 grid-cols-1 gap-4 mt-10">
                    <div className="md:col-span-2 flex flex-col md:flex-row">
                        <div className="flex justify-around items-center px-2 py-3 md:w-3/5 shadow-md rounded-md border-2 border-gray-100">
                            <i class="fas fa-comment-dots md:text-9xl text-7xl text-gray-400"></i>
                            <div>
                                <h1 className="text-xl font-semibold m-0">Send a message</h1>
                                <div className="order-title-underline mb-3"></div>
                                <textarea className="md:w-60 w-40 outline-none py-2 px-2 rounded-md border-2 border-gray-200 bg-transparent shadow-md md:h-36 h-20 resize-none" type="text" placeholder="Enter message" />
                                <button type="submit" className="post-btn mt-4 mx-auto">
                                <div class="svg-wrapper-1">
                                    <div class="svg-wrapper">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                            <path fill="none" d="M0 0h24v24H0z"></path>
                                            <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                                        </svg>
                                    </div>
                                </div>
                                <span>Send</span>
                            </button>
                            </div>
                        </div>
                        <div className="md:w-1/3 flex md:flex-col make-margin md:mx-auto h-full">
                            <div className="flex flex-col py-3 md:py-0 px-2 md:px-0 items-center justify-center w-full md:h-1/2 rounded-md border-2 border-gray-200 hover:shadow-md bg-blue-100">
                                <i class="fas fa-medal text-5xl text-yellow-500 mb-3"></i>
                                <h1 className="text-xl font-semibold">Spacial Offers</h1>
                            </div>
                            <div className="flex flex-col items-center justify-center md:mt-2 w-full md:h-1/2 rounded-md border-2 border-gray-200 hover:shadow-md bg-blue-100">
                                <i class="fas fa-bullhorn text-5xl text-yellow-500 mb-3 rotate-img"></i>
                                <h1 className="text-xl font-semibold">Shipping Status</h1>
                            </div>
                        </div>
                    </div>
                    <div className="shadow-md rounded-md border-2 border-gray-100">
                        <h1 className="text-xl font-semibold m-0 px-4 pt-4">Transection Rate</h1>
                        <hr />
                        <div className="px-4">
                            <h3 className="text-base font-semibold text-gray-600 flex justify-between"><span>This Year</span><span>63%</span></h3>
                            <Box sx={{ flexGrow: 1}}>
                                <BorderLinearProgress variant="determinate" value={63} />
                            </Box>
                        </div>
                        <hr />
                        <div className="px-4">
                            <h3 className="text-base font-semibold text-gray-600 flex justify-between"><span>Last Year</span><span>43%</span></h3>
                            <Box sx={{ flexGrow: 1}}>
                                <BorderLinearProgress variant="determinate" value={43} />
                            </Box>
                        </div>
                        <hr />
                        <div className="px-4 pb-4">
                            <h3 className="text-base font-semibold text-gray-600 flex justify-between"><span>Average</span><span>54%</span></h3>
                            <Box sx={{ flexGrow: 1}}>
                                <BorderLinearProgress variant="determinate" value={54} />
                            </Box>
                        </div>
                    </div>
                </div>
            </div>
            <FooterDeshboard />
        </div>
     );
}
 
export default DashboardHome;