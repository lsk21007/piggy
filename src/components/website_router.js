import React, { useState } from "react";
import Navbar from "../components/index/Navbar.js"
import Index from "../components/index/index.js"
import Todolist from "../components/Todolist/Todolist.js"
import Login from "./logIn/logIn"
import GoSkiing from "./plan/GoSkiing"
import NorthernEurope from "./plan/NorthernEurope"
import TakePhotos from "./plan/TakePhotos"
import WatchSnow from "./plan/WatchSnow"
import Video from './Video/Video'
import PigFamily from './PigFamily/PigFamily'
import Register from './register/register'
import theme from "./theme"
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function Setup() {
  const [authorize, setAuthorize] = useState('')
  const handleAuth = (Auth) => {
    setAuthorize(Auth);
  }
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Index auth={authorize} />} />
          <Route path="/login" element={<Login uploadAuth={handleAuth} />} />
          <Route path="/Todolist" element={<Todolist auth={authorize} />} />
          <Route path="/watchsnow" element={<WatchSnow />} />
          <Route path="/goskiing" element={<GoSkiing />} />
          <Route path="/takephotos" element={<TakePhotos />} />
          <Route path="/northernEurope" element={<NorthernEurope />} />
          <Route path="/Video" element={<Video auth={authorize} uploadAuth={handleAuth} />} />
          <Route path="/PigFamily" element={<PigFamily />} />
          <Route path="/register07" element={<Register />} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default Setup;