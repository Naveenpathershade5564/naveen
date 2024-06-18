import React, { useState } from 'react'
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { Form, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'

function DropDown() {
    const [price, setPrice] = useState(0);

    const handlePriceChange = (event) => {
      setPrice(parseInt(event.target.value, 10));
    };
    
  return (
    <div>
    <div style={{paddingTop:'40px',paddingLeft:'65px',display:'flex' ,alignItems:'center',gap:'45px'}}>
          <DropdownButton
            id="dropdown-basic-button"
            title="Dropdown button"
            className="custom-dropdown"
            drop = 'down'
          >
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </DropdownButton>
          <DropdownButton
            id="dropdown-basic-button"
            title="Dropdown button"
            className="custom-dropdown"
              drop = 'down'
          >
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </DropdownButton>
          <DropdownButton
            id="dropdown-basic-button"
            title="Dropdown button"
            className="custom-dropdown"
              drop = 'down'
          >
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </DropdownButton>
      
        </div>
            <div style={{ marginBottom: '20px',paddingTop:'30px',paddingLeft:'65px' }}>
          
     

            
            <div style={{display:'flex' ,alignItems:'center',gap:'28%' ,color:'olive' }}>
                <b>0</b>
                <b>2CR</b>
            </div>
            <input
              type="range"
              id="priceRange"
              min="0"
              max="20000000"
              step="100000"
              value={price}
              onChange={handlePriceChange}
              style={{       width: '30%',
                color: 'orange',
                marginRight: '10px',
               
                
               }}
            />
            <div>
            <p style={{color:'olive' ,fontSize:'16px' ,paddingLeft:'80px'}}>Selected Price: <b>{price.toLocaleString('en-IN')}</b> INR</p>
          </div>
          </div>
          
          </div>
  )
}

export default DropDown