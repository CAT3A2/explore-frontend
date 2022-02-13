import React, { useContext } from 'react';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
import Button from 'react-bootstrap/Button';
import { useCookies } from 'react-cookie';

import ExploreContext from '../ExploreContext';


import api from './../api'

export default function CommentForm({ post_id, user_id }) {
  const [cookies, setCookie] = useCookies(['tokenCookie']);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const {
    store: { currentUser },
  } = useContext(ExploreContext);

  async function onSubmit(data) {
    // need to send currentUser

    const config = {
      headers: {
        Authorization: `Bearer ${cookies.tokenCookie}`,
      },
    };

    api.post(`posts/${post_id}/comment`, data, config).then((response) => {
    });
  }

  return (
    <Form onSubmit={() => handleSubmit(onSubmit)}>
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
        {errors.comment && <p className="error-message"> Required </p>}
      </Form.Group>
      <Button type="submit"> Comment </Button>
    </Form>
  );
}
