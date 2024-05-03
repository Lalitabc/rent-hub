import "./App.css";
import BookingPage from "./Components/BookingPage";
import Footer from "./Components/Footer";
import React, { useState } from 'react'
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";

import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import FleetPage from "./Pages/FleetPage";
import HomePage from "./Pages/HomePage";
import TeamPage from "./Pages/TeamPage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import SignUp from "./Pages/SignUp";
import StoreContext from "./store/store";
import Cart from "./Components/Cart";

function App() {


  const [data, setData] = useState([])
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isLogged, setIsLogged] = useState(false); // State to track login status


  const addTocart = (item) => {
    
    const index = data.findIndex((cartItem) => cartItem.id === item.id);

    if (index !== -1) {
     
      const newData = [...data];
      newData[index] = { ...newData[index], countItem: newData[index].countItem + 1 };
      setData(newData);
    } else {
   
      setData((prevData) => [...prevData, { ...item, countItem: 1 }]);
    }
  };


  const deleteFromcart = (id) => {
    setData(prevData => prevData.filter(item => item.id !== id));

  }

  return (
    <StoreContext.Provider value={{ addTocart, data, deleteFromcart,isLoggedIn, setIsLoggedIn ,isLogged, setIsLogged}}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/fleet" element={<FleetPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/bookcar" element={<BookingPage />} />
          <Route path="/loginpage" element={<LoginPage />} />
          <Route path="/signuppage" element={<SignUp />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </StoreContext.Provider>
  );
}

export default App;
