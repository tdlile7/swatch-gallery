import React, { useContext, useEffect } from "react";
import Header from "./components/layout/Header";
import { Route, Switch, Redirect } from "react-router-dom";
import SideBar from "./components/layout/SideBar";
import ListView from "./components/pages/ListView";
import DetailView from "./components/pages/DetailView";
import ColorContext from "./contexts/Color/colorContext";
import "./assets/scss/App.scss";

const App = () => {
  //Contexts
  const colorContext = useContext(ColorContext);
  const {
    getColors,
    selectedCategories,
    searchValue,
    filteredColors,
    setFilteredColors,
    setPagesCount
  } = colorContext;

  //Makes http request to get all colors from database, once the application has mounted
  useEffect(() => {
    getColors();
    // eslint-disable-next-line
  }, []);

  //Updates the display on which colors will be shown, based on changes to filter criteria (i.e. selectedCategories, searchValue)
  useEffect(() => {
    setFilteredColors();
    // eslint-disable-next-line
  }, [selectedCategories, searchValue]);

  //Updates pages count for the ListView pagination when the quanity of filtered colors change
  useEffect(() => {
    setPagesCount();
    // eslint-disable-next-line
  }, [filteredColors]);

  return (
    <div className="app">
      <Header />
      <div className="container">
        <SideBar />
        <Switch>
          <Route path="/" exact component={ListView} />
          <Route path="/details" component={DetailView} />
          <Redirect to="/" />
        </Switch>
      </div>
    </div>
  );
};

export default App;
