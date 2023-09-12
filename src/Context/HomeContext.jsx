import React, { createContext, useEffect, useReducer, useState } from "react";
import { topPicks } from "../Data/Data";
import { mealData } from "../Data/Data";
import { categories } from "../Data/Data";
import reducer from "../Reducer/HomeReducer";
const HomeContext = createContext();

const InitialState = {
  topPicksArray: [],
  Meals: [],
  isLoading: false,
  isError: false,
  FilterMeals: [],
  TrendCategories : [],
  filters: {
    category: "all",
  },
};

const HomeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, InitialState);
  const getProducts = () => {
    dispatch({ type: "SET_LOADING" });
    try {
      dispatch({ type: "GET_PICKS_DATA", payload: topPicks });
      dispatch({ type: "SET_MEALS_DATA", payload: mealData });
      dispatch({ type: "SET_TRENDING_CATEGORIES", payload: categories });
    } catch (error) {
      dispatch({ type: "ERROR" });
    }
  };

  const ShowClickedData = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    dispatch({ type: "ON_CLICK_MEALS", payload: { name, value } });
    dispatch({ type: "FILTER_MEALS" });
  };

  useEffect(() => {
    return getProducts;
  }, []);

  return (
    <HomeContext.Provider value={{ ...state, ShowClickedData }}>
      {children}
    </HomeContext.Provider>
  );
};

export { HomeContext, HomeProvider };
