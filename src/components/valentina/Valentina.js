import React from "react";
import "./Valentina.css";
import '../../App.css'
import { Container, Row, Col } from "react-bootstrap";
import ciao from "../../logo.svg";

const Valentina = () => {
  return (
    <>
      <Container>
        <Row>
          <Col className="uno" xs={12} md={8}>
            <div className="valentina font-face-gm" >
                <h1>VALENTINA MARAIO</h1>
                <h2>Web developer</h2>
                <p>qualcosa che ancora non so anche se ciao ho freddo</p>
                <p>ciao come va? ho fame! forse devo bere un po di acqua</p>
                <p>oggi mangio curry con tofuuuuu. Gracias señora!</p>
            </div>
          </Col>
          <Col className="due" xs={6} md={4}>
            <div class="valentina_illustration">
              <img className="valentina_logo" src={ciao} alt="logo" />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Valentina;
