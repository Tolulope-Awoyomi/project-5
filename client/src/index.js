import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
import App from '../src/components/App';
import { UserProvider } from "./components/context/user";
import { ItemsProvider } from "./components/context/items";

ReactDOM.render(
  <Router>
    <UserProvider>
      <ItemsProvider>
      <App />
      </ItemsProvider>
    </UserProvider>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

