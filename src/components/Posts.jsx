import React, {useContext} from 'react';
import { CircularProgress } from '@mui/material';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';
import ExploreContext from "../ExploreContext";

import PostCard from './PostCard';

export default function Posts( ) {
  const { store: { posts } } = useContext(ExploreContext)

  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Container className="justify-content-center" >
      <Stack gap={4}>
      {posts.map((post) => (
        <Row className="justify-content-center" key={post.id} xs={12} sm={12}>
          <PostCard post={post}/>
        </Row>
      ))}
      </Stack>
    </Container>
  );
}
