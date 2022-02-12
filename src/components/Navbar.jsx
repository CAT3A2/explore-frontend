import { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { useCookies } from 'react-cookie';
import api from '../api.js';

import ExploreContext from '../ExploreContext';

export default function SearchAppBar() {
  const {
    store: { currentUser },
    dispatch,
  } = useContext(ExploreContext);
  const [cookies, setCookie] = useCookies(['tokenCookie']);
  const [searchedContent, setSearchedContent] = useState('');
  console.log(cookies.tokenCookie);
  const logOut = () => {
    dispatch({
      type: 'setCurentUser',
      data: null,
    });
    setCookie('tokenCookie', '');
  };

  const changeHandler = (e) => {
    setSearchedContent(e.target.value);
  };
  const searchPosts = async () => {
    const res = await api.get(`http://localhost:5500/posts/?search=${searchedContent}`);
    console.log(res);
    dispatch({
      type: 'setSearchedPost',
      data: res.data,
    });
  };

  return (
    <Navbar bg="light" expand="lg" className="mb-5">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/">Home</Link>

            <Link to="/about">About</Link>
            <form onSubmit={searchPosts}>
              <input type="text" name="search" onChange={changeHandler} />
              <Link to="/search" onClick={searchPosts}>
                Search
              </Link>
            </form>
            {currentUser ? (
              <NavDropdown title={currentUser.username} id="basic-nav-dropdown">
                <NavDropdown.Item>
                  <Link to={`profile/${currentUser.user_id}`}>My profile</Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="/post/new">
                  <Link to="/post/new">Create post</Link>
                </NavDropdown.Item>
                {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item> */}
                <NavDropdown.Divider />
                <NavDropdown.Item href="/" onClick={logOut}>
                  Log Out
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <div>
                <Button>
                  <Link to="/signin">Sign In</Link>
                </Button>
                <Button>
                  <Link to="/signup">Sign Up</Link>
                </Button>
              </div>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
