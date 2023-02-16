import React, { Component } from "react";

import Cartproduct from "./components/cart-product/Cartproduct";
import Header from "./components/header/Header.jsx"
import Listproduct from "./components/list-product/Listproduct";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <>
      <div className='App'>
        <Header />
        <div className="row"><Listproduct/>
        <Cartproduct/></div>
        
      </div>
    </>
  );
}

export default App;
