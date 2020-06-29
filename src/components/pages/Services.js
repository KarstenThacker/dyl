import React, { Component } from "react";
import { Container, Col, Row } from "react-bootstrap";

import img23 from "../assets/img23.jpg";
import img24 from "../assets/img24.jpg";
import img25 from "../assets/img25.jpg";
import Jumbotron from "../../components/layouts/Jumbotron.js";

class Services extends Component {
  render() {
    return (
      <div>
        <Jumbotron />
        <Container fluid className="about">
          <h2 fluid className="h2">
            Services
          </h2>

          <Row>
            <Col>
              <p>
                Social reintegration is often understood as the support given to
                offenders during their reentry into society following
                imprisonment. A broader definition, however, encompasses a
                number of interventions undertaken following an arrest to divert
                offenders away from the criminal justice system to an
                alternative measure, including a restorative justice process or
                suitable treatment.
              </p>
              <p>
                In recent years, more emphasis has been placed on designing
                comprehensive interventions, based on a continuity of care, to
                provide consistent assistance to offenders within and beyond
                prison. There is a recognition that preparation for
                reintegration should commence before the offenders' release.
                After their release, interventions should support their
                immediate transition from the prison to the community and
                reinforce the gains achieved through in prison treatment and
                continue until a successful reintegration is completed (Fox,
                2002).
              </p>
            </Col>
          </Row>
          <br />
          <br />

          <Row>
            <Col>
              <h2>What we do?</h2>
              <p>
                Direct Your Life is the only support group for offenders in the
                Greater Toronto Area. We provide a support system to help
                at-risk youth or recently released offenders find housing,
                employment and/or schooling support through a variety of
                coaching programs.
              </p>
            </Col>

            <Col>
              <img
                src={img23}
                alt="../assets/img23.jpg"
                style={{ width: "400px" }}
              />
            </Col>
          </Row>
          <br />
          <br />

          <Row>
            <Col>
              <h2>Who we are?</h2>
              <p>
                We are a non-profit organization in the Greater Toronto Area run
                by Community Advisors with lived experience navigating the
                criminal justice system in Canada. All members of our team
                aspire to empower our participants by providing the tools and
                mentorship for success.
              </p>
            </Col>

            <Col>
              <img
                src={img24}
                alt="../assets/img24.jpg"
                style={{ width: "400px" }}
              />
            </Col>
          </Row>
          <br />
          <br />

          <Row>
            <Col>
              <h2>Why we serve?</h2>
              <p>
                Our objective is to prevent incarceration and recidivism among
                at-risk youth and recently released offenders. Our mentorship
                programs aims to help our participants establish strong
                leadership skills, meaningful connections as well as help guide
                them to a healthy and successful integration back to society.
              </p>
            </Col>

            <Col>
              <img
                src={img25}
                alt="../assets/img25.jpg"
                style={{ width: "400px" }}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Services;
