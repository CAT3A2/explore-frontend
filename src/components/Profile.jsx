import React, { useEffect, useReducer, useState } from 'react';
import Container from '@mui/material/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import ExploreContext from './../ExploreContext';
import initialState from './../initialState';
import stateReducer from './../stateReducer';
import { useParams } from 'react-router-dom';
import Posts from './Posts';
import Avatar from '@mui/material/Avatar';

import api from './../api';

export default function Profile() {
  // const [dispatch] = useContext(stateReducer, initialState);
  const params = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    async function fetchData() {
      const res = await api.get(`profile/${params.id}/posts`);

      setUser(res.data);
    }
    fetchData();
  }, []);

  return (
    <Container maxWidth="md">
      <h1> User Page </h1>
      <Container maxWidth="sm"></Container>
      {/* <Row>
          <Col xs={2}>
              <Avatar alt={post.user.username} src={post.user.avatar} />
              <p>{post.user.username}</p>
            </Col>
            <Col xs={8}>
              <Card.Title> {post.title} </Card.Title>
              <Card.Text>{post.description}</Card.Text>
              <Card.Text>{post.tags.map((tag) => `#${tag.name} `)}</Card.Text>
            </Col>
            <Col xs={2}>
              <Button variant="light" onClick={() => {}}>
                <FavoriteSharpIcon sx={{ color: red[700] }} />
                { !post.likes.length ? null : post.likes.length}
              </Button>
            </Col>
        </Row> */}

      <Card style={{ maxWidth: '50rem' }}>
        <Link to={`/post/2`}>
          <Card.Img variant="top" src="" />
        </Link>
        <Card.Body>
          <Container>
            <Row>
              <Col xs={2}>
                <Avatar alt="{username}" src="" />
                <p>Username</p>
              </Col>
              <Col xs={8}>
                <Card.Title> This is Profile Card</Card.Title>
                <Card.Text>This is description</Card.Text>
              </Col>
              <Col xs={2}></Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
      <Posts
        posts={user.posts}
        userObj={{
          username: user.username,
          avatar: user.avatar,
          user_id: user.user_id,
        }}
      />
    </Container>
  );
}
