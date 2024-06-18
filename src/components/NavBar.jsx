import React, { useState } from "react";
import "./MenuBarStyle.css";
import Modal from "./Modal";
import { Link } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modal, setModal] = useState(false);
  const [loginmodal, setLoginmodal] = useState();
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const toggleopenmodal = () => {
    setModal(!modal);
  };
  const handleCloseModal = () => {
    setModal();
  };
  const togglelogin = () => {
    setLoginmodal(!loginmodal);
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingLeft: "20px",
        paddingRight: "20px",
        height: "85px",
        backgroundColor: "#ffff",
        position: "fixed",
        top: "40px",
        left: 0,
        width: "100%",
        zIndex: 999,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          position: "relative",
        }}
      >
        <img
          src="list.svg"
          style={{ width: "25px", height: "30px", cursor: "pointer" }}
          onClick={toggleMenu}
        />
        <div className={`drawer ${menuOpen ? "open" : ""}`}>
          <div className="menu-header">
            {/* <span className="close-btn"> &#10006</span> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="custom-icon"
              viewBox="0 0 16 16"
              onClick={toggleMenu}
            >
              <path d="M15.683 3a2 2 0 0 0-2-2h-7.08a2 2 0 0 0-1.519.698L.241 7.35a1 1 0 0 0 0 1.302l4.843 5.65A2 2 0 0 0 6.603 15h7.08a2 2 0 0 0 2-2zM5.829 5.854a.5.5 0 1 1 .707-.708l2.147 2.147 2.146-2.147a.5.5 0 1 1 .707.708L9.39 8l2.146 2.146a.5.5 0 0 1-.707.708L8.683 8.707l-2.147 2.147a.5.5 0 0 1-.707-.708L7.976 8z" />
            </svg>
          </div>
          <div className="menu-content">
            <a href="#">Domestic Brands</a>
            <a href="#">Premium Brands</a>
            <a href="#">International</a>
          </div>
          <div className="menu-content">
            <a href="#">Fanchise Insights</a>
            <a href="#">News</a>
            <a href="#">Videos</a>
            <a href="#">Megazine</a>
            <a href="#">Top 100 Franchise</a>
            <a href="#">Most Trusted Franchise Brands</a>
          </div>

          <div className="menu-content">
            <h5>Our Group Website</h5>
            <a href="#">franchiseindia.com</a>
            <a href="#">entreprenuer.com</a>
            <a href="#">indianrtailer.com</a>
            <a href="#">restaurentindia.in</a>
            <a href="#">wellnessindia.org</a>
            <a href="#">educationbiz.com</a>

            <a href="#"> franchisebangladesh.com </a>
            <a href="#">businessex.com</a>

            <a href="#">licenseindia.com</a>
            <a href="#"> bradfordlicenseindia.com </a>
            <a href="#">franchiseindia.net</a>
            <a href="#"> franchiseindia.in</a>
            <a href="#"> francorp.in</a>
            <a href="#">franglobal.com</a>
            <a href="#">franchiseindiaventures.com</a>
            <a href="#">gauravmarya.com</a>
            <a href="#"> franchiseafrica.co</a>
          </div>
          <div className="menu-content">
            <a href="#">Sell Your Business</a>
            <a href="#">Buy a Brand License</a>
            <a href="#"> Expand Your Franchise</a>
            <a href="#">Loan Against Property</a>
          </div>
          <div className="menu-content">
            <a href="#">Advertise With us</a>
            <a href="#">Subscribe Magazine</a>
            <a href="#"> Reports & Books</a>
            <a href="#">event</a>
          </div>
          <div className="menu-content">
            <a href="#">Investor Signup</a>
            <a href="#"> Franchisor Signup</a>
          </div>
          <div className="icons">
            <img src="facebook.svg" alt="facebook" className="icon-image" />
            <img src="twitter.svg" alt="twitter" className="icon-image" />
            <img src="instagram.svg" alt="instgram" className="icon-image" />
            <img src="youtube.svg" alt="youtube" className="icon-image" />
            <img src="linkedin.svg" alt="linkedin" className="icon-image" />
          </div>
          <div>
            <div className="menu-contact">
              <a href="#">Abouts</a>
              <a href="#">Contact</a>
              <a href="#">FeedBack</a>
            </div>
            <p className="menu-toofree">Toll Free 1800 102 2007</p>
          </div>
        </div>

        <p
          style={{
            fontSize: "14px",
            fontFamily: "sans-serif",
            lineHeight: "1.3",
            fontWeight: "500",
          }}
        >
          Menu
        </p>
      </div>

      {/* <h3 style={{ color: "#333" }}>BusinessMama</h3> */}
      <img
        src="1_20240617_154249_0000.svg"
        alt="businessman"
        className="logo"
        style={{width:'100px' ,height:'85px',backgroundColor:'none'}}
      />
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "4px",
            paddingRight: "10px",
          }}
        >
          <img
            src="search.svg"
            style={{ width: "23px" }}
            onClick={toggleopenmodal}
          />
          {modal && <Modal handleClose={handleCloseModal} />}
          <p
            style={{
              fontSize: "13px",
              fontFamily: "sans-serif",
              fontWeight: "400",
              color: "#333333",
              cursor: "pointer",
            }}
          >
            Search
          </p>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
          <img src="person.svg" style={{ width: "23px" }} />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              paddingLeft: "10px",
            }}
          >
            <Register/>
            <span>/</span>
            {/* {loginmodal ? <Login handlelogonclose={togglelogin} /> : ""}
            <span style={{ cursor: "pointer" }} onClick={togglelogin}>
              Login
            </span> */}
            <Login />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
