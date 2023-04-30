import React from "react";
import { name, city } from "../data/data.js";

const fireBrick = {
  color: "firebrick"
}

function Home(props) {
  return (
  
  <div id="home">Home
  <h1 style={fireBrick}> {name} is a Web Developer from {city} </h1>
  </div>
  
  )
  }
export default Home;
