import React from "react";
import Nav from './nav'
import Home from "./home";
import Card from "./card";
const App= () =>{
  return(
    <div className="bg-[#f5f5fd] min-h-screen">
      <Nav />
      <Home />
    </div>
  )
}

export default App;