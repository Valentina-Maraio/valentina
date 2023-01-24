import React from "react";
import "./styles/Home.css";
import Menu from "../components/menu/Menu";
import Valentina from "../components/valentina/Valentina";
import Skills from '../components/skills/Skills'
import Work from '../components/work/Work'

const Home = () => {
  return (
    <>
      <Menu />
      <Valentina/>
      <Skills/>
      <Work/>
    </>
  );
};

export default Home;
