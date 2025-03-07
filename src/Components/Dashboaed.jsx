import React from 'react'
import Vector3 from "../assests/Vector3.png"
import Vector4 from "../assests/Vector4.png"
import img6 from "../assests/img6.png"
import img16 from "../assests/img16.png"
import img3 from "../assests/img3.png"


function Dashboaed() {
  
    return (
    <div className="container mx-auto p-4 max-w-7xl">
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-[24px] font-bold   ">Dashboard</h1>
    
    </div>

    {/* Mobile View - Single Column */}
    <div className="grid grid-cols-1 gap-4 md:hidden">
      <MetricCard
        title="Available Position"
        value="24"
        subtitle="4 Urgently needed"
        subtitleColor="text-red-500"
        bgColor="bg-[#FFEFE7]"
      />
      <MetricCard
        title="Job Open"
        value="10"
        subtitle="4 Active hiring"
        subtitleColor="text-blue-500"
        bgColor="bg-blue-50"
      />
      <MetricCard
        title="New Employees"
        value="24"
        subtitle="4 Department"
        subtitleColor="text-pink-500"
        bgColor="bg-pink-50"
      />
      <StatCard
        title="Total Employees"
        value="216"
        trend="+2%"
        period="Past month"
        details={["132 Men", "84 Women"]}
      />
      <StatCard title="Talent Request" value="16" trend="+5%" period="Past month" details={["6 Men", "10 Women"]} />
      <AnnouncementCard />
      <ActivityCard />
      <ScheduleCard />
    </div>

    {/* Tablet View - Two Columns */}
    <div className="hidden md:flex   lg:hidden md:flex-col">
      <div className="grid grid-cols-1 gap-4">
        <div className="grid grid-cols-3 gap-4  ">
          <MetricCard
            title="Available Position"
            value="24"
            subtitle="4 Urgently needed"
            subtitleColor="text-red-500"
            bgColor="bg-orange-50"
          />
          <MetricCard
            title="Job Open"
            value="10"
            subtitle="4 Active hiring"
            subtitleColor="text-blue-500"
            bgColor="bg-blue-50"
          />
          <MetricCard
            title="New Employees"
            value="24"
            subtitle="4 Department"
            subtitleColor="text-pink-500"
            bgColor="bg-pink-50"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <StatCard
            title="Total Employees"
            value="216"
            trend="+2%"
            period="Past month"
            details={["132 Men", "84 Women"]}
          />
          <StatCard
            title="Talent Request"
            value="16"
            trend="+5%"
            period="Past month"
            details={["6 Men", "10 Women"]}
          />
        </div>
      </div>
      <AnnouncementCard className="col-span-2" />
      <div className=' flex'>

      <ActivityCard />
      <ScheduleCard className="col-span-2" />
      </div>
    </div>

    {/* Desktop View - Three Columns */}
    <div className="hidden lg:grid lg:grid-cols-3 gap-4">
      <div className="grid grid-cols-1 gap-4 lg:col-span-2">
        <div className="grid grid-cols-3 gap-4">
          <MetricCard
            title="Available Position"
            value="24"
            subtitle="4 Urgently needed"
            subtitleColor="text-red-500"
            bgColor="bg-orange-50"
          />
          <MetricCard
            title="Job Open"
            value="10"
            subtitle="4 Active hiring"
            subtitleColor="text-blue-500"
            bgColor="bg-blue-50"
          />
          <MetricCard
            title="New Employees"
            value="24"
            subtitle="4 Department"
            subtitleColor="text-pink-500"
            bgColor="bg-pink-50"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <StatCard
            title="Total Employees"
            value="216"
            trend="+2%"
            period="Past month"
            details={["120 Men", "96 Women"]}
          />
          <StatCard
            title="Talent Request"
            value="16"
            trend="+5%"
            period="Past month"
            details={["6 Men", "10 Women"]}
          />
        </div>

        <AnnouncementCard />
      </div>

      <div className="grid grid-cols-1 gap-4 ">

        <ActivityCard />

        <ScheduleCard />
      
      </div>
    </div>
  </div>
)
}

function MetricCard({ title, value, subtitle, subtitleColor, bgColor }) {
return (
  <div className={`${bgColor} flex flex-col w-full rounded-lg p-4 shadow-sm `}>
    <p className="text-[18px] text-left  font-medium text-[#161E54]">{title}</p>

    <div className=' flex  flex-col'>
    <h2 className="text-[36px] text-start font-bold text-[#161E54] mt-2">{value}</h2>
    <p className={`text-[16px] ${subtitleColor} text-start mt-1`}>{subtitle}</p>
    </div>
  </div>
)
}

function StatCard({ title, value, trend, period, details }) {
return (
  <div className="bg-white rounded-lg p-4 shadow-sm">
    <div className="flex justify-between h-full items-start">
      <div className=' flex flex-col  justify-stretch   h-full '>
        <p className="text-[18px] font-[500px]   text-[#161E54]">{title}</p>
        <h2 className="text-[#161E54] text-[48px] text-left font-bold mb-3">{value}</h2>
        <div className="flex flex-col mt-[4px]">
          {details.map((detail, index) => (
            <span key={index} className="text-xs mt-[4px] text-left  text-gray-500">
              {detail}
            </span>
          ))}
        </div>
      </div>
      <div className="flex flex-col mt-2 ">
        <div className=' flex flex-col justify-center items-center '>

        <div className="text-xs text-red-500 font-extrabold   ">{trend}</div>
        <img src={Vector4} className=' font-bold mt-1  w-[4px] h-[7px] ' alt="" />
        </div>
        <div className="w-[150px] h-[121px] ">
      
          <img  className=' w-full h-full ' src={Vector3} alt="" />
      
        </div>
        <div className=' flex w-full  justify-center'>

        <div className="text-xs bg-[#FFEFE7] w-[107px] h-[24px]  flex justify-center items-center rounded-[4px] text-[#303030] mt-1">
          <span>
          {trend} {period}
            </span> </div>
        </div>
      </div>
    </div>
  </div>
)
}

