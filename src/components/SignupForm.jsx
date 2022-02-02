import { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Form from 'react-bootstrap/Form';


function SignupForm() {

  const [file, setFile] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    const url = 'http://localhost:3000/auth/signup';
    const formData = new FormData();
    formData.append('avatar', file);
    console.log(data)
    // formData.append('fileName', file.name);
    formData.append('username', data.username);
    formData.append('email', data.email);
    formData.append('password', data.password);

    const config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    }
    axios.post(url, formData, config)
      .then((response) => {
        console.log(response.data)
      })
  }

  return (
    <div className="App">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h1> File upload </h1>
        <div>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Username"
            // validation
            {...register('username', { required: true, minLength: 2 })}
          />
          {errors.username && <p>Username must be at least 2 characters.</p>}
        </div>

        <div>
          <input
            type="email"
            id="email"
            name="username"
            placeholder="Email"
            // validation
            {...register('email', { required: true })}
          />
          {errors.email && <p>Invalid email</p>}
        </div>

        <div>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            // validation
            {...register('password', { required: true, minLength: 6 })}
          />
          {errors.password && <p>Password must be at least 6 characters</p>}
        </div>

        <div>
          <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        </div>

        <button type="submit"> Upload </button>
      </Form>
    </div>
  );
}

export default SignupForm;
