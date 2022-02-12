import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';

import PostCard from './PostCard';

export default function Posts( {posts, userObj} ) {

  return !posts?.length ? (
    null
    ) : (
      <Container className="justify-content-center" >
      <Stack gap={4}>
      {posts.map((post) => (
        <Row className="justify-content-center" key={post.id} xs={12} sm={12}>
          <PostCard post={post} userObj={userObj || post.user}/>
        </Row>
      ))}
      </Stack>
    </Container>
  );
}


