import React, {useEffect, useReducer ,useState} from 'react';
import Container from '@mui/material/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ExploreContext from './../ExploreContext';
import initialState from './../initialState';
import stateReducer from './../stateReducer';
import {useParams} from 'react-router-dom'
import Posts from './Posts'

import api from './../api'


export default function Profile( ) {

  // const [dispatch] = useContext(stateReducer, initialState);
  const params = useParams();
  const [user, setUser] = useState({})


  useEffect(() => {
    async function fetchData() {
      const res = await api.get(`profile/${params.id}/posts`);
      // console.log(`Paramas ${params.id}`)
      // console.log(`Response: ${res}`)
      // dispatch({
      //   type: 'setPosts',
      //   data: res.data,
      // });
      // console.log(`Res.data: ${res.data.posts}`)
      setUser(res.data)

    }
    fetchData();
    console.log(`Posts: ${user.data}`)

  }, []);

  console.log(user)

  return(
      <Container maxWidth="md">
        <h1> User Page </h1>
        <Container maxWidth="sm">

        </Container>
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
      <Link to={`/post/${post_id}`} >
        <Card.Img variant="top" src={image} />
      </Link>
      <Card.Body>
        <Container>
          <Row>
            <Col xs={2}>
              <Avatar alt={username} src={avatar} />
              <p>{username}</p>
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
      <Posts posts={user.posts}/>
      </Container>
  );
}
