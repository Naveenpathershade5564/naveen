import React, { useState } from "react";
import SearchBar from "./SearchBar";
import "./Modal.css";

function Modal({ handleClose }) {
  const [button1Active, setButton1Active] = useState("category");
  const [dropdownValue1, setDropdownValue1] = useState("select industry");
  const [dropdownValue2, setDropdownValue2] = useState("select sector");
  const [dropdownValue3, setDropdownValue3] = useState("select service");

  const handleDropdown1Change = () => {
    setButton1Active("category");
    setDropdownValue1("select industry");
    setDropdownValue2("select sector");
    setDropdownValue3("select service");
  };
  const handleDropdown2Change = () => {
    setButton1Active("location");
    setDropdownValue2("select state");
    setDropdownValue3("select city");
  };

  const handleDropdown3Change = () => {
    setButton1Active("investment");
    setDropdownValue2("select min amount");
    setDropdownValue3("select max amount");
  };

  return (
    <div className="maincontainer">
      <div className="modal-content1">
        <span onClick={handleClose} className="closebutton">
          x
        </span>
        <SearchBar />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "30px",
            paddingLeft: "40px",
            marginTop: "25px",
          }}
        >
          <button
            onClick={handleDropdown1Change}
            className={button1Active === "category" ? "buttonactive" : "button"}
          >
            category
          </button>
          <button
            onClick={handleDropdown2Change}
            className={button1Active === "location" ? "buttonactive" : "button"}
          >
            location
          </button>
          <button
            onClick={handleDropdown3Change}
            className={
              button1Active === "investment" ? "buttonactive" : "button"
            }
          >
            investment
          </button>
        </div>
        <div className="modalselectors">
          <select
            value={dropdownValue1}
            onChange={(e) => setDropdownValue1(e.target.value)}
            className="selector"
          >
            <option value={dropdownValue1}>{dropdownValue1}</option>
            <option value="hello">hello</option>
            <option value="you">you</option>
          </select>
          <select
            value={dropdownValue2}
            onChange={(e) => setDropdownValue2(e.target.value)}
            className="selector"
          >
            {dropdownValue2 === "select state" ? (
              <>
                <option value={dropdownValue2}>{dropdownValue2}</option>
                <option value="home">home</option>
                <option value="house">house</option>
              </>
            ) : dropdownValue2 === "select min amount" ? (
              <>
                <option value={dropdownValue2}>{dropdownValue2}</option>
                <option value="1000">1000</option>
                <option value="1000">1000</option>
              </>
            ) : (
              <option value={dropdownValue2}>{dropdownValue2}</option>
            )}
          </select>
          <select
            value={dropdownValue3}
            onChange={(e) => setDropdownValue3(e.target.value)}
            className="selector"
          >
            {dropdownValue3 === "select city" ? (
              <>
                <option value={dropdownValue3}>{dropdownValue3}</option>
                <option value="Hydrabad">hydrabad</option>
                <option value="nalgonda">nalgonda</option>
                <option value="Hydrabad">hydrabad</option>
                <option value="nalgonda">nalgonda</option>
              </>
            ) : dropdownValue3 === "select max amount" ? (
              <>
                <option value={dropdownValue3}>{dropdownValue3}</option>
                <option value="9000">9000</option>
                <option value="10000">10000</option>
                <option value="9000">9000</option>
                <option value="10000">10000</option>
              </>
            ) : (
              <option value={dropdownValue3}>{dropdownValue3}</option>
            )}
          </select>
        </div>
        <button className="button1" onClick={handleDropdown1Change}>
          ClearAll
        </button>
      </div>
    </div>
  );
}

export default Modal;
