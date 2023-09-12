import React from "react";
import Featured from "../Components/Featured";
import Delivery from "../Components/Delivery";
import TopPicks from "../Components/TopPicks";
import Meal from "../Components/Meal";
import TrendingCategories from "../Components/TrendingCategories";

const Home = () => {
  return (
    <div>
      <Featured />
      <Delivery />
      <TopPicks />
      <Meal />
      <TrendingCategories />
    </div>
  );
};

export default Home;
