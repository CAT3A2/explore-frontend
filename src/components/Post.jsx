import React, {useContext, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import ExploreContext from "../ExploreContext";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import FavoriteSharpIcon from '@mui/icons-material/FavoriteSharp';
import { red } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';


export default function Post(  ) {

  const params = useParams();
  console.log(`Params: ${params.id}`)

  const { store: { posts } } = useContext(ExploreContext)
  console.log(`Posts: ${posts}`)

  const post = posts.find((p) => p.id == params.id);

  return post ? (
  
    <Card style={{ maxWidth: '50rem' }}>
    <Link to={`/posts/${post.post_id}`} >
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
            <Card.Text>{post.tags.map((tag) => `#${tag.name} `)}</Card.Text>
          </Col>
          <Col xs={2}>
            <Button variant="light" onClick={() => {}}>
              <FavoriteSharpIcon sx={{ color: red[700] }} />
              { !post.likes.length ? null : post.likes.length}
            </Button>
          </Col>
        </Row>
        <hr></hr>
        <Card.Title> Comments </Card.Title>
        {post.comments.map((comment) => (
          // console.log(comment.comment)
          <Card>
            <div> <Link to={`/profile/${comment.user.user_id}`} > {comment.user.username} </Link> -  {comment.comment} </div>
            {/* <div> Created {comment}</div> */}
            <br></br>
          </Card>
           ))} 
      </ Container>
    </Card.Body>
  </Card>

  ) : <h4> Loading ... </h4>
}
