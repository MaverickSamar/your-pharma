import axios from "../axios";
import React, { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Container, Row, Col, Badge, ButtonGroup, Form, Button, Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Loading from "../componenets/Loading";
import SimilarProduct from "../componenets/SimilarProduct";
import "./ProductPage.css";
import { LinkContainer } from "react-router-bootstrap";
import { useAddToCartMutation } from "../services/appApi";
import ToastMessage from "../componenets/ToastMessage";

const ProductPage = () => {
    const { id } = useParams();
    const user = useSelector((state) => state.user);
    const [product, setProduct] = useState(null);
    const [similar, setSimilar] = useState(null);
    const [addToCart, { isSuccess }] = useAddToCartMutation();

    // const handleDragStart = (e) => e.preventDefault();
    // useEffect(() => {
    //     axios.get(`/products/${id}`).then(({ data }) => {
    //         setProduct(data[0]);
    //         setSimilar(data.similar);
    //     });
    // }, [id]);

    // if (!product) {
    //     return <Loading />;
    // }
    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 3 },
    };

    // const images = product.banner.map((picture) => 
    // <img className="product__carousel--image" src={picture.url} onDragStart={handleDragStart} alt="product"/>);

    // let similarProducts = [];
    // if (similar) {
    //     similarProducts = similar.map((product, idx) => (
    //         <div className="item" data-value={idx}>
    //             <SimilarProduct {...product} />
    //         </div>
    //     ));
    // }

    return (
        <Container className="pt-4" style={{ position: "relative" }}>
            <Row>
                <Col lg={6}>
                    {/* <AliceCarousel mouseTracking controlsStrategy="alternate" /> */}
                    <Card>
                    <Card.Img variant="top" src="https://newassets.apollo247.com/pub/media/catalog/product/t/h/thy0019.jpg" />
                    </Card>
                </Col>
                <Col lg={6} className="pt-4">
                    <h1>Thyronorm</h1>
                    <p>
                        <Badge bg="primary">Pills</Badge>
                    </p>
                    <p className="product__price">₹500</p>
                    <p style={{ textAlign: "justify" }} className="py-3">
                        <strong>Description :</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, ipsam?
                    </p>
                    {/* {user && !user.isAdmin && ( */}
                        <ButtonGroup style={{ width: "90%" }}>
                            <Form.Select size="lg" style={{ width: "40%", borderRadius: "0" }}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </Form.Select>
                            <Button size="lg" >
                            {/* onClick={() => addToCart({ userId: user._id, productId: id, price: product.price, image: product.pictures[0].url })} */}
                                Add to cart
                            </Button>
                        </ButtonGroup>
                    {/*close brace*/}
                    {user && user.isAdmin && (
                        <LinkContainer to={`/product/${product._id}/edit`}>
                            <Button size="lg">Edit Product</Button>
                        </LinkContainer>
                    )}
                    <ToastMessage bg="info" title="Added to cart" body={`Thyronorm is in your cart`} />
                </Col>
            </Row>
            <div className="my-4">
                <h2>Similar Products</h2>
                <div className="d-flex justify-content-center align-items-center flex-wrap">
                    <AliceCarousel mouseTracking responsive={responsive} controlsStrategy="alternate" />
                </div>
            </div>
        </Container>
    );
}

export default ProductPage;