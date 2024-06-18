import React, { useState } from "react";
import "./Home.css";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import LeadingFranchise from "./LeadingFranchise";
import Modal from "./Modal";
import Businesscards from "./Businesscards";
import TopInternational from "./TopInternational";
import TopFranchises from "./TopFranchises";
import FeatureFranchises from "./FeatureFranchises";
import About from "./About";
import Footer from "./Footer";
import MainCarousel from "./MainCarosel";
import DropDown from "./DropDown";

function HomePage() {
  return (
    <div className="containerabc">
    <MainCarousel />
    <DropDown />
   

      {/* <Modal /> */}
      <div className="subcontainer">
        <TopInternational />
        <LeadingFranchise />
        <Businesscards />

        <TopFranchises />
        <FeatureFranchises />
        <About />
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
