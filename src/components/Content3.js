import React, { useState } from 'react';
import { Jumbotron, Button, Row, Col } from 'reactstrap';
import './Contents.css';
import Dots2 from '../images/BottomContent.png';
import Logo2 from '../images/Logo2.png';
import { Modal } from "./Modal";
import { ModalLog } from "./ModalLog";


const BottomContent = (props) => {

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
        <div>
            <Jumbotron fluid className="rectangle pt-0 pb-0 pb-0 mb-0">
                <Row>
                    <Col lg="7" className="land-left">
                        <h2 className="contenttext3">
                            So what are you waiting for?
                        </h2>
                        <Button 
                            className="button3 button"
                            onClick={openModal}>
                            JOIN NOW
                        </Button>
                        <img 
                            src={Dots2} 
                            alt="Dots"
                            className="transbox"
                        />
                    </Col>
                    <Col lg="5" className="land-right">
                        <img 
                            src={Logo2} 
                            alt="Logo" 
                            className="mt-auto" 
                        />
                    </Col>
                </Row>
            </Jumbotron>
        </div>
        </>
    )
}


export default BottomContent;