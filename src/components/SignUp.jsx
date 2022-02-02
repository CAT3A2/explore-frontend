import { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

function Form() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [file, setFile] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(e) {
    e.preventDefault();
    const url = 'http://localhost:3000/signup';
    const formData = new FormData();
    formData.append('file', file);
    formData.append('fileName', file.name);
    formData.append('username', username);
    formData.append('email', email);
    formData.append('password', password);

    // const config = {
    //   headers: {
    //     'content-type': 'multipart/form-data'
    //   }
    // }
    // axios.post(url, formData, config)
    //   .then((response) => {
    //     console.log(response.data)
    //   })
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1> File upload </h1>
        <div>
          <input
            type="text"
            id="username"
            name="username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
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
            onChange={(e) => setEmail(e.target.value)}
            value={email}
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
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="Password"
            // validation
            {...register('password', { required: true })}
          />
          {errors.password && <p>Password must be at least 6 characters</p>}
        </div>

        <div>
          <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        </div>

        <button type="submit"> Upload </button>
      </form>
    </div>
  );
}

export default Form;
