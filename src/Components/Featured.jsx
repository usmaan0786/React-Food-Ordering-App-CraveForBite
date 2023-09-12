import React, { useState } from "react";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { BsDot } from "react-icons/bs";
const Featured = () => {
  const sliders = [
    {
      url: "https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672076/NetflixApp/burger_emxbtv.jpg",
    },
    {
      url: "https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672452/NetflixApp/pizza_osjb4f.jpg",
    },
    {
      url: "https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672612/NetflixApp/ric_a4ewxo.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % sliders.length;
    setCurrentIndex(newIndex);
  };

  const prevSlide = () => {
    const newIndex = (currentIndex - 1 + sliders.length) % sliders.length;
    setCurrentIndex(newIndex);
  };

  const movetoSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  return (
    <div className="z-0 p-4 relative shadow-black shadow-md">
      <div
        className="h-[20rem] w-[100%] lg:h-[35rem] rounded-2xl bg-center bg-cover easy-linear duration-200"
        style={{ backgroundImage: `url(${sliders[currentIndex].url})`}}
      ></div>

      <div className="absolute top-[43%]" onClick={prevSlide}>
        <AiFillCaretLeft className="hover:text-[#db2424] text-[2rem] lg:text-[3rem] lg:hover:scale-150  easy-out duration-200" />
      </div>
      <div className="absolute top-[43%] right-4" onClick={nextSlide}>
        <AiFillCaretRight className="hover:text-[#db2424] text-[2rem] lg:text-[3rem] lg:hover:scale-150 duration-200" />
      </div>

      <div className="lg:text-[4rem] text-[3rem] flex mt-[-.5rem] space-x-[-1.5rem] justify-center items-center">
        {sliders.map((currElem, index) => (
          <BsDot
            key={index}
            onClick={() => movetoSlide(index)}
            className={`${currentIndex === index ? " text-[#db2424] text-[3.5rem] lg:text-[4.5rem] easy-out duration-200 " : ""}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Featured;
