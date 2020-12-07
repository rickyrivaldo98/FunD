import React from "react";
import LandingPage from "./pages/Landing";
import Product from "./pages/Product";
import Sidemenu from "./Profil/Sidemenu";
import { Switch, Route } from "react-router-dom";
import "./Profil/Style.css"


const App = () => {
  return (
    <>
      <Switch>
        <Route path="/sidemenu">
          <Sidemenu/>
        </Route>
        <Route path="/product">
          <Product />
        </Route>
        <Route path="/">
          <LandingPage />
        </Route>
      </Switch>
    </>
  );
};


export default App;