import React, { useContext, useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ExploreContext from '../ExploreContext';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import FavoriteSharpIcon from '@mui/icons-material/FavoriteSharp';
import { red } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';

import api from './../api';
import CommentForm from './CommentForm';

export default function Post() {
  const navigate = useNavigate();
  const params = useParams();
  const [post, setPost] = useState();
  const [cookies] = useCookies(['tokenCookie']);
  const [comments, setComments] = useState([]);
  const {
    store: { currentUser },
  } = useContext(ExploreContext);

  useEffect(() => {
    async function fetchData() {
      const res = await api.get(`posts/${params.post_id}`);

      setPost(res.data);
      setComments(res.data.comments);
    }
    fetchData();
  }, []);

  const deletePost = () => {
    const config = {
      headers: {
        Authorization: `Bearer ${cookies.tokenCookie}`,
      },
    };

    api
      .delete(`profile/${post.user_id}/posts/${post.post_id}`, config)
      .then((response) => {
        console.log(response);
        navigate('/');
      })
      .catch((err) => console.log(err));
  };

  return post ? (
    <Card style={{ maxWidth: '50rem' }}>
      <Card.Img variant="top" src={post.image_url} />
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
              <Card.Text>
                <Card.Text>{post.tags.map((tag) => `#${tag.name} `)}</Card.Text>
              </Card.Text>
            </Col>
            <Col xs={2}>
              <Button variant="light" onClick={() => {}}>
                <FavoriteSharpIcon sx={{ color: red[700] }} />
                {!post.likes.length ? null : post.likes.length}
              </Button>
            </Col>
            {currentUser?.user_id === post.user.user_id && (
              <Col>
                <Button onClick={deletePost}>Delete Post</Button>
                <Button>
                  <Link to={`/post/${post.post_id}/update`}>Edit</Link>
                </Button>
              </Col>
            )}
          </Row>
          <hr></hr>
          <Card.Title> Comments </Card.Title>
          {comments.map((comment) => (
            <Card key={comment.id}>
              <div>
                {' '}
                <Link to={`/profile/${comment.user.user_id}`}>
                  {' '}
                  {comment.user.username}{' '}
                </Link>{' '}
                - {comment.comment}{' '}
              </div>
              {/* <div> Created {comment}</div> */}
              <br></br>
            </Card>
          ))}
          {currentUser && (
            <CommentForm post_id={post.id} user_id={currentUser.id} />
          )}
        </Container>
      </Card.Body>
    </Card>
  ) : (
    <h4> Loading ... </h4>
  );
}
