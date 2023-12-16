import '../styles/App.css';
import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { UserContext } from "./context/user";
import Signup from './Signup';
import Welcome from './Welcome';
import BeforeLogin from './BeforeLogin';

function App() {
  const { user } = useContext(UserContext);

  if (!user) return <LoginForm />

  return (
    <div className="App">
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/beforelogin" element={<BeforeLogin />} />
      </Routes>
    </div>
  );
}

export default App;
