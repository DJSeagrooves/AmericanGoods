import React from "react";
import { Col, Container, Row } from "reactstrap";

function ItemRender({item}) {
    return(
        <Container>
            <Row>
                <Col className="col-md-8">
                    <img src={item.image} alt={item.name} />
                </Col>
                <Col>
                    <p>
                        {item.name}<br />
                        {item.creator}<br />
                        {item.price}<br />
                        {item.shipping}
                    </p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>
                        {item.description}<br />
                        {item.dimensions}<br />
                        {item.weight}
                    </p>
                </Col>
            </Row>
        </Container>
    );
}

export default ItemRender;