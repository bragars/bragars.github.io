import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap';
import Logo from './Images/SvgDefaultMonochromeBlack';
import './styles.css';

const NavBarComponent = () => {
	return (
		<div className="App">
			<Navbar expand="lg">
				<Container className="NavBar">
					<Navbar.Brand>
						<div className="Brand">
							<a href="#Home">
								<Logo width={230} />
							</a>
						</div>
					</Navbar.Brand>
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav id="Links">
							<Nav.Link className="Link" href="#Home">       Home       </Nav.Link>
							<Nav.Link className="Link" href="#Contact">    Contact    </Nav.Link>
							<Nav.Link className="Link" href="#Experience"> Experience </Nav.Link>
							<Nav.Link className="Link" href="#Work">       Portfolio  </Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
}

export default NavBarComponent;
