import React, { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { UserContext } from "./context/user";
import Signup from './Signup';
import BeforeLogin from './BeforeLogin';
import Login from './Login';
import NavBar from "./NavBar";
import FoodBusiness from "./FoodBusiness";
import ItemsMenu from "../pages/ItemsMenu";

function PrivateRoute({ children }) {
  const { user } = useContext(UserContext);
  return user ? children : <Navigate to="/login" />;
}

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
        </Routes>
      </div>
    </>
  );
}

export default App;
