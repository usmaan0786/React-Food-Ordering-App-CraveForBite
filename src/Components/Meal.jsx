import React, { useContext } from "react";
import { HomeContext } from "../Context/HomeContext";
import MealsGridView from "./MealsGridView";

const Meal = () => {
  const {
    Meals,
    ShowClickedData,
  } = useContext(HomeContext);

  const vals = Meals.map((currElem) => currElem.category);
  const uniqueItems = ["all", ...new Set(vals)];

  return (
    <div className="mt-[3rem] ease-linear duration-300">
      <h1 className="text-[#ff5f5f]  font-black lg:text-[3rem] text-[2rem] text-center">
        Our Meals
      </h1>
      <div className="flex justify-center items-center lg:text-[1.5rem] text-[1.2rem] space-x-[1rem] mt-[2rem]">
        {uniqueItems.map((currElem, index) => {
          return (
            <button
              key={index}
              onClick={ShowClickedData}
              name="category"
              value={currElem}
              className="bg-[#ffaf37] px-[1rem] p-2 rounded-[.5rem] first-letter:uppercase text-[#ffffff] font-black"
            >
              {currElem}
            </button>
          );
        })}
      </div>
      <MealsGridView />
    </div>
  );
};

export default Meal;
