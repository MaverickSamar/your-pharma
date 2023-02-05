import React from 'react';
import { Container, Row, Col, Card} from 'react-bootstrap';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import Home from '@mui/icons-material/Home';
import './Contact.css';
const Contact = () => {
  return (
    <>
    <div className="img-col">
                <img src="/yourpharma.png" alt="banner" />
        </div>
    
        <Container>
            <Row>
                <Col className='col-info'>
                    <div className='div-line'>
                    <CallIcon fontSize='large'/>
                    <h3>Call Us</h3>
                    </div>
                    <h4><strong>+91 7078241377</strong></h4>
                </Col>
                <Col className='col-info'>
                    <EmailIcon fontSize='large'/>
                    <h3>Email Us</h3>
                    <h4><strong>info@yourpharmahealthcare.com</strong></h4>
                </Col>
                <Col className='col-info'>
                    <Home fontSize='large'/>
                    <h3>Visit Us</h3>
                    <h4><strong>123, Lajpat Nagar, New Delhi</strong></h4>
                </Col>
            </Row>
            <br />
        </Container>
        </>
  )
}

export default Contact