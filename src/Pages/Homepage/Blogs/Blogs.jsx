import React from 'react';

const Blogs = () => {
    return ( 
        <div className="container pb-10">
            <h1 className="text-center mb-24 mt-5">Blogs</h1>
            <div className="flex justify-around">
                <div className="w-6/12 flex flex-col">
                    <div className="flex blog-first-part ml-5 shadow-md border-1 border-gray-200 mb-3">
                        <img src="https://i.ibb.co/tHsdZZS/pexels-photo-7262477.jpg" alt="" className="w-72 -mt-10 -ml-5" />
                        <div className="py-4 px-4">
                            <h1 className="text-3xl font-bold mb-0">Blog Title</h1>
                            <h4 className="text-sm mt-2">author</h4>
                            <p className="text-base font-semibold text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum accusamus voluptate deleniti doloremque recusandae hic qui iste id molestias nemo veniam voluptas eum veritatis iusto inventore sequi aliquid, repellendus maiores laudantium quod impedit a laboriosam? Rem a incidunt suscipit ducimus.</p>
                        </div>
                    </div>
                    <div className="flex justify-around ">
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
                <div className="w-2/5 shadow-md border-1 border-gray-200">
                    <img src="https://i.ibb.co/r734mZG/pexels-photo-5691903.jpg" alt="" className="blog-second-img -ml-5 -mt-10" />
                    <div className="py-4 px-4">
                        <h1 className="text-3xl font-bold mb-0">Blog Title</h1>
                        <h4 className="text-sm mt-2">author</h4>
                        <p className="text-base font-semibold text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum accusamus voluptate deleniti doloremque recusandae hic qui iste id molestias nemo veniam voluptas eum veritatis iusto inventore sequi aliquid, repellendus maiores laudantium quod impedit a laboriosam? Rem a incidunt suscipit ducimus.</p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Blogs;