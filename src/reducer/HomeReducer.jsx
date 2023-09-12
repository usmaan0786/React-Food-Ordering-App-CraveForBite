import React from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "Error":
      return {
        ...state,
        isError: true,
      };

    case "GET_PICKS_DATA":
      return {
        ...state,
        isLoading: false,
        topPicksArray: action.payload,
      };

    case "SET_MEALS_DATA":
      return {
        ...state,
        isLoading: false,
        Meals: action.payload,
      };
    case "ON_CLICK_MEALS":
      const { name, value } = action.payload;
      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };
    case "FILTER_MEALS":
      let { Meals } = state;
      let tempFilterMeals = [...Meals];
      const { category } = state.filters;

      if (category != "all") {
        tempFilterMeals = tempFilterMeals.filter((curElem) => {
          return curElem.category === category;
        });
      }
      console.log(tempFilterMeals)
      return {
        ...state,
        FilterMeals: tempFilterMeals,
      };

    case "SET_TRENDING_CATEGORIES":
        return{
            ...state, 
            TrendCategories : action.payload
        }
    default:
      return state;
  }
};

export default reducer;
