import React from 'react'
import  ImProfile  from 'react-bootstrap-icons';
import { Container, Nav, Navbar, } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export default function NavigationBar() {
  return (<>
      <Navbar bg="dark" variant={"dark"} expand="lg">
      <Container>
        <Navbar.Brand><Link className='nav-link'><i class="bi bi-people-fill"></i></Link> 
             </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link><Link className='nav-link' to="/">Student Profile</Link></Nav.Link>
            <Nav.Link><Link className='nav-link' to="/addData">Add Students Data <i class="bi bi-plus"></i></Link> </Nav.Link>
          </Nav>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        </Navbar.Collapse> */}
      </Container>
    </Navbar>

  </>
  )
}
