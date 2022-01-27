import React, { Component } from "react";
import { Nav, Navbar, NavbarToggler, Collapse, NavItem, Button, Form, Input, NavLink, Container, Row, Col, NavbarBrand, DropdownItem, DropdownMenu, DropdownToggle, Dropdown } from 'reactstrap'

class Header extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false,
            isDropdownOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleDropdown = this.toggleDropdown.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleDropdown() {
        this.setState({
            isDropdownOpen: !this.state.isDropdownOpen
        });
    }
    
    render() {
        return(
            <React.Fragment>
                    <Container fluid className="jumbotron mt-3 p-5 bg-primary text-white rounded">
                        <Row>
                            <Col>
                                <h1>American Goods</h1>
                                <h3>Goods Made By Americans For Americans</h3>
                            </Col>
                        </Row>
                    </Container>
                        
                    <Navbar light sticky="top" expand='md' >
                        <Container >
                            <Row className="p-2">
                                <Col xs='2' sm='1' className="p-2">
                                    <NavbarBrand href="/" ><i className="fa fa-flag-usa fa-2x float-end"  /></NavbarBrand>
                                </Col>
                                <Col xs='9'  className="mx-auto my-auto">
                                    <Form className="d-flex">
                                        <Input className="form-control me-2" type="search" placeholder="Search Anything Here" aria-label="Search" />
                                        <Button className="btn btn-outline-dark" type="submit">Search</Button>
                                    </Form>
                                </Col>
                            </Row>
                            <NavbarToggler onClick={this.toggleNav} className="position-relative start-50" />
                            <Collapse isOpen={this.state.isNavOpen} navbar>
                                <Nav navbar className="mx-auto p-1">
                                    <NavItem>
                                        <NavLink active href='/'>Home</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href='/hotItems'>Hot Items</NavLink>
                                    </NavItem>
                                    <Dropdown isOpen={this.state.isDropdownOpen} toggle={this.toggleDropdown}>
                                        <DropdownToggle className="btn btn-dark">
                                        Gifts
                                        </DropdownToggle>
                                        <DropdownMenu>
                                            <DropdownItem text>
                                                Gifts for Men
                                            </DropdownItem>
                                            <DropdownItem text>
                                                Gifts for Women
                                            </DropdownItem>
                                            <DropdownItem text>
                                                Gifts for Children
                                            </DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                </Nav>
                            </Collapse>
                        </Container>
                    </Navbar>
            </React.Fragment>
        );
    }
}

export default Header;