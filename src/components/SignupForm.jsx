import { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from '@mui/material/Container';
import Alert from 'react-bootstrap/Alert';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useCookies } from "react-cookie";

import api from './../api'
import ExploreContext from '../ExploreContext';


function SignupForm() {
  const { dispatch } = useContext(ExploreContext);
  const [file, setFile] = useState();
  const [serverError, setServerError] = useState();
  const [cookies, setCookie] = useCookies(['tokenCookie']);

  let navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function onSubmit(data) {
    const url = 'http://localhost:5500/auth/signup';
    const formData = new FormData();
    formData.append('avatar', file);
    formData.append('username', data.username);
    formData.append('email', data.email);
    formData.append('password', data.password);

    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };

    api
      .post(url, formData, config)
      .then(function (response) {
 
        dispatch({
          // store the user information that was returned with the response in global store
          type: 'setCurrentUser',
          data: response.data.user,
        });
        // save accessToken from response to a cookie
        setCookie('tokenCookie', response.data.accessToken)

        // navigate to home page after successful signup
        navigate('/');
        
      })
      .catch(function (error) {
        if (error.response) {
          setServerError(error.response.data);
        }
        //  else if (error.request) {
        //   console.log(error.request);
        // } else {
        //   // console.log('Error', error.message);
        // }

      });
  }

  return (
    <Container maxWidth="sm">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h1> Sign Up </h1>
        {serverError && <Alert variant="danger"> {serverError} </Alert>}
        <Form.Group className="mb-3">
          <Form.Label> Username </Form.Label>
          <Form.Control
            type="text"
            id="username"
            name="username"
            placeholder="Username"
            // validation
            {...register('username', { required: true, minLength: 2 })}
          />
          {errors.username && (
            <p className="danger"> Username must be at least 2 characters.</p>
          )}
        </Form.Group>

        <Form.Group>
          <Form.Label> Email </Form.Label>
          <Form.Control
            type="email"
            id="email"
            name="username"
            placeholder="Email"
            // validation
            {...register('email', { required: true })}
          />
          {errors.email && <p>Invalid email</p>}
        </Form.Group>

        <Form.Group>
          <Form.Label> Password </Form.Label>
          <Form.Control
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            // validation
            {...register('password', { required: true, minLength: 6 })}
          />
          {errors.password && <p>Password must be at least 6 characters</p>}
        </Form.Group>

        <Form.Group>
          <Form.Label> Profile Picture </Form.Label>
          <Form.Control
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </Form.Group>

        <Button type="submit"> Sign Up </Button>
        <h6>Already have an account with us?</h6>
        <Link to="/signin">
          <Button> Sign In</Button>
        </Link>
      </Form>
    </Container>
  );
}

export default SignupForm;
