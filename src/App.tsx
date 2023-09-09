import React from 'react';
import {Routes,Route} from 'react-router-dom'
import './App.css';
import './index.css'
import './components/Navbar'
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Addcontact from './components/Addcontact';
import ContactDetails from './components/ContactDetails';
import Home from './components/Home';
import Dashboard from './components/Dashboard';


function App() {
 

  return (
    <div className="App ">

    
      <Navbar/>
      <Sidebar/>
        
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/addcontact" element={<Addcontact />}/>
        <Route path="/mapsandcharts" element={<Dashboard/>}/>
        <Route path="/contactdetails/:index" element={<ContactDetails/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
