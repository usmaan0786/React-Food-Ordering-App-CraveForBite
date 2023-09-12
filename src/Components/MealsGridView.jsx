import React, { useContext } from "react";
import { HomeContext } from "../Context/HomeContext";

const MealsGridView = () => {
  const { FilterMeals } = useContext(HomeContext);

  return (
    <div className="flex items-center justify-center">
      <div className="grid lg:grid-cols-4 space-x-[1.5rem] space-y-[2rem] p-[5rem] shadow-black shadow-md ">
        {FilterMeals.map((currElem) => {
          return (
            <div key={currElem.id} className=" flex justify-center shadow-black shadow-lg p-2 relative hover:scale-105 ease-out duration-200">
              <div className="absolute mt-[.5rem] px-2">
                <div className="bg-[#000000cc] rounded-[.5rem] px-2">
                  <p className="font-luckiest-guy text-[1.5rem] first-letter:uppercase ">
                    {currElem.name}
                  </p>
                  <p className="px-2 text-[1.2rem] ">{currElem.price}</p>
                </div>
              </div>
              <img
                src={currElem.image}
                className="h-[20rem] w-[25rem] object-cover rounded-[rem]"
                alt="TopPicksimage"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MealsGridView;
