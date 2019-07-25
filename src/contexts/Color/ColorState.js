import React, { useReducer } from "react";
import ColorContext from "./colorContext";
import colorReducer from "./colorReducer";
import axios from "axios";
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

//Set base url for axios calls to database
axios.defaults.baseURL = process.env.REACT_APP_SWATCH_GALLERY_API_URL;

const ColorState = props => {
  // Initial State
  const initialState = {
    colors: [],
    filteredColors: null,
    randomColor: null,
    currentPage: 1,
    pagesCount: null,
    pageSize: 12,
    selectedColor: null,
    selectedCategories: [],
    searchValue: ""
  };

  //Initialize reducer
  const [state, dispatch] = useReducer(colorReducer, initialState);

  //Get all colors from database
  const getColors = async () => {
    try {
      const colors = await axios.get("/api/colors");
      dispatch({ type: GET_COLORS, payload: colors.data });
    } catch (err) {
      console.log("Error has occurred with the server", err);
    }
  };

  //Filter colors based on color category selected, search box value, and current page
  const setFilteredColors = () => {
    dispatch({ type: FILTER_COLORS });
  };

  //Updates current page
  const onPageChange = page => {
    dispatch({ type: PAGE_CHANGE, payload: page });
  };

  //Toggles selection of an input color category
  const onCategorySelect = category => {
    dispatch({ type: ON_CATEGORY_SELECT, payload: category });
  };

  //Updates which color is selected to be showcased in the DisplayView component
  const onSelectColor = color => {
    dispatch({ type: ON_SELECT_COLOR, payload: color });
  };

  //Updates search value of the SearchBox input component
  const setSearchValue = value => {
    dispatch({ type: SET_SEARCH_VALUE, payload: value });
  };

  //Calculate the number of times the ListView component will be paginated
  const setPagesCount = () => {
    dispatch({ type: SET_PAGES_COUNT });
  };

  //Resets the entire state to the original values
  const resetSettings = () => {
    dispatch({ type: RESET_SETTINGS });
  };

  const contextPayload = {
    colors: state.colors,
    filteredColors: state.filteredColors,
    randomColor: state.randomColor,
    currentPage: state.currentPage,
    pagesCount: state.pagesCount,
    pageSize: state.pageSize,
    selectedColor: state.selectedColor,
    selectedCategories: state.selectedCategories,
    searchValue: state.searchValue,
    getColors,
    setFilteredColors,
    onPageChange,
    onCategorySelect,
    onSelectColor,
    setSearchValue,
    setPagesCount,
    resetSettings
  };

  return (
    <ColorContext.Provider value={contextPayload}>
      {props.children}
    </ColorContext.Provider>
  );
};

export default ColorState;
