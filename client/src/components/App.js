import React from "react";
import { Route, Routes } from "react-router-dom";
import Signup from './Signup';
import BeforeLogin from './BeforeLogin';
import Login from './Login';
import NavBar from "./NavBar";
import FoodBusiness from "./FoodBusiness";
import ItemsMenu from "../pages/ItemsMenu";
import ItemDetail from "../pages/ItemDetail";
import Welcome from "./Welcome";
import Inventory from "../pages/Inventory";
import AddItem from "../pages/AddItem";
import ManageAccount from "../pages/ManageAccount";
import EditProfile from "../pages/EditProfile";
import MapContainer from "../pages/MapContainer";

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
          <Route path="/items" element={<ItemsMenu />} />
          <Route path="/items/:itemId" element={<ItemDetail />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/additem" element={<AddItem />} />
          <Route path="/manage-account" element={<ManageAccount />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/googlemap" element={<MapContainer />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
