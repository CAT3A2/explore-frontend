import * as React from 'react';
import {useContext} from 'react'
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

import ExploreContext from '../ExploreContext';

export default function SearchAppBar() {

  const { store: {currentUser}} = useContext(ExploreContext)
  console.log('/////////', currentUser)

  return (
    <Navbar bg="light" expand="lg" className='mb-5'>
      <Container>
        <Navbar.Brand href="/">Explore</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            { currentUser ? (
              <NavDropdown title="Username" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  My profile
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Create post
                </NavDropdown.Item>
                {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item> */}
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Log Out</NavDropdown.Item>
              </NavDropdown>
            ) : (
              <div>
                <Button>
                  <Nav.Link href="/signin">Sign In</Nav.Link>
                </Button>
                <Button>
                  <Nav.Link href="/signup">Sign Up</Nav.Link>
                </Button>
              </div>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
