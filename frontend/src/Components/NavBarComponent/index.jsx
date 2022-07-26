import React from 'react'
import { Row, Col, Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import Logo from './Images/SvgDefaultMonochromeBlack';
import './styles.css';

const NavBarComponent = () => {
	return (
		<div className="App">
			<Navbar expand="lg">
				<Container>
					<Row>
						<Col xs={11} lg={2}>
							<Navbar.Brand>
								<div className="Brand">
									<a href="#Home">
										<Logo width={230} />
									</a>
								</div>
							</Navbar.Brand>
						</Col>
						<Col className="" xs={1} lg={6} >
							<Navbar.Collapse id="basic-navbar-nav">
								<Nav id="Links">
									<Nav.Link className="Link" href="#Home">       Home       </Nav.Link>
									<Nav.Link className="Link" href="#Contact">    Contact    </Nav.Link>
									<Nav.Link className="Link" href="#Experience"> Experience </Nav.Link>
									<Nav.Link className="Link" href="#Work">       Portfolio  </Nav.Link>
								</Nav>
							</Navbar.Collapse>
							<Navbar.Toggle aria-controls="responsive-navbar-nav" />
						</Col>
					</Row>
				</Container>
			</Navbar>
		</div>
	);
}

export default NavBarComponent;
