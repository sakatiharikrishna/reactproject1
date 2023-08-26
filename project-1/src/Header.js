import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
  const logo = require("./logo.png")
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">
               <img src ={logo} alt='logo' style={{height:'30px',width:'50px'}}/>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Blog Navigations</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <hr/>
    </>
  );
}

export default ColorSchemesExample;