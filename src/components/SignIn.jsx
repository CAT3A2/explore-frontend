import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

export default function SignIn() {

  const { register, handleSubmit, formState: {errors}} = useForm()

  function onSubmit(data) {
    const url = 'http://localhost:3000/auth/signin';
    console.log(data)

    // axios.post(url, data)
    //   .then((response) => {
    //     console.log(data)
    //   })
  }


  return(
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group >
        <Form.Label>Username</Form.Label>
        <Form.Control 
          type="text"
          id="username"
          name="username"
          placeholder="Username"
          {...register('username', { required: true })}/>
          {errors.username && <p className="error-message"> Required </p>}
          
      </Form.Group>

      <Form.Group >
        <Form.Label> Password </Form.Label>
        <Form.Control 
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          {...register('password', { required: true })}/>
          {errors.password && <p className="error-message"> Required </p>}

      </Form.Group>

      <Button type="submit"> Sign In </Button>

      <h6>Don't have an account with us?</h6>

      <Button> Sign Up</Button>

    </Form>
  );
}