function AnnouncementCard() {
return (
  <div className=" bg-white rounded-[12px]  border-[#E0E0E0] border-[1px] ">
    <div className="flex items-center justify-between p-4 pb-2">
      <h3 className="text-[16px] font-medium ">Announcement</h3>
    <div className=' flex justify-between items-center border-[#EFEFEF] rounded-[4px] border-2 p-1 '>

      <span className="text-[12px] font2 text-gray-500">{`Today, 13 Sep 2021`}</span>
      <img className=' w-[18px] h-[18px]' src={img6} alt="" />
    </div>
    </div>
    <div className="p-4 pt-2 grid gap-4">
      <AnnouncementItem title="Outing schedule for every departement" time="5 Minutes ago" />
      <AnnouncementItem title="Meeting HR Department" time="Yesterday, 12:30 PM" />
      <AnnouncementItem
        title="IT Department need two more talents for UX/UI Designer position"
        time="Yesterday, 09:15 AM"
      />
    </div>
    <div className=" p-3 w-full  border-t-[1px]  border-[#E0E0E0]">
      <button className="text-red-500 hover:text-red-600  text-sm">See All Announcement</button>
    </div>
  </div>
)
}

function AnnouncementItem({ title, time }) {
return (
  <div className="flex  rounded-[6px] bg-[#FAFAFA] border-[#E0E0E0] border-[0.5px] p-2 justify-between">
    <div className="grid gap-1">
      <p className="text-sm font-medium">{title}</p>
      <span className="text-xs text-left text-gray-500">{time}</span>
    </div>
    <div className="flex items-center gap-2">
      <button className="p-1 rounded-full hover:bg-gray-100">
       <img src={img16} alt="" />
      </button>
      <button className="p-1 rounded-full hover:bg-gray-100">
      <img src={img3} alt="" />
      </button>
    </div>
  </div>
)
}

function ActivityCard() {
return (
  <div className="bg-navy-900 text-white text-left   rounded-xl  ">
    <h3 className="font-[500px] p-4 mb-4  bg-[#1B204A] text-left rounded-xl rounded-b-none  ">Recently Activity</h3>
<div className=' flex flex-col h-[80%] w-full  place-content-evenly   '>

   <div className=' ml-4  ' >

    <div className="text-xs text-gray-300 mb-2 font2 ">10:30 AM, Fri 10 Sep 2021</div>
    <h4 className="text-lg font-medium mb-2">You Posted a New Job</h4>
    <p className="text-sm font2 text-wrap mr-2 text-gray-300 mb-4">
      Kindly check the requirements and terms of work and make sure everything is right.
    </p>
   </div>
    <div className="flex justify-between p-4  items-center">
      <span className="text-sm text-[#FFFFFF] ">Today you makes 12 Activity</span>
      <button className="bg-red-500 rounded-[4px] hover:bg-red-600 text-white text-xs px-4 py-2 ">
        See All Activity
      </button>
    </div>
</div>
  </div>
)
}

function ScheduleCard() {
return (
  <div className="bg-white rounded-[14px]   border-[#E0E0E0] border-[1px]   ">
    <div className="flex items-center justify-between p-4 pb-2">
      <h3 className="text-[18px] text-[#161E54] font-medium">Upcoming Schedule</h3>
      <div className="flex items-center  border-[#E0E0E0] border-[1px] p-1 rounded-[4px] ">
        <span className="text-xs text-gray-500">{`Today, 13 Sep 2021`}</span>
        <button className="p-1 rounded-full hover:bg-gray-100">
         <img className='w-[10px] h-[8px]' src={img6} alt="" />
        </button>
      </div>
    </div>
    <div className="p-4 pt-2 grid gap-4">
      <div>
        <div className="text-xs font-medium text-left text-[#686868] mb-2">Priority</div>
        <ScheduleItem title="Review candidate applications" time="Today, 11:30 AM" />
      </div>
      <div>
        <div className="text-xs text-left text-[#686868] font-medium mb-2">Other</div>
        <ScheduleItem title="Interview with candidates" time="Today, 10:30 AM" />
        <ScheduleItem title="Short meeting with product designer from IT Departement" time="Today, 09:15 AM" />
      </div>
    </div>
    <div className="px-4 p-2  border-t-[1px] border-[#E0E0E0] ">
      <button className="text-red-500 hover:text-red-600 text-sm">Create a New Schedule</button>
    </div>
  </div>
)
}

function ScheduleItem({ title, time }) {
return (
  <div className="flex items-start bg-[#FAFAFA] border-[#E0E0E0] border-[0.5px] p-3 rounded-[6px] justify-between mb-4">
    <div className="grid gap-1">
      <p className="text-sm font-medium">{title}</p>
      <span className="text-xs font2 text-left text-gray-500">{time}</span>
    </div>
    <button className="p-1 rounded-full hover:bg-gray-100">
    <img src={img3} alt="" />
    </button>
  </div>
)
}



export default Dashboaed