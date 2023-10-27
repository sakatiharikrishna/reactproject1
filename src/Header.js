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
            <Nav.Link href="/blogs">Blog Navigations</Nav.Link>
            <Nav.Link href="/parallax">Parallax Effect</Nav.Link>
            <Nav.Link href="/scroll">Infinite Scroll Page</Nav.Link>
            <Nav.Link href="/scrollanim">Scroll Animation</Nav.Link>
            <Nav.Link href="/color">Color Generator</Nav.Link>
            <Nav.Link href="/network">Network Status</Nav.Link>
            <Nav.Link href="/darkmode">DarkMode</Nav.Link>
            <Nav.Link href="/game">Tic Tac Toe </Nav.Link>
            <Nav.Link href="/chatbot">Chatbot </Nav.Link>
            <Nav.Link href="/weather">Live Weather</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <hr/>
    </>
  );
}

export default ColorSchemesExample;