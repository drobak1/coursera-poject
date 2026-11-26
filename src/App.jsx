import React, { useState, useReducer } from "react";
import { Routes, Route, Link } from "react-router";
import LandingPage from "./pages/LandingPage";
import Header from "./componenets/Header";
import Footer from "./componenets/Footer";
import BookingPage from "./pages/BookingPage";

function initializeTimes() {
  return [
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00"
  ];
}

function updateTimes(state, action) {
  return state.filter(time => time !== action);
}

export default function App() {


  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    null,
    initializeTimes
  );


  return(
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={ <LandingPage /> }/>

          <Route path="/booking" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch}/> } />


        </Routes>
      </main>
      <Footer />
    </>
  );
}