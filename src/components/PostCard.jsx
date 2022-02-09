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
import axios from 'axios'

  export default function Post({ post, userObj }) {
    const {
      store: { currentUser },
    } = useContext(ExploreContext);
  
    const [allLikes, setAllLikes] = useState([]);
    let { post_id, image, description, tags, title, likes, user } = post;
    let username, avatar, user_id;
  
    if (user) {
      ({ username, avatar, user_id } = user);
    } else {
      ({ username, avatar, user_id } = userObj);
    }

    useEffect(() => {
      async function fetchData() {
        // const res = await api.get(`posts/${post_id}/like`);
        setAllLikes(likes)
      }
      fetchData();
    }, []);
  
    const addLike = () => {
      axios
        .post(`http://localhost:5500/posts/${post_id}/like`, { user_id: currentUser.user_id, post_id })
        .then((likes) => {
          setAllLikes(likes);
          console.log(allLikes)
        })
        .catch((err) => console.log(err));
    };
  
    return (
      <Card style={{ maxWidth: '50rem' }}>
        <Link to={`/post/${post_id}`}>
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
                <Button variant="light" onClick={addLike}>
                  <FavoriteSharpIcon sx={{ color: red[700] }} />
                  {!allLikes.length ? null : allLikes.length}
                </Button>
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    );
  }