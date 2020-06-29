import React from "react";
import { Jumbotron as Jumbo, Container } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
  font-size: 1.5cm;
  text-align: center;
  color: white;
`;

const Jumbotron = () => (
  <Styles>
    <Jumbo fluid className="Jumbo" style={{ backgroundColor: "#408DBF" }}>
      <Container>
        <h1>
          Welcome to the Direct Your Life <br /> (DYL) Website
        </h1>
      </Container>
    </Jumbo>
  </Styles>
);

export default Jumbotron;
