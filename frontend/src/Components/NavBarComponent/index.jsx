import React from 'react'
import { Row, Col, Navbar, Container, Nav } from 'react-bootstrap';
import Logo from './Images/SvgDefaultMonochromeBlack';
import './styles.css';

const NavBarComponent = () => {
	return (
		<div className="App">
			<Navbar expand="lg">
				<Container className="d-grid justify-content-center">
					<Row>
						<Col className="d-grid justify-content-end" xs={12} lg={2}>
							<Navbar.Brand>
								<div className="Brand">
									<a href="#Home">
										<Logo width={230} />
									</a>
								</div>
							</Navbar.Brand>
						</Col>
						<Col xs={1} lg={6} >
							{/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
							<Navbar.Collapse id="basic-navbar-nav">
								<Nav id="Links">
									<Nav.Link className="Link" href="#Home">       Home       </Nav.Link>
									<Nav.Link className="Link" href="#Contact">    Contact    </Nav.Link>
									<Nav.Link className="Link" href="#Experience"> Experience </Nav.Link>
									<Nav.Link className="Link" href="#Work">       Portfolio  </Nav.Link>
								</Nav>
							</Navbar.Collapse>
						</Col>
					</Row>
				</Container>
			</Navbar>
		</div>
	);
}

export default NavBarComponent;
