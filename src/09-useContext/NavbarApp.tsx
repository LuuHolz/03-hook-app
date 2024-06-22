import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavbarApp = () => {
  return (

    <>
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="about">Features</Nav.Link>
          <Nav.Link href="login">Pricing</Nav.Link>
        </Nav>
      </Container>
    </Navbar>

  </>
    //   {/* Usar LINK y no a href... para que no se recargue de nuevo */}
    //   <Link to="/">Home</Link>

  );
};

export { NavbarApp };
