import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
} from "reactstrap";
import { useHistory } from "react-router-dom";
import { Modal } from "./Modal";
import { ModalLog } from "./ModalLog";
import "./NavbarLanding.css";


const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const [showModal, setShowModal] = useState(false);
  const [showModalLog, setShowModalLog] = useState(false);
  const openModal = () => {
    setShowModal((prev) => !prev);
  };
  const openModalLog = () => {
    setShowModalLog((prev) => !prev);
  };

  let history = useHistory();


  return (
    <>
      <div>
        <Modal showModal={showModal} setShowModal={setShowModal} />
        <ModalLog
          showModalLog={showModalLog}
          setShowModalLog={setShowModalLog}
        />
      </div>
      <div className="main-header">
        <div className="containerNav px-1">
          <Navbar expand="lg">
            <NavbarBrand href="/">
              <h3 style={{ color: "black" }}>
                <span style={{ color: "#7971EA" }}>Fun</span>d.
              </h3>
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="header-link ml-auto" navbar>
                <NavItem className="header-link">
                  <NavLink onClick={() => {history.push("/product");}}>Product</NavLink>
                </NavItem>
                <NavItem className="header-link">
                  <NavLink onClick={openModalLog}>Login</NavLink>
                </NavItem>
                <Button className="header-button" onClick={openModal}>
                  Sign Up
                </Button>{" "}
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      </div>
    </>
  );
};


export default Header;