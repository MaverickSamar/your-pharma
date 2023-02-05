import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn,
} from "mdb-react-ui-kit";
import {Button} from 'react-bootstrap';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Col, Row } from "react-bootstrap";
import './Footer.css';
import LinkedIn from "@mui/icons-material/LinkedIn";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <MDBFooter className="text-center" color="white" bgColor="dark">
      <MDBContainer className="p-4">
      <section className='mb-4 icon-section'>
          <Button className="button">
            <FacebookIcon/>
          </Button>
          <Button className="button">
            <TwitterIcon/>
          </Button>
          <Button className="button">
            <GoogleIcon/>
          </Button>
          <Button className="button">
            <InstagramIcon/>
          </Button>
          <Button className="button">
            <LinkedIn/>
          </Button>
          <a href="https://github.com/MaverickSamar/your-pharma">
          <Button className="button">
            <GitHubIcon/>
          </Button> 
          </a>
        </section>
        <section className="">
          <form action="">
            <MDBRow className="d-flex justify-content-center">
              <MDBCol size="auto">
                <p className="pt-2">
                  <strong>Sign up for our newsletter</strong>
                </p>
              </MDBCol>

              <MDBCol md="5" start>
                <MDBInput
                  contrast
                  type="email"
                  placeholder="Enter your email"
                  className="mb-4"
                />
              </MDBCol>

              <MDBCol size="auto">
                <MDBBtn outline color="light" type="submit" className="mb-4">
                  Subscribe
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </form>
        </section>

        <section className="mb-4">
          <Row>
            <Col>
              <p>
              Your Pharma Healthcare is a privately held India based company with a focus on the development, manufacturing and sale of high quality and affordable generic pharmaceutical products worldwide.
              <br/>
              Our vision is to provide the best services and quality products around the world.
              </p>
            </Col>
            <Col>
              <h5 className="text-uppercase">Links</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="/home" className="text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/about" className="text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="/products" className="text-white">
                    Products
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </section>
      </MDBContainer>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2023 Copyright : 
        <a className="text-white" href="https://yourpharmahealthcare.com/">
          {' '}YOUR PHARMA
        </a>
      </div>
    </MDBFooter>
  );
};

export default Footer;
