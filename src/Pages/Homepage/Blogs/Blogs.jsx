import React from 'react';

const Blogs = () => {
    return ( 
        <div className="container pb-10">
            <h1 className="text-center mt-5">Blogs</h1>
            <div className="order-title-underline mx-auto md:mb-24 mb-10"></div>
            <div className="flex flex-col md:flex-row justify-around">
                <div className="md:w-6/12 flex md:flex-col flex-col-reverse mb-20 md:mb-0">
                    <div className="flex blog-first-part md:ml-5 shadow-md border-1 border-gray-200 mb-3">
                        <img src="https://i.ibb.co/tHsdZZS/pexels-photo-7262477.jpg" alt="" className="md:w-72 w-44 md:-mt-10 md:-ml-5 -mt-10" />
                        <div className=" py-3 px-3 ">
                            <h1 className="text-3xl font-bold mb-0">Fine Wooden Work</h1>
                            <h4 className="text-sm mt-2">Hayden</h4>
                            <p className="text-base font-semibold text-justify media-line-elipsis">Fine Woodworking provides all woodworkers with unique inspiration and information to improve their skills, accuracy and efficiency. It is the most trusted resource for unbiased, credible information among passionate woodworkers. Expert advice on woodworking and furniture making, with thousands of how-to videos, , blogs, and more.</p>
                        </div>
                    </div>
                    <div className="flex md:justify-around flex-col md:flex-row items-center mb-20 md:mb-0">
                        <div className="flex flex-col justify-center items-center shadow-md border-1 border-gray-200 mt-4 py-4 px-5">
                            <img src="https://i.ibb.co/hB500FW/pexels-photo-1865557.jpg" alt="" className="w-20 h-20 rounded-full border-4 border-gray-300" />
                            <h1 className="text-xl font-bold mt-1 mb-1">Graham</h1>
                            <h4 className="text-sm font-bold mt-0">Writer</h4>
                        </div>
                        <div className="flex flex-col justify-center items-center shadow-md border-1 border-gray-200 mt-4 py-4  px-5">
                            <img src="https://i.ibb.co/VChQd6t/pexels-photo-4674411.jpg" alt="" className="w-20 h-20 rounded-full border-4 border-gray-300" />
                            <h1 className="text-xl font-bold mt-1 mb-1">Hayden</h1>
                            <h4 className="text-sm font-bold mt-0">Writer</h4>
                        </div>
                        <div className="flex flex-col justify-center items-center shadow-md border-1 border-gray-200 mt-4 py-4 px-5">
                            <img src="https://i.ibb.co/k5ZWZwd/pexels-photo-2364575.jpg" alt="" className="w-20 h-20 rounded-full border-4 border-gray-300" />
                            <h1 className="text-xl font-bold mt-1 mb-1">Justin</h1>
                            <h4 className="text-sm font-bold mt-0">Writer</h4>
                        </div>
                    </div>
                </div>
                <div className="md:w-2/5 shadow-md border-1 border-gray-200 w-11/12 mx-auto md:mx-0">
                    <img src="https://i.ibb.co/r734mZG/pexels-photo-5691903.jpg" alt="" className="blog-second-img -ml-5 -mt-10 blog-img" />
                    <div className="py-4 px-4">
                        <h1 className="text-3xl font-bold mb-0">Old Wood</h1>
                        <h4 className="text-sm mt-2">Justin</h4>
                        <p className="text-base font-semibold text-justify media-line-elipsis">At WoodWorkers Guild of America (WWGOA), we know that woodworking is more than a hobby for you it's a lifestyle. We want to be your favorite place for feeding that passion by learning new techniques, getting inspired by new ideas, and connecting with other woodworkers who feel the same way as you.</p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Blogs;