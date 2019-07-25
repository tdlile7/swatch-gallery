import {
  GET_COLORS,
  FILTER_COLORS,
  PAGE_CHANGE,
  ON_CATEGORY_SELECT,
  RESET_SETTINGS,
  ON_SELECT_COLOR,
  SET_PAGES_COUNT,
  SET_SEARCH_VALUE
} from "../types";

//Import utility function to generate pages count
import generatePageCount from "../../assets/js/pagination";

export default (state, action) => {
  switch (action.type) {
    case GET_COLORS:
      return {
        ...state,
        colors: [...action.payload],
        pagesCount: generatePageCount([...action.payload], state.pageSize)
      };

    case FILTER_COLORS:
      let filteredColors;
      //No filter criteria, no colors will be filtered for display
      if (state.selectedCategories.length === 0 && state.searchValue === "") {
        filteredColors = null;
      }

      //Filters color based on color categories selected
      if (state.selectedCategories.length > 0) {
        filteredColors = state.colors.filter(color => {
          return state.selectedCategories.some(
            category => category === color.category
          );
        });
      }

      //Filters colors based on SearchBox input component value
      if (state.searchValue !== "") {
        if (filteredColors)
          filteredColors = filteredColors.filter(color => {
            return color.category.includes(state.searchValue);
          });
        else
          filteredColors = state.colors.filter(color => {
            return color.category.includes(state.searchValue);
          });
      }
      return {
        ...state,
        filteredColors,
        currentPage: 1
      };

    case PAGE_CHANGE:
      return {
        ...state,
        currentPage: action.payload
      };

    case ON_CATEGORY_SELECT:
      const selectedCategories = [...state.selectedCategories];

      //If color category was previously selected will unselect
      if (selectedCategories.includes(action.payload)) {
        const index = selectedCategories.indexOf(action.payload);
        selectedCategories.splice(index, 1);
      } else {
        //Selecs color category
        selectedCategories.push(action.payload);
      }
      return {
        ...state,
        selectedCategories
      };

    case ON_SELECT_COLOR:
      return {
        ...state,
        selectedColor: action.payload
      };

    case SET_SEARCH_VALUE:
      return {
        ...state,
        searchValue: action.payload
      };

    case SET_PAGES_COUNT:
      const pagesCount = state.filteredColors
        ? generatePageCount(state.filteredColors, state.pageSize)
        : generatePageCount(state.colors, state.pageSize);
      return {
        ...state,
        pagesCount
      };

    case RESET_SETTINGS:
      return {
        ...state,
        filteredColors: null,
        randomColor: null,
        currentPage: 1,
        pagesCount: generatePageCount(state.colors, state.pageSize),
        selectedCategories: [],
        searchValue: ""
      };

    default:
      return state;
  }
};
