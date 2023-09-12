import React, { useContext } from "react";
import { HomeContext } from "../Context/HomeContext";

const TrendingCategories = () => {
  const { TrendCategories } = useContext(HomeContext);

  console.log("TrendCategories")
  console.log(TrendCategories)
  return (
    <div className="mt-[3rem]">
      <h1 className="text-[#ff5f5f] font-black lg:text-[3rem] text-[2rem] text-center">
        Trending Categories
      </h1>
      <div className="grid grid-cols-4 m-[2rem] lg:m-0 lg:flex lg:justify-center lg:items-center lg:space-x-[3rem]">
        {TrendCategories.map((currElem, index) => {
          return (
            <div key={index} className="">
              <h1 className="hover:scale-125 hover:text-[#ff5f5f] easy-out duration-200 font-luckiest-guy lg:text-[1.5rem] text-[1.2rem] my-[3rem] lg:text-right text-center">{currElem.name}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TrendingCategories;
