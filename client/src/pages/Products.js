import React from "react";
import { Card, Button, Col, Row, Dropdown } from "react-bootstrap";
import { MDBInput, MDBIcon, MDBBtn } from "mdb-react-ui-kit";
import SearchIcon from '@mui/icons-material/Search';
import {Link} from 'react-router-dom';
import "./Products.css";
const Products = () => {
  return (
    <div>
      <div>
        <Row>
          <Col>
            <SearchIcon fontSize="large"/>
            <input type="text" placeholder="search"/>

          </Col>
          <Col>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Filters
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Price : Low to High</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Price : High to Low</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Popularity</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
      </div>
        <br />
      <div className="cards">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="https://newassets.apollo247.com/pub/media/catalog/product/t/h/thy0019.jpg" />
          <Card.Body>
            <Card.Title>Thyronorm</Card.Title>
            <Card.Text>
              Description of medicine Lorem ipsum dolor sit amet consectetur..
            </Card.Text>
            <Link to='/productprev' style={{textAlign: "right", display:"block", textDecoration:"none"}}>
            <Button variant="primary">Add to cart</Button>
                </Link>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="https://newassets.apollo247.com/pub/media/catalog/product/t/h/thy0019.jpg" />
          <Card.Body>
            <Card.Title>Thyronorm</Card.Title>
            <Card.Text>
              Description of medicine Lorem ipsum dolor sit amet consectetur..
            </Card.Text>
            <Link to='/productprev' style={{textAlign: "right", display:"block", textDecoration:"none"}}>
            <Button variant="primary">Add to cart</Button>
                </Link>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="https://newassets.apollo247.com/pub/media/catalog/product/t/h/thy0019.jpg" />
          <Card.Body>
            <Card.Title>Thyronorm</Card.Title>
            <Card.Text>
              Description of medicine Lorem ipsum dolor sit amet consectetur..
            </Card.Text>
            <Link to='/productprev' style={{textAlign: "right", display:"block", textDecoration:"none"}}>
            <Button variant="primary">Add to cart</Button>
                </Link>
          </Card.Body>
        </Card>
      </div>
      <div className="cards">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="https://newassets.apollo247.com/pub/media/catalog/product/t/h/thy0019.jpg" />
          <Card.Body>
            <Card.Title>Thyronorm</Card.Title>
            <Card.Text>
              Description of medicine Lorem ipsum dolor sit amet consectetur..
            </Card.Text>
            <Link to='/productprev' style={{textAlign: "right", display:"block", textDecoration:"none"}}>
            <Button variant="primary">Add to cart</Button>
                </Link>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="https://newassets.apollo247.com/pub/media/catalog/product/t/h/thy0019.jpg" />
          <Card.Body>
            <Card.Title>Thyronorm</Card.Title>
            <Card.Text>
              Description of medicine Lorem ipsum dolor sit amet consectetur..
            </Card.Text>
            <Link to='/productprev' style={{textAlign: "right", display:"block", textDecoration:"none"}}>
            <Button variant="primary">Add to cart</Button>
                </Link>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="https://newassets.apollo247.com/pub/media/catalog/product/t/h/thy0019.jpg" />
          <Card.Body>
            <Card.Title>Thyronorm</Card.Title>
            <Card.Text>
              Description of medicine Lorem ipsum dolor sit amet consectetur..
            </Card.Text>
            <Link to='/productprev' style={{textAlign: "right", display:"block", textDecoration:"none"}}>
            <Button variant="primary">Add to cart</Button>
                </Link>
          </Card.Body>
        </Card>
      </div>
      <div className="cards">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="https://newassets.apollo247.com/pub/media/catalog/product/t/h/thy0019.jpg" />
          <Card.Body>
            <Card.Title>Thyronorm</Card.Title>
            <Card.Text>
              Description of medicine Lorem ipsum dolor sit amet consectetur..
            </Card.Text>
            <Link to='/productprev' style={{textAlign: "right", display:"block", textDecoration:"none"}}>
            <Button variant="primary">Add to cart</Button>
                </Link>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="https://newassets.apollo247.com/pub/media/catalog/product/t/h/thy0019.jpg" />
          <Card.Body>
            <Card.Title>Thyronorm</Card.Title>
            <Card.Text>
              Description of medicine Lorem ipsum dolor sit amet consectetur..
            </Card.Text>
            <Link to='/productprev' style={{textAlign: "right", display:"block", textDecoration:"none"}}>
            <Button variant="primary">Add to cart</Button>
                </Link>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="https://newassets.apollo247.com/pub/media/catalog/product/t/h/thy0019.jpg" />
          <Card.Body>
            <Card.Title>Thyronorm</Card.Title>
            <Card.Text>
              Description of medicine Lorem ipsum dolor sit amet consectetur..
            </Card.Text>
            <Link to='/productprev' style={{textAlign: "right", display:"block", textDecoration:"none"}}>
            <Button variant="primary">Add to cart</Button>
                </Link>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Products;
