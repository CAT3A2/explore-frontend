import React from 'react';
import { Grid, CircularProgress } from '@mui/material';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';

import PostCard from './PostCard';

export default function Posts() {
  // const { state: { posts } } = useContext(ExploreContext)
  let posts = [
    {
      id: 1,
      title: 'Post 1',
      description: 'This is the first post in the array',
      tags: ['summer', 'holiday', 'school'],
      likes: 6,
      user: {
        username: 'Shane',
        id: 45,
        avatar:
        'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      },
      image: "https://images.unsplash.com/photo-1512552288940-3a300922a275?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
    },
    {
      id: 2,
      title: 'Post 2',
      description: 'This is the worst post in the array',
      tags: ['summer', 'holiday', 'jungle'],
      likes: 10,
      user: {
        avatar:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        id: 20,
        username: "Avely"
      },
      image: "https://images.unsplash.com/photo-1602002418816-5c0aeef426aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
    },
  ];
  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Container className="justify-content-center" >
      <Stack gap={4}>
      {posts.map((post) => (
        <Row className="justify-content-center" key={post.id} item xs={12} sm={12}>
          <PostCard post={post} />
        </Row>
      ))}
      </Stack>
    </Container>
  );
}
