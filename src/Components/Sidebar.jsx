"use client"

import { useState, useEffect } from "react"
import Header from "./Header"
import img11 from "../assests/img11.png"
import img12 from "../assests/img12.png"
import img13 from "../assests/img13.png"
import img14 from "../assests/img14.png"
import img10 from "../assests/img10.png"
import img19 from "../assests/img19.png"
import img17 from "../assests/img17.png"
import logo2 from "../assests/logo2.png"
import img7 from "../assests/img7.png"
import Dashboaed from "./Dashboaed"

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [isIconOnly, setIsIconOnly] = useState(false)
  const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 0)

  // Navigation items with consistent icon usage
  const navigation = [
    { name: "Dashboard", href: "#", icon: img11, current: true },
    { name: "Recruitment", href: "#", icon: img17, current: false },
    { name: "Schedule", href: "#", icon: img10, current: false },
    { name: "Employee", href: "#", icon: img14, current: false },
    { name: "Department", href: "#", icon: img19, current: false },
  ]

  const secondaryNavigation = [
    { name: "Support", href: "#", icon: img12 },
    { name: "Settings", href: "#", icon: img13 },
  ]

  // Handle window resize
  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth)

      // Auto-adjust isIconOnly based on screen size
      if (window.innerWidth >= 640 && window.innerWidth < 1024) {
        setIsIconOnly(true) // Default tablet to icon-only
      } else if (window.innerWidth >= 1024) {
        setIsIconOnly(false) // Desktop always shows full sidebar
      }
    }

    handleResize() // Initialize on component mount
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Determine view mode based on window width
  const isMobile = windowWidth < 640 // < sm
  const isTablet = windowWidth >= 640 && windowWidth < 1024 // sm to lg

  const toggleSidebar = () => {
    if (isMobile) {
      // For mobile, toggle sidebar open/close
      setSidebarOpen(!sidebarOpen)
    } else if (isTablet) {
      // For tablet, toggle between icon-only and full menu
      setIsIconOnly(!isIconOnly)
    }
  }

  return (
    <div className="min-h-screen border-black border-[1px] bg-[#FAFAFA] text-[#686868] flex flex-col">
      {/* Sidebar first, then Header and Main Content */}
      <div className="flex flex-1">
        {/* Mobile Sidebar (Full-screen overlay) */}
        {isMobile && (
          <div
            className={`fixed inset-0 z-50 transition-transform duration-300 ease-in-out bg-white w-full h-full p-5 ${
              sidebarOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            {/* Close Button */}
            <button
              onClick={() => setSidebarOpen(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
            >
              ✖
            </button>

            {/* Sidebar Content */}
            <div>
              {/* Logo */}
              <div className="flex items-center space-x-2 mb-8">
<img src={logo2} alt="" />

              </div>

              {/* Navigation Links */}
              <nav className="mt-6">
                <div className="text-xs font-semibold text-gray-500 uppercase mb-2">Main Menu</div>
                <ul>
                  {navigation.map((item) => (
                    <li
                      key={item.name}
                      className={`flex items-center space-x-3 px-4 py-2 rounded-md text-gray-600 hover:bg-gray-100 hover:text-gray-900 ${item.current ? "bg-gray-100 text-red-500" : ""}`}
                    >
                      <img src={item.icon || "/placeholder.svg"} alt={item.name} className="w-6 h-6" />
                      <a href={item.href}>{item.name}</a>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Secondary Navigation */}
              <nav className="mt-8">
                <div className="text-xs font-semibold text-gray-500 uppercase mb-2">Other</div>
                <ul>
                  {secondaryNavigation.map((item) => (
                    <li
                      key={item.name}
                      className="flex items-center space-x-3 px-4 py-2 rounded-md text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                    >
                      <img src={item.icon} alt={item.name} className="w-6 h-6" />
                      <a href={item.href}>{item.name}</a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        )}

        {/* Tablet and Desktop Sidebar - Start from top */}
        <div
          className={`hidden  sm:flex sm:flex-col sm:fixed sm:inset-y-0 sm:left-0 sm:bg-[#FAFAFA] sm:border-r sm:p-5 
          ${isTablet ? (isIconOnly ? "sm:w-16 sm:pl-0 sm:pr-0 flex items-center " : "sm:w-64") : "lg:w-64"} transition-all duration-300 z-40`}
        >
          {/* Logo */}
          <div className={`flex items-center mt-4 ${isTablet && isIconOnly ? "justify-center" : "space-x-2"}`}>
           <img src={img7} alt="" />
            {(!isTablet || !isIconOnly) && <img src={logo2} /> }
          </div>

          {/* Navigation Links */}
          <nav className="mt-8  ">
            <div className="sm:text-[10px] text-left  font-semibold text-gray-500 font2 uppercase mb-2">Main Menu</div>

            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`group flex items-center ${
                  isTablet && isIconOnly ? "justify-center" : "space-x-3"
                } px-2 py-3 my-1 rounded-md text-gray-600 hover:bg-gray-100 hover:text-blue-600 transition-colors ${
                  item.current ? "bg-gray-100 text-blue-600" : ""
                }`}
                title={isTablet && isIconOnly ? item.name : ""}
              >
                <div className="flex items-center justify-center w-6 h-6">
                  <img
                    src={item.icon || "/placeholder.svg"}
                    alt={item.name}
                    className="w-5 h-5 object-contain transition-transform group-hover:scale-110"
                  />
                </div>
                {(!isTablet || !isIconOnly) && <span>{item.name}</span>}
              </a>
            ))}
          </nav>

          {/* Secondary Navigation */}
          <nav className="mt-8">
            <div className="text-[10px] font-semibold text-gray-500 uppercase text-left font2 mb-2">Other</div>
            
            {secondaryNavigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`group flex items-center ${
                  isTablet && isIconOnly ? "justify-center" : "space-x-3"
                } px-2 py-3 my-1 rounded-md text-gray-600 hover:bg-gray-100 hover:text-blue-600 transition-colors`}
                title={isTablet && isIconOnly ? item.name : ""}
              >
                <div
                  className={`${isTablet && isIconOnly ? "inline-block" : "inline-flex"} items-center justify-center w-6 h-6`}
                >
                  <img
                    src={item.icon || "/placeholder.svg"}
                    alt={item.name}
                    className="w-5 h-5 object-contain transition-transform group-hover:scale-110"
                  />
                </div>
                {(!isTablet || !isIconOnly) && <span>{item.name}</span>}
              </a>
            ))}
          </nav>
        </div>

        {/* Content area, including Header */}
        <div
          className={`flex-1 ${
            isMobile ? "ml-0" : isTablet ? (isIconOnly ? "sm:ml-16" : "sm:ml-64") : "lg:ml-64"
          } transition-all duration-300`}
        >
          {/* Header */}
          <Header toggleSidebar={toggleSidebar} />

          {/* Main Content */}
          <main className="pt-8">
            <div className="px-4 py-6 sm:px-6 lg:px-8">
              {/* Your page content goes here */}
           <Dashboaed/>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

