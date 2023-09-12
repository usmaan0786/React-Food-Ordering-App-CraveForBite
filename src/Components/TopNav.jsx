import React, { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { BsSearch, BsCartCheckFill, BsFillBalloonHeartFill } from "react-icons/bs";
import { MdCancel, MdAccountCircle } from "react-icons/md";
import { TbTruckDelivery} from "react-icons/tb";
import { FaWallet} from "react-icons/fa";
import { BiSolidHelpCircle} from "react-icons/bi";



const TopNav = () => {
  const [sideNav, setSideNav] = useState(false);

  return (
    <>
      <div className="h-[4rem] z-50 relative flex items-center text-[#ffffffcc] rounded-[1rem] mt-[.1rem]"  >
        <div className="cursor-pointer ml-[1rem] hover:text-[2.4rem] hover:bg-white hover:text-[#ff5f5f] rounded-full p-1 easy-out duration-200 text-[2rem] ">
          <TiThMenu onClick={() => setSideNav(true)} />
        </div>
        <h1 className="ml-2 text-[#ff5f5f] font-luckiest-guy cursor-pointer hover:text-[2.5rem] lg:text-[2.3rem] text-[2rem] easy-out duration-200">
          <span className="">Crave</span>ForBite
        </h1>
      
        <div className="absolute lg:left-[36%] left-[18rem] flex items-center justify-center bg-[#e6e6e6cc] rounded-[.5rem] lg:w-[33rem]">
          <BsSearch className="text-[#333333] ml-[.5rem]" size={22} />
          <input
            type="text"
            placeholder="Search"
            className="ml-2 p-1 bg-transparent w-full text-[1rem] text-[#333333] rounded-[.5rem] focus:outline-none"
          />
        </div>
        <button className=" absolute right-4 hidden lg:flex items-center text-[1.2rem] px-3 ">
          <BsCartCheckFill size={25} className="pr-1" />
          Cart
        </button>

        {sideNav ? (
          <div
            className={"fixed z-20 top-0 left-0 bg-[#000000cc] w-full h-screen"} onClick={() => setSideNav(false)}
          >
            <div className="opacity-100 bg-[#000000cc] lg:w-[30rem] w-full h-screen easy-linear duration-300 border-r-2 border-[#252525]">
              <div className="p-2">
                <MdCancel
                  onClick={() => setSideNav(false)}
                  className="absolute text-[2rem] top-4 left-[27rem]  text-[#ff5f5f] hover:text-white hover:scale-125 easy-out duration-100 rounded-full"
                />
              </div>
              <h1 className="font-luckiest-guy mx-auto w-max text-[2.5rem] text-[#ff5f5f]">Yum Eats</h1>
              <ul className="text-white flex flex-col space-y-6 mt-[1rem] justify-center items-center font-extrabold text-[1.5rem] text-[#1b1b1bcc]">
                <li className="flex p-2 border-b-4 border-[#ff5f5f] justify-center items-center"><MdAccountCircle size={25} className="mr-[.2rem]"/> My Account</li>
                <li className="flex p-2 border-b-4 border-[#ff5f5f] justify-center items-center"><TbTruckDelivery size={25} className="mr-[.2rem]"/>Delivery</li>
                <li className="flex p-2 border-b-4 border-[#ff5f5f] justify-center items-center"><BsFillBalloonHeartFill size={25} className="mr-[.2rem]"/>My Favourite</li>
                <li className="flex p-2 border-b-4 border-[#ff5f5f] justify-center items-center"><FaWallet size={25} className="mr-[.2rem]"/>My Wallet</li>
                <li className="flex p-2 border-b-4 border-[#ff5f5f] justify-center items-center"><BiSolidHelpCircle size={25} className="mr-[.2rem]"/>Help</li>
              </ul>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default TopNav;
