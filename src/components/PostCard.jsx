import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import FavoriteSharpIcon from '@mui/icons-material/FavoriteSharp';
import { red } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';

export default function Post({ post }) {
  return (
    <Card style={{ maxWidth: '50rem' }}>
      <Link to={`/post/${post.id}`} >
        <Card.Img variant="top" src={post.image} />
      </Link>
      <Card.Body>
        <Container>
          <Row>
            <Col xs={2}>
              <Avatar alt={post.user.username} src={post.user.avatar} />
              <p>{post.user.username}</p>
            </Col>
            <Col xs={8}>
              <Card.Title> {post.title} </Card.Title>
              <Card.Text>{post.description}</Card.Text>
              <Card.Text>{post.tags.map((tag) => `#${tag} `)}</Card.Text>
            </Col>
            <Col xs={2}>
              <Button variant="light" onClick={() => {}}>
                <FavoriteSharpIcon sx={{ color: red[700] }} />
                Like
              </Button>
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
}
