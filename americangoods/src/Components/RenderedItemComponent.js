import React, { Component } from "react";
import { Col, Container, Row, Card, CardImg, CardTitle, CardBody, CardText } from "reactstrap";
import { HUNTERSEGRAVES00ITEMS } from '../Users/HunterSegraves/UserItems/HunterSegraves00';

function RenderItem({item}) {
    return (
        <Card fluid className="col-4">
            <CardImg src={item.image} alt={item.name} />
            <CardBody>
                <CardTitle>{item.name}</CardTitle>
                <CardText>
                    {item.price}<br />
                    {item.shipping}<br />
                </CardText>
            </CardBody>
        </Card>
    );
}




class RenderedItem extends Component {

    constructor(props) {
            super(props);

            this.state = {
                items: HUNTERSEGRAVES00ITEMS
            };
        }

    render() {

        const item = this.state.items.map(item => {
            return (
                <div key={item.id}>
                    <RenderItem item={item} />
                </div>
            );
        });

        return(
            <Container fluid>
                {item}
            </Container>
        );
    }
}

export default RenderedItem;