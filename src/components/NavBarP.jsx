import { Navbar, Container, Nav } from "react-bootstrap";

import { Outlet, Link } from "react-router-dom";

const NavBarP = () => {
  return (
    //! ojo aqui usar fragmentales para usar outlet y visualizar correctamente la paginacion
    <>
      <Navbar className="navBG" variant="dark" expand="md">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Josue.DEV
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                Aboutme
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                Contactme
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <section>
        <Outlet></Outlet>
      </section>
    </>
  );
};

export default NavBarP;
