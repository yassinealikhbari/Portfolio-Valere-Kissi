import React from 'react';
import './Menu.css';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export interface IMenuProps {
}

export interface IMenuState {
    activeKey: string;
}

export class Menu extends React.Component<IMenuProps, IMenuState> {
    constructor(props: IMenuProps) {
        super(props);
        this.state = {
            activeKey: "home"
        };
    }

    public render() {
        const { activeKey } = this.state;

        const handleClick = (selected: any) => {
            this.setState({ activeKey: selected })
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

                            <Nav.Item>
                                <Nav.Link className={(activeKey === "videos") ? "active" : ""} onClick={() => handleClick("videos")} as={Link} to="videos">Videos</Nav.Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Nav.Link className={(activeKey === "photos") ? "active" : ""} onClick={() => handleClick("photos")} as={Link} to="photos">Photos</Nav.Link>
                            </Nav.Item>

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

    public componentWillMount() {
        const firstPath = window.location.pathname.split('/')[1];
        if (firstPath !== null && firstPath !== "")
            this.setState({ activeKey: firstPath });
    };

}