import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
// import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from '@mui/material/Container';
import ExploreContext from '../ExploreContext';
import Alert from 'react-bootstrap/Alert';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import api from './../api';

export default function SignIn() {
  let navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { dispatch } = useContext(ExploreContext);
  const [serverError, setServerError] = useState();
  const [cookies, setCookie] = useCookies(['tokenCookie']);

  function onSubmit(data) {
    api
      .post('auth/login', data)
      .then((response) => {
        console.log(data);
        dispatch({
          // store the user information that was returned with the response in global store
          type: 'setCurrentUser',
          data: response.data.user,
        });
        // store accessToken extracted from response in a cookie
        setCookie('tokenCookie', response.data.accessToken).catch((error) => {
          console.log(error);
        });

        navigate('/');
      })
      .catch(function (error) {
        if (error) {
          // setServerError(error);
          console.log(error)
        } else if (error.request) {
          // console.log(error.request);
        } else {
          // console.log('Error', error.message);
        }
      });
  }

  return (
    <Container maxWidth="sm">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h1> Sign In </h1>
        {serverError && <Alert variant="danger"> {serverError} </Alert>}
        <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            id="username"
            name="username"
            placeholder="Username"
            // validation
            {...register('username', { required: true })}
          />
          {errors.username && <p className="error-message"> Required </p>}
        </Form.Group>

        <Form.Group>
          <Form.Label> Password </Form.Label>
          <Form.Control
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            // validation
            {...register('password', { required: true })}
          />
          {errors.password && <p className="error-message"> Required </p>}
        </Form.Group>

        <Button type="submit"> Sign In </Button>

        <h6>Don't have an account with us?</h6>
        <Link to="/signup">
          <Button> Sign Up</Button>
        </Link>
      </Form>
    </Container>
  );
}
