import React from "react";
import './Menu.css';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

const Menu = () => {
    return (
        <div>
            <Navbar expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="justify-content-center vk-navbar" defaultActiveKey="/home">
                        <Nav.Item>
                            <Nav.Link href="/home">Home</Nav.Link>
                        </Nav.Item>
                        <NavDropdown title="Works" id="basic-nav-dropdown">
                            <NavDropdown.Item href="videos">Videos</NavDropdown.Item>
                            {/* <NavDropdown.Divider /> */}
                            <NavDropdown.Item href="photos">Photos</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Item>
                            <Nav.Link href="service">Service</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="contacts">Contact</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Menu;