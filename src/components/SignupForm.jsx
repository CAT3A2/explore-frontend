import { useState, useReducer } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import initialState from './../initialState';
import stateReducer from './../stateReducer';

function SignupForm() {
  const [dispatch] = useReducer(stateReducer, initialState);
  const [file, setFile] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    const url = 'http://localhost:5500/auth/signup';
    const formData = new FormData();
    formData.append('avatar', file);
    console.log(data);
    // formData.append('fileName', file.name);
    formData.append('username', data.username);
    formData.append('email', data.email);
    formData.append('password', data.password);

    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };
    axios.post(url, formData, config).then((response) => {
      console.log(response);
      dispatch(
        {
          // store the access token that was returned with the response in global store
          type: 'setToken',
          data: response.accessToken,
        },
        {
          // store the user information that was returned with the response in global store
          type: 'setCurrentUser',
          data: response.user,
        }
      ).catch((error) => {
        // this is not working
        console.log(`Error: ${error.message}`);
      });
    });
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h1> Sign Up </h1>
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

        <Button type="submit"> Upload </Button>
      </Form>
    </Container>
  );
}

export default SignupForm;
