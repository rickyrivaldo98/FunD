import React from "react";
import { Container, Row, Navbar, NavbarBrand, Nav, NavItem } from "reactstrap";
import { useHistory } from "react-router-dom";
import notif from "../images/notifications-bell-button.svg"
import profil from "../images/no-profile-photo.png";
import product from "../images/shopping-bag.svg";

const Navdash = () => {

  let history = useHistory();

  return (
    <Navbar className="navdash">
      <Container>
        <Row>
          <NavbarBrand>
              <span style={{color:"#7971EA"}}>Fun</span><span style={{color:"black"}}>d.</span>
          </NavbarBrand>

          <Nav className="notif mr-auto">
            <NavItem>
                <img src={product} onClick={() => {history.push("/product");}} className="picnot" alt="pict" />
            </NavItem>
            <NavItem>
                <img src={notif} className="picnot" alt="pict" />
            </NavItem>
            <NavItem>
                <img src={profil} className="picprof" alt="pict" />
            </NavItem>
          </Nav>
        </Row>
      </Container>
    </Navbar>
  );
};


export default Navdash;