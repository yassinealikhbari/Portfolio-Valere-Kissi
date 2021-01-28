import React, { useState } from 'react';
import './Menu.css';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Menu = () => {
    const [activeKey, setActiveKey] = useState("home");

    const handleClick = (selected) => {
        setActiveKey(selected);
    }

    return (
        <div>
            <Navbar expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav activeKey={activeKey} className="justify-content-center vk-navbar">
                        <Nav.Item className={(activeKey === "home") ? "active" : ""} >
                            <Nav.Link as={Link} onClick={() => handleClick("home")} to="home">Home</Nav.Link>
                        </Nav.Item>
                        <NavDropdown className={(activeKey === "photos" || activeKey === "videos") ? "active" : ""} title="Works" id="basic-nav-dropdown">
                            <NavDropdown.Item className={(activeKey === "videos") ? "active" : ""} as={Link} onClick={() => handleClick("videos")} to="videos">Videos</NavDropdown.Item>
                            {/* <NavDropdown.Divider /> */}
                            <NavDropdown.Item className={(activeKey === "photos") ? "active" : ""} as={Link} onClick={() => handleClick("photos")} to="photos">Photos</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Item>
                            <Nav.Link className={(activeKey === "service") ? "active" : ""} onClick={() => handleClick("service")} as={Link} to="service">Service</Nav.Link>
                        </Nav.Item>
                        <Nav.Item >
                            <Nav.Link className={(activeKey === "contact") ? "active" : ""} onClick={() => handleClick("contact")} as={Link} to="contact">Contact</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Menu;