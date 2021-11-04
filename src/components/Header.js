import React from "react";
import pathImg from '../assets/logo.svg';

function Home() {
  return (
    <header style={{display: "flex", alignItems: "center", justifyContent: "space-around", backgroundColor: "slateblue", color: "white"}}>
      <p>TINTAS PROMETEU</p>
      <img src={pathImg} width="80px" alt="gif-logo"/>
    </header>
  );
}

export default Home;
