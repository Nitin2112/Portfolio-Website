import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
// import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.gif";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.png";
import navIcon3 from "../assets/img/nav-icon3.svg";

export default function Footer() {
  return (
    <footer className="footer">
    <Container>
      <Row className="align-items-center">
        <Col size={12} sm={6}>
          <img src={logo} alt="Logo" />
        </Col>
        <Col size={12} sm={6} className="text-center text-sm-end">
          <div className="social-icon">
            <a href="https://www.linkedin.com/in/nitin-patel-103779239"><img src={navIcon1} alt="Icon" /></a>
            <a href="https://github.com/Nitin2112"><img src={navIcon2} alt="Icon" /></a>
            <a href="https://instagram.com/patel__nitin21?igshid=YmMyMTA2M2Y="><img src={navIcon3} alt="Icon" /></a>
          </div>
          <p>Copyright 2022 &#169; All Rights Reserved</p>
        </Col>
      </Row>
    </Container>
  </footer>
  )
}
