import './App.css'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from './components/navbar';
import { LandingPage } from './pages/landingpage';
import { ScrollToTop } from './components/scrolltotop';
import { useState } from 'react';
import { About } from './pages/about';
import { Portfolio } from './pages/portfolio';
import { Contact } from './pages/contact';
import { AddPicture } from './pages/addPictures';
import {Admin} from './pages/Admin';

export const Theme = React.createContext();
export const Settheme = React.createContext();

function App() {

  const [theme, settheme] = useState("Dark");

  return (
    <div className={theme === "Dark" ? "App bg-[#000009] text-white bodyfont" : theme === "Light" ? "App bg-white text-[#323b0a] bodyfont" : ""}>
      <Theme.Provider value={theme}>
        <Settheme.Provider value={settheme}>
    <Router>
     <ScrollToTop>
     <Navbar/>
      <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/About" element={<About />} />
      <Route path="/Portfolio" element={<Portfolio />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/AddPicture" element={<AddPicture />} />
      <Route path="/Admin" element={<Admin />} />
      </Routes>
     </ScrollToTop>
    </Router>
    </Settheme.Provider>
    </Theme.Provider>
    </div>
  )
}

export default App
