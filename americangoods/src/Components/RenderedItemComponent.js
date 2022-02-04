import React, { Component } from "react";
import { Container, Card, CardImg, CardTitle, CardBody, CardText } from "reactstrap";
import { Link } from "react-router-dom";
import { HUNTERSEGRAVES00ITEMS } from '../Users/HunterSegraves/UserItems/HunterSegraves00';

function RenderItem({item}) {
    return (
        <Card className="col col-md-3 m-2 p-3">

            <CardImg className='p-2' src={item.image} alt={item.name} />
            <Link to={`/${item.itemId}`}>
            <CardBody className="p-0">
                <CardTitle className="text-center">{item.name}</CardTitle>
                <CardText className="text-center">
                    {item.price}<br />
                    {item.shipping}
                </CardText>
            </CardBody>
            </Link>
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
                <RenderItem key={item.id} item={item} />
            );
        });

        return(
            <Container id="home-page" fluid>
                {item}
            </Container>
        );
    }
}

export default RenderedItem;