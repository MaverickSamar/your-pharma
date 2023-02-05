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
import { Col, Row } from "react-bootstrap";
import './Footer.css';

const Footer = () => {
  return (
    <MDBFooter className="text-center" color="white" bgColor="dark">
      <MDBContainer className="p-4">
      <section className='mb-4'>
          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#3b5998' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#55acee' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='twitter' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#dd4b39' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='google' />
          </MDBBtn>
          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#ac2bac' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#0082ca' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#333333' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='github' />
          </MDBBtn>
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                perferendis sapiente quibusdam voluptatum maiores, tenetur quo
                perspiciatis incidunt ea ratione, esse reprehenderit?
                Laboriosam, alias necessitatibus harum deleniti delectus atque
                commodi ea qui quaerat corrupti molestiae culpa. Minima
                voluptatum placeat tempore.
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
