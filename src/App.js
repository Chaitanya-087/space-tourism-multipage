import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Desitination from "./pages/destination/Desitination";
import Crew from "./pages/crew/Crew";
import Technology from "./pages/technology/Technology";
import React,{useState} from "react";
import data from './assets/data';

function App() {
  const [openSidebar,setOpenSidebar] = useState(false)
  const toggleSidebar = () => {
    setOpenSidebar(prev => !prev)
  }
  return (
    <Router>
        <Navbar isClose={openSidebar} toggle={toggleSidebar} />
        <Sidebar isOpen={openSidebar} toggle={toggleSidebar}/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/destination" element={<Desitination destinations = {data.destinations}/>}/>
        <Route path="/crew" element={<Crew crewMembers={data.crew}/>} />
        <Route path="/technology" element={<Technology technology={data.technology}/>} />
      </Routes>
    </Router>
  );
}




export default App;