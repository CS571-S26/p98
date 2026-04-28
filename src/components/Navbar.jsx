import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink, Link } from "react-router-dom";

function AppNavbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="light">
      <Container>
        <Navbar.Brand as={Link} to="/">
          EcoTrack
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-nav" />
        <Navbar.Collapse id="main-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/" end>
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/calculator">
              Calculator
            </Nav.Link>
            <NavDropdown title="Articles" id="articles-dropdown">
              <NavDropdown.Item as={NavLink} to="/articles/global-warming">
                Global Warming
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/articles/carbon-footprint">
                Carbon Footprint
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
