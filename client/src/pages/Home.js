import React from 'react';
import HeroCarousel from '../componenets/HeroCarousel';
import { Col, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import categories from "../categories";
import Footer from '../componenets/Footer'
import "./Home.css";
import About from './About';
import Contact from './Contact';
const Home = () => {
  return (
    <div>
        <HeroCarousel/>
        
        {/* sale banner */}
        <div className="sale-banner-container mt-4">
            <img src="" alt="" />
        </div>
        <div className="recent-products-container container mt-4">
            <h2>Products</h2>
            <Row>
                    {categories.map((category) => (
                        <LinkContainer to={`/category/${category.name.toLocaleLowerCase()}`}>
                            <Col md={4}>
                                <div style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${category.img})`, gap: "10px" }} className="category-tile">
                                    {category.name}
                                </div>
                            </Col>
                        </LinkContainer>
                    ))}
            </Row>

            <div>
                <Link to='/products' style={{textAlign: "right", display:"block", textDecoration:"none"}}>
                    See more {">>"}
                </Link>
            </div>
        </div>
        <About/>
        <Contact/>



    </div>
  )
}

export default Home