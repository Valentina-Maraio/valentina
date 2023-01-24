import React from "react";
import './Work.css'
import { Container, Row, Col } from "react-bootstrap";

const Work = () => {
  return (
    <>
      <Container>
        <h1>WORK</h1>
        <Row>
          <Col className="due" xs={6} md={4}>
            <div class="valentina_illustration">illustration</div>
          </Col>
          <Col className="illustration" xs={12} md={8}>
            illustration book
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Work;
