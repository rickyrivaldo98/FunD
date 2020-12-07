import React from "react";
// import { Container } from 'reactstrap';
import Header from "../components/NavbarLanding";
import TopContent from "../components/Content1";
import Subscribe from "../components/Content2";
import BottomContent from "../components/Content3";
import Footer from "../components/Footer";
import { getFullName } from "../Utils/Common";

const LandingPage = () => {
  const user = getFullName();
  return (
    <>
      {/* <Container> */}
      {console.log(user)}
      <Header />
      <TopContent />
      <Subscribe />
      <BottomContent />
      <Footer />
      {/* </Container> */}
    </>
  );
};

export default LandingPage;
