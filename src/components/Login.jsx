import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import "./Login.css";

function Login() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <p onClick={handleShow} style={{cursor:'pointer'}}>Login</p>

      <Modal show={show} onHide={handleClose} dialogClassName="custom-modal">
        <Modal.Header>
          <button className="close-button" onClick={handleClose}>
            &times;
          </button>

          <Modal.Title >Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="custom-label">Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <div style={{ display: "flex", alignItems: "center", gap: "40px" }}>
              <Button variant="primary" type="submit">
                Login
              </Button>
              <Button variant="secondary" type="submit">
                Register
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Login;
