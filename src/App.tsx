import React from "react";
import "./css/index.css";
// Router
import { Outlet } from "react-router-dom";
// Components
import SideNavbar from "./components/SideNavbar";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container-fluid d-flex p-0">
      <SideNavbar />
      <div className="col-sm-11 col-10">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}

export default App;
