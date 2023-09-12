import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import React, { useContext } from "react";
import { HomeContext } from "../Context/HomeContext";

const TopPicks = () => {
  const { topPicksArray, isLoading } = useContext(HomeContext);
  {
    if (isLoading) {
      <p>Loading....</p>;
    }
  }
  return (
    <div className="mt-[3rem] shadow-black shadow-md py-10">
      <h1 className="text-[#ff5f5f]  font-black lg:text-[3rem] text-[2rem] text-center">
        Top Picks
      </h1>

      <div className="mt-[2rem] flex lg:mx-[5rem] mx-[3rem]">
        <Splide
        className=""
          options={{ perPage: 4, gap: "1.5rem", grag: "free", arrows: false }}
        >
          {topPicksArray.map((currElem) => {
            return (
              <SplideSlide key={currElem.id} className="">
                <div className="z-0 relative  px-[4rem] shadow-lg shadow-black hover:scale-105 ease-out duration-200">
                  <div className="absolute  mt-[.5rem m-2">
                    <div className="bg-[#000000cc] rounded-[.5rem]">
                      <p className="font-luckiest-guy mt-[.2rem] text-[2rem] first-letter:uppercase ">
                        {currElem.title}
                      </p>
                      <p className="px-2 text-[1.5rem] ">{currElem.price}</p>
                    </div>

                    <button className="text-[1.3rem] mt-[18rem]">
                      Add to Cart
                    </button>
                  </div>
                  <img
                    src={currElem.img}
                    className="h-[28rem] object-cover rounded-[1rem] shadow-xl shadow-[#000000]"
                    alt="TopPicksimage"
                  />
                </div>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </div>
  );
};

export default TopPicks;
