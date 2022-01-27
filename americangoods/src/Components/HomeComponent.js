import React from "react";
import { Container, Row, Col } from "reactstrap";
import kitchenTable from '../Assets/Images/kitchen-table.jpg';
import plantStand from '../Assets/Images/plant-stand-side-view.jpg'

function Home(props) {
    return(
        <React.Fragment>
            <Container>
                <Row className="m-1 p-1">
                    <Col className="p-1 col-card-text my-auto text-center">
                        <p>Items from your favorite Creators</p>
                    </Col>
                </Row>
                <Row className="text-center mx-auto">
                    <Col className="card col-sm-5 col-md-4 mx-1 p-1 mx-auto">
                        <img src={kitchenTable} className="card-img-top img-fluid" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title"><br />Black Limba & Cedar Table</h5>
                            <p className="card-text"> <br /><br /> $1200 <br /><br /> Local Shipping Only   <br /><br /> Contact Seller for more Information</p>
                            <a href="product/black-limba-&-cedar-table.html" className="stretched-link"></a>
                        </div>
                    </Col>
                    <Col className="card col-sm-5 col-md-4 mx-1 p-1 mx-auto">
                        <img src={plantStand} className="card-img-top img-fluid" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title"><br/>Plant Stand</h5>
                            <p className="card-text"> <br/><br/> $20 <br/><br/> Est Shipping Time <br/><br/> 3-5 Days</p>
                            <a href="#" className="stretched-link"></a>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Container fluid className="p-2">
                <Row >
                    <Col className="col p-5 my-auto">
                        <a href="#"><img className="img-fluid" src="./Assets/Images/gifts for him.jpg" alt="" /></a>
                    </Col>
                    <Col className="col">
                        <a href="#"><img className="img-fluid" src="./Assets/Images/gifts for her.jpg" alt=""/></a>
                    </Col>
                </Row>
            </Container>

            <Container fluid>
                <Row className="row">
                    <Col className="col p-5">
                        <a href="#"><img className="img-fluid" src="./Assets/Images/gifts for kids.jpg" alt="" /></a>
                    </Col>
                    <Col className="col my-auto">
                        <a href="#"><img className="img-fluid" src="./Assets/Images/gifts for furry friends.jpg" alt="" /></a>
                    </Col>
                </Row>
            </Container>
    </React.Fragment>
    );
}

export default Home;