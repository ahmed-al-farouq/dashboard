import './css/App.css';
// Router
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// Components
import React from 'react';
import SideNavbar from './Components/Navbar/SideNavbar';
import Header from './Components/Header';
import Dashboard from './Components/Dashboard/Dashboard';
import Projects from './Components/Projects/Projects';
import OurCutomers from './Components/OurCutomers/OurCutomers';
import Profile from './Components/Profile/Profile';
import Footer from './Components/Footer';
import NotFound from './Components/NotFound';

function App() {
  return (
    <BrowserRouter>
      <div className="container-fluid d-flex p-0">
        <SideNavbar />
        <div className="col-sm-11 col-10">
          <Header />
          <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/our-customers" element={<OurCutomers />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
