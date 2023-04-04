import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from './components/navbar';
import { LandingPage } from './pages/landingpage';

function App() {

  return (
    <div className="App bg-[#323b0a] text-white">
    <Router>
      <Navbar/>
      <Routes>
      <Route path="/" element={<LandingPage />} />
      </Routes>
    </Router>
    </div>
  )
}

export default App
