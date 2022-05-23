import React from 'react'
import { Navbar, Container, Nav, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import myIcon from './Images/default-monochrome-black.svg';
import './styles.css';

const NavBarComponent = () => {
	return (
		<div className="App">
			<Navbar expand="lg">
				<Container className="NavBar">
					<Navbar.Brand>
						<div className="Brand">
							<img src={myIcon} width="220" alt="icon" />

						</div>
					</Navbar.Brand>
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav id="Links">
							<Nav.Link className="Link" href="#Home"> Home </Nav.Link>
							<Nav.Link className="Link" href="#Contact"> Contact </Nav.Link>
							<Nav.Link className="Link" href="#Experience"> Experience </Nav.Link>
							<Nav.Link className="Link" href="#Work"> Portfolio </Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
}

export default NavBarComponent;
