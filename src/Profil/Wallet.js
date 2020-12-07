import React, {  useEffect, useState } from "react";
import { InputGroup, InputGroupAddon, InputGroupText, Input, Card, Col, Row, Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import axios from "axios";
import Footer from "./Footer";
import icon from "../images/ewallet.svg";

function Wallet(props) {

  const { className } = props;
  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);
  const toggle = () => setModal(!modal);
  const toggle2 = () => setModal2(!modal2);

  const [budget, setBudget] = useState(0);
  const [budgetData, setBudgetData] = useState("");

  const getData = () => {
    // axios
    //   .get("http://13.238.142.2/budgets")
    //   .then((res) => {
    //     console.log(res.data);
    //     setBudgetData(res.data);
    //   });

      axios("http://13.238.142.2/budgets", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${sessionStorage.getItem('token')}`
            }, })
            .then((res) => {
                  console.log(res.data);
                  sessionStorage.setItem('budget.id', res.data.id)
                  setBudgetData(res.data);
                });
  };

  useEffect(()=> {
    getData();
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      amount: Number(budget),
      id: sessionStorage.getItem('budget.id'),
    };
    console.log(data)
    // axios
    //   .post("http://13.238.142.2/budgets", data)
    //   .then((res) => {
    //     console.log(res);
    //     getData();
    //   })
    //   .catch((err) => console.log(err));

      fetch("http://13.238.142.2/budgets", {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${sessionStorage.getItem('token')}`
        }, body: JSON.stringify(data)
    })
        .then(()=>getData())
        .then(() => toggle2())

  };

  return (
    <div>

      <Row>

        <Col>
          <Card className="kartu3">
              <h2>E-Wallet</h2>
              <Card className="kardwallet">
                <Row>
                <Col>
                  <h4>Saldo</h4>
                  <h5>Rp.</h5>
                </Col>
                <Col>
                  
                    <div key={budgetData.userId}>
                      <h4>Budget Limit</h4>
                      <h5>Rp.{budgetData.amount}</h5>
                    </div>

                </Col>
                </Row>
              </Card>

              <Card className="kardtopup">
                <Row>
                  <Col className="kolom" onClick={toggle}>
                    <img src={icon} className="wallet" alt="pict" />
                    <h6>Top-up</h6>
                  </Col>
                  <Col className="kolom1" onClick={toggle2}>
                    <img src={icon} className="wallet1" alt="pict" />
                    <h6>Set Budget</h6>
                  </Col>
                </Row>
              </Card>
          </Card>

          <Footer />
        </Col>

      </Row>

      <Modal isOpen={modal} fade={false} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Top-Up</ModalHeader>

        <ModalBody>
          <h6>Amount</h6>

          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Rp.</InputGroupText>
            </InputGroupAddon>
              <Input type="number" placeholder="100000"/>
          </InputGroup>

        </ModalBody>

        <ModalFooter>
          <Button type="submit" color="success" onClick={toggle}>Top-Up</Button>{' '}
          
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>


      <Modal isOpen={modal2} fade={false} toggle={toggle2} className={className}>
        <ModalHeader toggle={toggle2}>Set Budget Limit</ModalHeader>
        
        <ModalBody>
          <h6>Amount</h6>

          <InputGroup onSubmit={handleSubmit}>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Rp.</InputGroupText>
            </InputGroupAddon>
              <Input onChange={(e) => setBudget(e.target.value)} type="number" placeholder="100000" />
          </InputGroup>

        </ModalBody>

        <ModalFooter>
          <Button type="submit" color="success" onClick={handleSubmit}>Set Budget</Button>{' '}

          <Button color="secondary" onClick={toggle2}>Cancel</Button>
        </ModalFooter>
      </Modal>

    </div>
  );
}

export default Wallet;