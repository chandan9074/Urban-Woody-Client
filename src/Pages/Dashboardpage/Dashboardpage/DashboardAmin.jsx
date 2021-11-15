import React from 'react';
import Box from '@mui/material/Box';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import FooterDeshboard from '../../Shared/Footer/FooterDeshboard';

const DashboardAdmin = () => {

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
        <div className="p-4">
            <h3 className="font-semibold text-2xl title-font">Dashboard</h3>
            <div className="order-title-underline mb-4"></div>
            <div className="grid md:grid-cols-4 md:gap-4 gap-y-10">
                    <div className="py-4 px-4 hover:shadow-md bg-blue-200 rounded-md">
                        <div className="flex justify-between items-center mb-0">
                            <i class="fas fa-random text-7xl text-gray-600"></i>
                            <div className="flex flex-col items-end">
                                <span className="text-3xl font-semibold">78%</span>
                                <h6 className="text-sm font-semibold">Growth Rate</h6>
                            </div>
                        </div>
                        <Box sx={{ width: '100%', marginTop:"0.8rem", marginBottom:"1rem" }}>
                            <LinearProgress />
                        </Box>
                        <Box sx={{ flexGrow: 1}}>
                            <BorderLinearProgress variant="determinate" value={78} />
                        </Box>
                    </div>
                    <div className="py-4 px-4 hover:shadow-md bg-indigo-200 rounded-md">
                        <div className="flex justify-between items-center mb-0">
                            <i class="fas fa-users text-7xl text-gray-600"></i>
                            <div className="flex flex-col items-end">
                                <span className="text-3xl font-semibold">2500+</span>
                                <h6 className="text-sm font-semibold">Users</h6>
                            </div>
                        </div>
                        <Box sx={{ width: '100%', marginTop:"0.8rem", marginBottom:"1rem" }}>
                            <LinearProgress />
                        </Box>
                        <Box sx={{ flexGrow: 1}}>
                            <BorderLinearProgress variant="determinate" value={58} />
                        </Box>
                    </div>
                    <div className="py-4 px-4 hover:shadow-md bg-purple-200 rounded-md">
                        <div className="flex justify-between items-center mb-0">
                            <i class="fas fa-money-bill-alt text-7xl text-gray-600"></i>
                            
                            <div className="flex flex-col items-end">
                                <span className="text-3xl font-semibold">85%</span>
                                <h6 className="text-sm font-semibold">Total Profit</h6>
                            </div>
                        </div>
                        <Box sx={{ width: '100%', marginTop:"0.8rem", marginBottom:"1rem" }}>
                            <LinearProgress />
                        </Box>
                        <Box sx={{ flexGrow: 1}}>
                            <BorderLinearProgress variant="determinate" value={85} />
                        </Box>
                    </div>
                    <div className="py-4 px-4 hover:shadow-md bg-blue-200 rounded-md">
                        <div className="flex justify-between items-center mb-0">
                            <i class="fas fa-hand-holding-usd text-7xl text-gray-600"></i>
                            <div className="flex flex-col items-end">
                                <span className="text-3xl font-semibold flex justify-center items-center"><span>65%</span></span>
                                <h6 className="text-sm font-semibold">Annual Income</h6>
                            </div>
                        </div>
                        <Box sx={{ width: '100%', marginTop:"0.8rem", marginBottom:"1rem" }}>
                            <LinearProgress />
                        </Box>
                        <Box sx={{ flexGrow: 1}}>
                            <BorderLinearProgress variant="determinate" value={65} />
                        </Box>
                    </div>
                </div>
                <div className="grid md:grid-cols-3 grid-cols-1 gap-4 mt-10">
                    <div className="md:col-span-2 flex flex-col md:flex-row">
                        <div className="grid md:grid-cols-3 grid-cols-1 gap-4 w-full">
                        <div className="flex flex-col  items-center justify-center  rounded-md border-2 border-gray-200 hover:shadow-md md:py-0 py-3 bg-blue-100">
                                <i class="fas fa-sms text-5xl text-gray-500 mb-2"></i>
                                <h1 className="text-xl font-semibold">Inbox</h1>
                            </div>
                        <div className="flex flex-col  items-center justify-center  rounded-md border-2 border-gray-200 hover:shadow-md md:py-0 py-3 bg-blue-100">
                                <i class="fas fa-user-friends text-5xl text-gray-500 mb-2"></i>
                                <h1 className="text-xl font-semibold">Client</h1>
                            </div>
                        <div className="flex flex-col  items-center justify-center  rounded-md border-2 border-gray-200 hover:shadow-md md:py-0 py-3 bg-blue-100">
                                <i class="fas fa-money-check-alt text-5xl text-gray-500 mb-2"></i>
                                <h1 className="text-xl font-semibold">Total Sales</h1>
                            </div>
                        <div className="flex flex-col  items-center justify-center  rounded-md border-2 border-gray-200 hover:shadow-md md:py-0 py-3 bg-blue-100">
                                <i class="fas fa-bullhorn text-5xl text-gray-500 mb-2"></i>
                                <h1 className="text-xl font-semibold">Social Feed</h1>
                            </div>
                        <div className="flex flex-col  items-center justify-center  rounded-md border-2 border-gray-200 hover:shadow-md md:py-0 py-3 bg-blue-100">
                                <i class="fas fa-hands-helping text-5xl text-gray-500 mb-2"></i>
                                <h1 className="text-xl font-semibold">Sponsors</h1>
                            </div>
                        <div className="flex flex-col  items-center justify-center  rounded-md border-2 border-gray-200 hover:shadow-md md:py-0 py-3 bg-blue-100">
                                <i class="fas fa-exchange-alt text-5xl text-gray-500 mb-2"></i>
                                <h1 className="text-xl font-semibold">Expense</h1>
                            </div>
                        </div>
                        

                    </div>
                    <div className="shadow-md rounded-md border-2 border-gray-100">
                        <h1 className="text-xl font-semibold m-0 px-4 pt-4">Annual Status</h1>
                        <hr />
                        <div className="px-4">
                            <h3 className="text-base font-semibold text-gray-600 flex justify-between"><span>New User</span><span>75%</span></h3>
                            <Box sx={{ flexGrow: 1}}>
                                <BorderLinearProgress variant="determinate" value={75} />
                            </Box>
                        </div>
                        <hr />
                        <div className="px-4">
                            <h3 className="text-base font-semibold text-gray-600 flex justify-between"><span>Sales</span><span>65%</span></h3>
                            <Box sx={{ flexGrow: 1}}>
                                <BorderLinearProgress variant="determinate" value={65} />
                            </Box>
                        </div>
                        <hr />
                        <div className="px-4 pb-4">
                            <h3 className="text-base font-semibold text-gray-600 flex justify-between"><span>Foreign Currency</span><span>39%</span></h3>
                            <Box sx={{ flexGrow: 1}}>
                                <BorderLinearProgress variant="determinate" value={39} />
                            </Box>
                        </div>
                    </div>
                </div>
                
        </div>
                <FooterDeshboard />
        </div>
     );
}
 
export default DashboardAdmin;