import React, { useContext } from 'react';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import ExploreContext from '../ExploreContext';
import { useCookies } from 'react-cookie';


export default function CommentForm({ post_id, user_id }) {
  const [cookies, setCookie] = useCookies(['tokenCookie']);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const {
    store: { currentUser, authToken },
  } = useContext(ExploreContext);

  async function onSubmit(data) {
    console.log('foo')
    console.log(post_id)
    const url = `http://localhost:5500/posts/${post_id}/comment`;

    // need to send currentUser

    const config = {
      headers: {
        'Authorization': `Bearer ${cookies.tokenCookie}`
      },
    };

    axios.post(url, data, config).then((response) => {
console.log('afrter')
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
        {errors.coment && <p className="error-message"> Required </p>}
      </Form.Group>
      <Button type="submit"> Comment </Button>
    </Form>
  );
}
