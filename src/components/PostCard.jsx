import React, { useEffect, useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import FavoriteSharpIcon from '@mui/icons-material/FavoriteSharp';
import { red } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';
import ExploreContext from '../ExploreContext';

import api from './../api'

// component for rendering posts without comments
export default function PostCard({ post, userObj }) {

  // get currentUser from global store
  const {
    store: { currentUser },
  } = useContext(ExploreContext);

  const [allLikes, setAllLikes] = useState([]);
  // destructuring user and post
  let { post_id, image_url, description, tags, title, likes, user } = post;
  let username, avatar, user_id;
  let tagsArr = tags[0].name.split(',')


  // is user was deconstructed from post, deconstruct it
  if (user) {
    ({ username, avatar, user_id } = user);
    // else deconstruct user info from userObj
  } else {
    ({ username, avatar, user_id } = userObj);
  }

  // set the likes for the post
  useEffect(() => {
    async function fetchData() {
      setAllLikes(likes);
    }
    fetchData();
  }, []);

  // when like button is clicked, like gets added to that post
  const addLike = () => {
    api
      .post(`posts/${post_id}/like`, {
        user_id: currentUser.user_id,
        post_id,
      })
      .then((response) => {
        setAllLikes(response.data);
        console.log(response)
      })
      .catch((err) => console.log(err));
  };

  return (
    <Card style={{ maxWidth: '50rem' }}>
      <Link to={`/post/${post_id}`}>
        <Card.Img variant="top" src={image_url} />
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
              <Card.Text>{tagsArr.map((tag) => `#${tag} `)}</Card.Text>
            </Col>
            <Col xs={2}>
              {currentUser ? (
                <Button variant="light" onClick={addLike}>
                  <FavoriteSharpIcon sx={{ color: red[700] }} />
                  {!allLikes.length ? null : allLikes.length}
                </Button>
              ) : (
                <Button variant="light">
                  <FavoriteSharpIcon sx={{ color: red[700] }} />
                  {!allLikes.length ? null : allLikes.length}
                </Button>
              )}
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
}
