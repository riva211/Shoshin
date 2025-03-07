import { useState } from "react";
import img15 from "../assests/img15.png"
import img1 from "../assests/img1.png"
import img2 from "../assests/img2.png"
import img5 from "../assests/img5.png"
import img6 from "../assests/img6.png"
import img20 from "../assests/img20.png"

export default function Header({ toggleSidebar }) {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="bg-[#F1F1F1] border-b border-gray-200 fixed top-0 right-0 left-0 z-20 shadow-sm">
      <div className="px-6 sm:px-6  lg:px-8 flex items-center  md:ml-14 sm:ml-12 h-16">
        {/* Left section with hamburger and logo */}
        <div className="flex items-center ">
          {/* Hamburger menu button - visible on mobile and tablet */}
          <button
            onClick={toggleSidebar}
            className=" focus:outline-none block w-[24px] mr-3  lg:hidden"
            aria-label="Toggle sidebar"
          >
            <img className="text-white" src={img15} alt="menu" />
          </button>
          
        
        </div>

        {/* Center section with search bar - grows to fill available space */}
        <div className="flex-1 min-w-[245px]  sm:mx-6 lg:mx-52">
          <div className="relative">
            <input
              type="text"
              className="lg:block md:block hidden w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-gray-50 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="absolute inset-y-0 lg:right-0 pl-3 flex items-center pointer-events-none">
              {/* Search icon */}
                <img src={img5} alt="" />
             
            </div>
          </div>
        </div>

        {/* Right section with notification and profile */}
        <div className="flex items-center space-x-4  w-full justify-end " >
          {/* Notification bell */}
          <button
            className="text-gray-500 hover:text-gray-700 focus:outline-none relative"
            aria-label="Notifications"
          >
            <span className="text-xl">
              <img src={img1} alt="" />
            </span>
            {/* Notification badge */}
            <span className="absolute top-0 right-0  px-1 py-1 rounded-full bg-red-500 text-white text-xs ">
              
            </span>
          </button>
          {/* message */}
          <button
            className="text-gray-500 hover:text-gray-700 focus:outline-none relative"
            aria-label="Notifications"
          >
              <img src={img2} alt="" />
    
          </button>


          {/* Profile dropdown */}
          <div className="relative">
            <button
              className="flex items-center space-x-2 focus:outline-none"
              aria-label="User menu"
            >
              {/* Profile picture */}
              <div className="h-8 w-8 rounded-full bg-gray-300 overflow-hidden flex items-center justify-center">
<img src={img20} alt="" />
              </div>
              {/* User name - only visible on desktop */}
              <span className="hidden lg:block text-gray-700 font-medium">
              Admirra John
              </span>
              <div>
                <img src={img6} alt="" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}