import React, { useContext } from 'react';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import ExploreContext from '../ExploreContext';

export default function CommentForm({ post_id, user_id }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const {
    store: { currentUser, authToken },
  } = useContext(ExploreContext);

  async function onSubmit(data, post_id) {
    const url = `http://localhost:5500/posts/${post_id}/comment`;
    // console.log(post_id + user_id)
    data.append('user_id', currentUser.user_id);

    const config = {
      headers: {
        'Authorization': `Bearer ${authToken}`
      },
    };

    axios.post(url, data, config).then((response) => {
      console.log(data);
    });
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group>
        <Form.Label>Comment</Form.Label>
        <Form.Control
          type="text"
          id="comment"
          name="comment"
          placeholder="Comment"
          // validation
          {...register('comment', { required: true })}
        />
        {errors.coment && <p className="error-message"> Required </p>}
      </Form.Group>
      <Button type="submit"> Comment </Button>
    </Form>
  );
}
