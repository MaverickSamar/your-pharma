import React from "react";
import { Container, Row, Col, Card, Carousel } from "react-bootstrap";
import "./About.css";

const About = () => {
  return (
    <>
        <div className="img-col">
                <img src="/yourpharma.png" alt="banner" />
        </div>
      <Container>
        <Row>
          <Col md={6} className="about-container">
            <div className="img-col">
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://static.javatpoint.com/tutorial/quality-assurance/images/quality-assurance1.jpg"
                />
              </Card>
            </div>
          </Col>
          <Col md={6}>
            <h2 className="para-div">Exceptional Quality</h2>
            <div className="para-div">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Ratione consectetur quaerat ab numquam reiciendis inventore
                voluptates adipisci quos enim quo voluptatum earum provident
                accusantium illo, ex voluptas voluptate neque doloribus iure
                ipsam omnis quisquam quam. Atque voluptas consequuntur magnam
                nihil.
              </p>
            </div>
          </Col>
        </Row>
        <br />
        <br />
        <Row>
          <Col md={6}>
            <h2 className="para-div">Better Price</h2>
            <div className="para-div">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Ratione consectetur quaerat ab numquam reiciendis inventore
                voluptates adipisci quos enim quo voluptatum earum provident
                accusantium illo, ex voluptas voluptate neque doloribus iure
                ipsam omnis quisquam quam. Atque voluptas consequuntur magnam
                nihil.
              </p>
            </div>
          </Col>
          <Col md={6}>
            <div className="img-col">
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://www.imsresultscount.com/.a/6a00e54f98549c88340191046701ca970c-pi"
                />
              </Card>
            </div>
          </Col>
        </Row>

        <br />
        <br />
        <Row>
          <Col md={6} className="about-container">
            <div className="img-col">
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://img.freepik.com/free-vector/top-service-badge_1284-5019.jpg?w=740&t=st=1675619532~exp=1675620132~hmac=f68852f8fa9330bb1a6c85a3840c2c7f5bc5482f14e2949bcb7e091349469cab"
                />
              </Card>
            </div>
          </Col>
          <Col md={6}>
            <h2 className="para-div">Top Service</h2>
            <div className="para-div">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Ratione consectetur quaerat ab numquam reiciendis inventore
                voluptates adipisci quos enim quo voluptatum earum provident
                accusantium illo, ex voluptas voluptate neque doloribus iure
                ipsam omnis quisquam quam. Atque voluptas consequuntur magnam
                nihil.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
