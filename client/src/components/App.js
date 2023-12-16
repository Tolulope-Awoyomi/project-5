import React from "react";
import { Route, Routes } from "react-router-dom";
import Signup from './Signup';
import BeforeLogin from './BeforeLogin';
import Login from './Login';
import NavBar from "./NavBar";
import FoodBusiness from "./FoodBusiness";
import ItemsMenu from "../pages/ItemsMenu";
import Welcome from "./Welcome";

function App() {
  return (
    <>
      <header className="App-header">
        <NavBar />
      </header>

      <div className="App">
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/beforelogin" element={<BeforeLogin />} />
          <Route path="/food-business" element={<FoodBusiness />} />
          <Route path="/items-menu" element={<ItemsMenu />} />
          <Route path="/welcome" element={<Welcome />} />
        </Routes>
      </div>
    </>
  );
}

export default App;