import React from "react";
import Footer from "./componenets/Footer";
import Header from "./componenets/Header";
import Main from "./componenets/Main";


export default function App() {
  return(
    <>
      <Header className="header" />
      <Main className="main" />
      <Footer />
    </>
  );
}