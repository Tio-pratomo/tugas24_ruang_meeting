import React, { Component, Fragment } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

export default class NavbarTab extends Component {
    render() {
        return (
            <Fragment>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/Dashboard">Dashboard</Nav.Link>
                        <Nav.Link href="/Pemesanan">Pemesanan</Nav.Link>
                        <Nav.Link href="#pricing">Konfirmasi</Nav.Link>
                        <Nav.Link href="#struk">Receipts</Nav.Link>
                    </Nav>
                </Navbar>
            </Fragment>
        );
    }
}
