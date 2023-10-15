import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import Game from "./Game";

function Navbar() {
  let navigate=useNavigate()
  var name=window.localStorage.getItem("Game")

const logout=()=>{
  window.localStorage.removeItem('Game')
  navigate('/')
}

  return (<>
    <button className="logout" onClick={logout}>Logout</button>
    <Parallax pages={2} style={{ top: "0", left: "0" }} classNameName="animation">
    
      <ParallaxLayer offset={0} speed={0.25}>
        <div className="animation_layer parallax" id="artback"></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.3}>
        <div classNameName="animation_layer parallax" id="mountain"></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.3}>
        <h1 id="title">vercel Game</h1>
        <h2 id="title2">Nice to see you {name} !!!</h2>
      
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.3}>
        <div className="animation_layer parallax" id="jungle1"></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.35}>
        <div className="animation_layer parallax" id="jungle2"></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.5}>
        <div className="animation_layer parallax" id="jungle3"></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.45}>
        <div className="animation_layer parallax" id="jungle4"></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.4}>
        <div className="animation_layer parallax" id="manonmountain"></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.35}>
        <div className="animation_layer parallax" id="jungle5"></div>
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={0.3}>
        <Game />
      </ParallaxLayer>
    </Parallax>
    </>
  );
}

export default Navbar;
