import React from 'react'
import  ImProfile  from 'react-bootstrap-icons';
import { Container, Nav, Navbar, } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export default function NavigationBar() {
  return (<>
      <Navbar bg="dark" variant={"dark"} expand="lg">
      <Container>
        <Navbar.Brand><Link className='nav-link' to="/"><i class="bi bi-people-fill"></i></Link> 
             </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link><Link className='nav-link' to="/">Profile</Link></Nav.Link>
            <Nav.Link><Link className='nav-link' to="/addData">Add Data <i class="bi bi-plus"></i></Link> </Nav.Link>
            <Nav.Link><Link className='nav-link' to="/books">Library</Link> </Nav.Link>
            <Nav.Link><Link className='nav-link' to="/login">Login</Link> </Nav.Link>
            <Nav.Link><Link className='nav-link' to="/register">Register</Link> </Nav.Link>
            <Nav.Link><Link className='nav-link' to="/addData">AttendanceSheet</Link> </Nav.Link>
            <Nav.Link><Link className='nav-link' to="/addData">MarkMemo</Link> </Nav.Link>
            <Nav.Link><Link className='nav-link' to="/addData">Rancking</Link> </Nav.Link>
          </Nav>

      </Container>
    </Navbar>

  </>
  )
}
