import React from "react";
import { Form, Input, Container, Row, Col, List } from 'reactstrap'

function Footer(props) {
    return(
        <footer>
            <Container className="border-top">
                <Row className="p-3 m-2 mx-auto">
                    <Col sm='2'>
                        <i className="fa fa-question-circle"></i>
                        Help Center
                    </Col>
                    <Col sm='2'>
                        <i className="fa fa-envelope"></i> Contact Us
                    </Col>
                    <Col>
                        <span>Sign Up For Our Email Specials!</span>
                        <Form className="d-flex">
                        <Input className="form-control me-2" type="email" placeholder="Email Address Here" aria-label="Go" />
                        <button className="btn btn-outline-dark" type="submit">Go</button>
                        </Form>
                    </Col>
                </Row>

                <Row className="border-top p-1">
                    <Col className="m-1">
                        <h5>SUPPORT</h5>
                        <List>
                            <li>TRACK & MANAGE ORDERS</li>
                            <li>Shipping & Returns</li>
                            <li>Unsubscribe From Email List</li>
                            <li>Submit Feedback</li>
                        </List>
                    </Col>
                    <Col className="m-1">
                        <h5>Creators & Artisans</h5>
                        <List>
                            <li>Request To Join Our Community</li>
                            <li>Submit Your Products</li>
                            <li>Creator Feedback</li>
                        </List>
                    </Col>
                    <Col className="m-1">
                        <h5>Follow Us On Social Media</h5>
                        <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-instagram"></i></a>
                        <a className="btn btn-social-icon btn-facebook" href="http://facebook.com/"><i className="fa fa-facebook"></i></a>
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
                        <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube"></i></a>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;