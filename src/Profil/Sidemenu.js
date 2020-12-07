import React from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import { Button, Card, CardBody, Col, Row, Nav, NavItem } from "reactstrap";
import profil from "../images/no-profile-photo.png";
import icon1 from "../images/analytics.svg";
import icon2 from "../images/menu.svg";
import icon3 from "../images/calendar.svg";
import icon4 from "../images/ewallet.svg";
import icon5 from "../images/turn-off.svg";
import Navdash from "./Navdash";
import Dashboard from "./Dashboard";
import Subscription from "./Subscription";
import Wallet from "./Wallet";
import Date from "./Date";

function Sidemenu() {
  return (
    <div>
      <Navdash />

      <Row>
        <Col md={3}>
          <Card className="kardmenu">
            <CardBody>
              <div className="pictb">
                <img src={profil} className="pict" alt="pict" />
              </div>

              <div>
                <Nav className="side">
                  <NavItem className="side-men">
                    <NavLink
                      to="/sidemenu/dashboard"
                      activeClassName="active"
                      className="nav-link hov"
                    >
                      <img src={icon1} className="icon left" alt="pict" />
                      Dashboard
                    </NavLink>
                  </NavItem>

                  <NavItem className="side-men">
                    <NavLink
                      to="/sidemenu/subscription"
                      activeClassName="active"
                      className="nav-link hov"
                    >
                      <img src={icon2} className="icon left" alt="pict" />
                      Subscription
                    </NavLink>
                  </NavItem>

                  <NavItem className="side-men">
                    <NavLink
                      to="/sidemenu/date"
                      activeClassName="active"
                      className="nav-link hov"
                    >
                      <img src={icon3} className="icon left" alt="pict" />
                      Date
                    </NavLink>
                  </NavItem>

                  <NavItem className="side-men">
                    <NavLink
                      to="/sidemenu/wallet"
                      activeClassName="active"
                      className="nav-link hov"
                    >
                      <img src={icon4} className="icon left" alt="pict" />
                      E-Wallet
                    </NavLink>
                  </NavItem>
                </Nav>

                <Button active block className="text-left pl-5" id="logout">
                  <img src={icon5} className="icon left" alt="pict" />
                  Logout
                </Button>
              </div>
            </CardBody>
          </Card>
        </Col>

        <Switch>
          <Route path="/sidemenu/dashboard">
            <Dashboard />
          </Route>
          <Route path="/sidemenu/subscription">
            <Subscription />
          </Route>
          <Route path="/sidemenu/date">
            <Date />
          </Route>
          <Route path="/sidemenu/wallet">
            <Wallet />
          </Route>
        </Switch>
      </Row>
    </div>
  );
}

export default Sidemenu;
