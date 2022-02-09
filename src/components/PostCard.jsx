import React, { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import FavoriteSharpIcon from '@mui/icons-material/FavoriteSharp';
import { red } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';

export default function Post({  post, userObj }) {
  let {post_id, image, description, tags, title, likes, user} = post
  let username, avatar, user_id

  if (user) {
   ( {username, avatar, user_id} = user )
  } else {
    ( {username, avatar, user_id} = userObj )
  }

  return (
    <Card style={{ maxWidth: '50rem' }}>
      <Link to={`/post/${post_id}`} >
        <Card.Img variant="top" src={image} />
      </Link>
      <Card.Body>
        <Container>
          <Row>
            
            <Col xs={2}>
            <Link to={`/profile/${user_id}`}>
              <Avatar alt={username} src={avatar} />
              <p>{username}</p>
              </Link>
            </Col>
            <Col xs={8}>
              <Card.Title> {title} </Card.Title>
              <Card.Text>{description}</Card.Text>
              <Card.Text>{tags.map((tag) => `#${tag.name} `)}</Card.Text>
            </Col>
            <Col xs={2}>
              <Button variant="light" onClick={() => {}}>
                <FavoriteSharpIcon sx={{ color: red[700] }} />
                { !likes.length ? null : likes.length}
              </Button>
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
}
