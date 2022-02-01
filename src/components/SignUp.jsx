import { useState } from 'react'
import axios from 'axios'
// import 'core-js/es6/promise';
// import 'core-js/es6/set';
// import 'core-js/es6/map';
// import * as yup from 'yup';

function Form() {

  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [file, setFile] = useState()

  // let schema = yup.object().shape({
  //   username: yup.string().required(),
  //   password: yup.string().required(),
  //   email: yup.string().email(),
  // });


  function handleChange(e) {
    setFile(e.targetfiles[0])
  }

  function handleSubmit(e) {
    e.preventDefault()
    const url = 'http://localhost:3000/signup'
    const formData = new FormData()
    formData.append('file', file)
    // formData.append('fileName', file.name)
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
      <form onSubmit={handleSubmit}>
        <h1> File upload </h1>
        <div>
            <input 
                type="text"
                // validationSchema={schema}
                id="username"
                name="username"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                placeholder="Username"/>
        </div>

        <div>
            <input 
                type="email"
                // validationSchema={schema}
                id="email"
                name="username"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder="Email"/>
        </div>

        <div>
            <input 
                type="tpassword"
                // validationSchema={schema}
                id="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                placeholder="Password"/>
        </div>
        
        <div>
        <input type="file" onChange={handleChange}/>
        </div>

        <button type="submit" > Upload </button>
      </form>
    </div>
  );
}

export default Form;