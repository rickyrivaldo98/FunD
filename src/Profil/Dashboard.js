import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Card, Col, Row } from "reactstrap";
import { Line } from '@reactchartjs/react-chart.js';
import Footer from "./Footer";

function Dashboard(props) {

  const { className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const data = {
    labels: ['1', '2', '3', '4', '5', '6'],
    datasets: [
      {
        label: 'data',
        data: [0, 2, 3.5, 4, 5, 6],
        fill: true,
        //backgroundImage: 'linear-gradient(180deg, rgba(121, 113, 234, 0.8) 59.26%, rgba(255, 255, 255, 0.536) 100%)',
        backgroundColor: 'rgba(121, 113, 234, 0.4)',
        borderColor: '#7971EA',
      },
    ],
  }

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  }

  return (
    <div>

      <Row>

        <Col>
          <Card className="kartu1">
            <div>
              <h2>Last month spending</h2>
                
                <Line className="grafik" data={data} options={options} />
              
            </div>
          </Card>

          <Card className="kartu2" onClick={toggle}>
            <h2>Transaction</h2>
            <Card className="kardetail">
              detail transaction
            </Card>
            <Card className="kardetail" onClick={toggle}>
              detail transaction
            </Card>
          </Card>

          <Footer />
        </Col>

      </Row>

      <Modal isOpen={modal} fade={false} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Detail Transaction</ModalHeader>
        <ModalBody>
          Lorem ipsum.
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>Close</Button>
        </ModalFooter>
      </Modal>

    </div>
  );
}

export default Dashboard;