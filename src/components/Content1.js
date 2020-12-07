import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import './Contents.css';
import Logo1 from '../images/Logo1.png';
import { Modal } from "./Modal";
import { ModalLog } from "./ModalLog";


const TopContent = (props) => {

    // const [isOpen, setIsOpen] = useState(false);
    // const toggle = () => setIsOpen(!isOpen);
  
    const [showModal, setShowModal] = useState(false);
    const [showModalLog, setShowModalLog] = useState(false);
    const openModal = () => {
      setShowModal((prev) => !prev);
    };
    // const openModalLog = () => {
    //   setShowModalLog((prev) => !prev);
    // };

    return (
        <>
        <div>
            <Modal showModal={showModal} setShowModal={setShowModal} />
            <ModalLog
            showModalLog={showModalLog}
            setShowModalLog={setShowModalLog}
            />
        </div>
        <div className="header">
            <Container fluid>
                <Row>
                    <Col lg="6" className="contentjumb">
                        <h1 className="contenttext1">
                            Halo
                            <br />
                            Subscription
                            <br />
                            Manager.
                        </h1>
                        <Button className="button1" onClick={openModal}>
                            JOIN NOW
                        </Button>
                    </Col>
                    <Col lg="6">
                        <img 
                        src={Logo1} 
                        alt="Logo" 
                        className="img-header" />
                    </Col>
                </Row>
            </Container>
        </div>
        </>
    )




    //     <>
    //         <Jumbotron fluid className="pb-0 mb-0">
    //             <Container fluid className="main-jumbotron">
    //             <Row>
    //                 <Col lg="6" className="contentjumb">
    //                     <h1 className="contenttext">
    //                     Stress Free<br />Subscription<br />Manager.</h1>
    //                     <Button className="button1">JOIN NOW</Button>
    //                 </Col>
    //                 <Col lg="6">
    //                     <img src={Logo1} alt="Logo" className="mb-0 pt-0 mt-0" />
    //                 </Col>
    //             </Row>
    //             </Container>
    //         </Jumbotron>
    //     </>
    // )
}


export default TopContent;
