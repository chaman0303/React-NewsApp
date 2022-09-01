import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";


function Home() {
  return (
    <>
      <Navbar bg="primary" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand to="/" as={NavLink}>News~Feeder</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link to="/national" as={NavLink}>National</Nav.Link>
            <Nav.Link to="/technology" as={NavLink}>Technology</Nav.Link>
            <Nav.Link to="/politics" as={NavLink}>Politics</Nav.Link>     
            <Nav.Link to="/international" as={NavLink}>International</Nav.Link>           
            <Nav.Link to="/sports" as={NavLink}>Sports</Nav.Link>           
            <Nav.Link to="/healthCare" as={NavLink}>HealthCare</Nav.Link>                
          </Nav>
          <Navbar.Brand
            style={{
              display: "flex",
              justifyContent: "space-around",
              width: "15rem",
            }}
          >
            <h5>Follow Us:</h5>
            <FacebookIcon style={{ color: "white" }} />
            <TwitterIcon style={{ color: "white" }} />
            <InstagramIcon style={{ color: "white" }} />
           
          </Navbar.Brand>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    

    </>
  );
}

export default Home;