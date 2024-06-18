import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

function Header() {
  return (
    <div
      style={{
        width: "100%",
        height: "40px",
        backgroundColor: "#f1f1f1",
        paddingLeft: "20px",
        paddingRight: "20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        fontFamily: "Roboto",

        fontWeight: 100,
        position: "fixed",
        top: 0,
        left: 0,

        zIndex: 999,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <p style={{ fontSize: "13px" }}>Buy a Brand Licence</p>
        <p style={{ fontSize: "12px" }}>|</p>
        <p style={{ fontSize: "13px" }}>Sell Your Business</p>
        <p style={{ fontSize: "12px" }}>|</p>
        <p style={{ fontSize: "13px" }}>Expand Your Franchise</p>
        <p style={{ fontSize: "12px" }}>|</p>
        <p style={{ fontSize: "13px" }}>Advertise</p>
        <p style={{ fontSize: "12px" }}>|</p>
        <p style={{ fontSize: "13px" }}>Restaurent India</p>
        <p style={{ fontSize: "12px" }}>|</p>
        <p style={{ fontSize: "13px" }}>Loan Against Property</p>
      </div>
      {/* <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          style={{
            width: "90px",
            height: "30px",
            backgroundColor: " #fff",
            border: "none",
            color: " #555",
            fontSize: "12px",
          }}
        >
          En-english
        </button>
        <div
          className="dropdown-menu"
          aria-labelledby="dropdownMenuButton"
          style={{ width: "20px", height: "0px" }}
        >
         
          <a className="dropdown-item" href="#">
            Option 1
          </a>
          <a className="dropdown-item" href="#">
            Option 2
          </a>
          <a className="dropdown-item" href="#">
            Option 3
          </a>
        </div>
      </div> */}
      <Dropdown>
        <Dropdown.Toggle
          variant="secondary"
          id="dropdown-basic"
          style={{
            width: "100px",
            height: "32px",
            backgroundColor: " #fff",
            border: "none",
            color: " #555",
            fontSize: "13px",
            position: "relative",
          }}
        >
          En-English
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {/* Dropdown items */}
          <Dropdown.Item href="#"> En-English</Dropdown.Item>
          <Dropdown.Item href="#">Hindhi</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default Header;
