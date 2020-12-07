import React from "react";
import { Card, Row, Col } from "reactstrap";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import Footer from "./Footer";

const Date = () => {
  return (
    <>
      <Row>
        <Col>
          <Card className="kartu4 card">
            <FullCalendar
              plugins={[dayGridPlugin]}
              initialView="dayGridMonth"
              height="100%"
              events={[
                { title: "event 1", date: "2020-12-07" },
                { title: "event 2", date: "2019-04-02" },
              ]}
            />
          </Card>
          <Footer />
        </Col>
      </Row>
    </>
  );
};

export default Date;
