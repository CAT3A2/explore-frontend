import React from 'react';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default function CommentForm( {post_id, user_id}) {

  const { register, handleSubmit, formState: {errors}} = useForm()

  async function onSubmit(data, post_id, user_id) {
    const url = 'http://localhost:5500/auth/signin';
    console.log(post_id + user_id)
    data.append('post_id', post_id) 
    data.append('user_id', user_id) 

    // const res = await api.post(`post/${post_id}`, {
    //     console.log(`Res: ${res}`)
    //   })

    axios.post(url, data)
      .then((response) => {
        console.log(data)
      })
  }

  return (
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group >
          <Form.Label>Comment</Form.Label>
          <Form.Control 
            type="text"
            id="comment"
            name="comment"
            placeholder="Comment"
            // validation
            {...register('comment', { required: true })}/>
            {errors.coment && <p className="error-message"> Required </p>}
        </Form.Group>
        <Button type="submit"> Comment </Button>
      </Form>
  );
}
