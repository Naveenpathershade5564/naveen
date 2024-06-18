import React from "react";
import Header from "./Header";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";

function HomeLayOut() {
  return (
    <div>
      <Header />
      <NavBar />
      <Outlet />
    </div>
  );
}

export default HomeLayOut;
