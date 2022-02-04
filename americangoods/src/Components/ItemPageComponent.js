import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { HUNTERSEGRAVES00ITEMS } from '../Users/HunterSegraves/UserItems/HunterSegraves00';

function RenderPage({item}) {
    <Container>
        <Row>
            <Col className="col col-md-4">
                {item.image}
            </Col>
            <Col className="col col-md-6">
                {item.name}<br />
                {item.creator}<br />
                {item.price}<br />
                {item.shipping}<br />
                {item.dimensions}<br />
                {item.weight}<br />
                {item.description}
            </Col>
        </Row>
    </Container>
}

class ItemPage extends Component {
    
    constructor(props) {
            super(props);

            this.state = {
                items: HUNTERSEGRAVES00ITEMS
            };
        }
    
    render() {

        const item = this.state.items.map(item => {
            return (
                <RenderPage item={item} />
            );
        });

        return (
            {item}
        );
    }
}

export default ItemPage;