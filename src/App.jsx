import React from "react";
import { Routes, Route, Link } from "react-router";
import LandingPage from "./pages/LandingPage";
import Header from "./componenets/Header";
import Footer from "./componenets/Footer";


export default function App() {
  return(
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={ <LandingPage /> }/>



        </Routes>
      </main>
      <Footer />
    </>
  );
}