import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
  return (
    <Navbar expand="lg" className='Navbar text-white'>
      <Container>
        <Navbar.Brand href="#home" className="nav-link text-white">KarmineCorp</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="my-navbar-toggle"/>
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto d-flex justify-content-between w-50 align-items-center">
              <Nav.Link href="#home" className="nav-link text-white">Home</Nav.Link>
              <Nav.Link href="#link" className="nav-link text-white">Trix City</Nav.Link>
          <NavDropdown title="Teams" id="basic-nav-dropdown" className="my-nav-dropdown">
              <NavDropdown.Item href="#action/3.1" className='text-menu'>League of Legends</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" className='text-menu'>Valorant</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" className='text-menu'>Rocket League</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4" className='text-menu'>Teamfight Tactic</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5" className='text-menu'>TrackMania</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.6" className='text-menu'>Super Smash Bros Ultimate</NavDropdown.Item>
              <NavDropdown.Divider/>
              <NavDropdown.Item href="#action/3.7" className='text-menu'>
                Staff
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link" className="nav-link text-white">Boutique</Nav.Link>
            <Nav.Link href="#link" className="nav-link text-white">À propos</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
