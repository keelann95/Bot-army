// import React from 'react'
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import BotDetails from "./components/BotDetails";
import Home from "./components/Home";
import BotCollection from "./components/BotCollection";
import YourBotArmy from "./components/YourBotArmy";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/botCollection" element={<BotCollection />} />
        <Route path="/yourBotArmy" element={<YourBotArmy />} />
        <Route path="/bots/:id" element={<BotDetails />} />
      </Routes>
    </>
  );
};

export default App;
