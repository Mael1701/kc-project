import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useMediaQuery } from 'react-responsive';


function NavBar() {
  const image = new Image();
  image.src = process.env.PUBLIC_URL + './images/Karmine_Corp_logo.svg';

  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <Navbar expand="lg" className={`Navbar text-white ${isMobile ? 'gradient-background' : '90deg, #FFD43B 0%, #FFC13A 100%'}`}>
      <Container>
            <Navbar.Brand href="#home" className="nav-link">
            <img src={image.src} alt="KC" className='Logo' />
            </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="my-navbar-toggle"/>
        <Navbar.Collapse id="basic-navbar-nav" className='my-navbar-collapse'>
          <div className="container1">
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
            <Nav.Link href="https://karmineshop.com/" target="_blank" className="nav-link text-white">Boutique</Nav.Link>
            <Nav.Link href="#link" className="nav-link text-white">À propos</Nav.Link>
          </Nav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
