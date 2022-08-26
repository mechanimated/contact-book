import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./index.css";
import NewContactForm from "./components/NewContactForm";
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './components/Home'
import ContactContainer from "./components/ContactContainer";
import FavoriteContactContainer from "./components/FavoriteContactContainer"
import 'bulma/css/bulma.min.css';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        
        <Route path="ContactList" element={<ContactContainer />} />
        <Route path="/FavoriteContactList" element={<FavoriteContactContainer/>} />
        <Route path="NewContactForm" element={<NewContactForm />} />
        <Route path="Home" element={<Home />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root"));
