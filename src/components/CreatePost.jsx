import { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import {useNavigate} from 'react-router-dom'
import { useCookies } from 'react-cookie';

import ExploreContext from "../ExploreContext";


function CreatePost() {

  const [cookies, setCookie] = useCookies(['tokenCookie']);
  const [file, setFile] = useState();
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const {store: {currentUser, authToken}} = useContext(ExploreContext)


  function onSubmit(data) {
    const url = `http://localhost:5500/profile/${currentUser.user_id}/posts`;
    const formData = new FormData();
    // split tags from string into an array of strings
    const tagArray = data.tags.split(/[\s,]+/)
    formData.append('image_url', file);
    formData.append('title', data.title);
    formData.append('description', data.description);
    formData.append('destination', data.destination);
    formData.append('tags', tagArray)


    const config = {
      headers: {
        'content-type': 'multipart/form-data',
        'Authorization': `Bearer ${cookies.tokenCookie}}`
      }
    }
    axios.post(url, formData, config)
      .then((response) => {
        navigate('/')
      })
      
  }

  return (
<Container >
  <div className="formCard"> 
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h1> New Post </h1>
        <Form.Group className="mb-3">

          <Form.Label > Title </Form.Label>
          <Form.Control
            type="text"
            id="title"
            name="title"
            placeholder="Title"
            // validation
            {...register('title', { required: true })}
          />
          {errors.title && <p>Title is required</p>}
        </Form.Group>

        <Form.Group>
          <Form.Label > Description </Form.Label>
          <Form.Control
            type="text"
            id="description"
            name="description"
            placeholder="Description"
            // validation
            {...register('description', { required: false })}
          />
          {errors.description && <p></p>}
        </Form.Group>

        <Form.Group>
        <Form.Label > Destination </Form.Label>
          <Form.Control
            type="text"
            id="destination"
            name="destination"
            placeholder="Destination"
            // validation
            {...register('destination', { required: false })}
          />
          {errors.destination && <p></p>}
        </Form.Group>

        <Form.Group>
        <Form.Label > Tags </Form.Label>
          <Form.Control
            type="text"
            id="tags"
            name="tags"
            placeholder="Tags"
            // validation
            {...register('tags', { required: true})}
          />
          {errors.tags && <p></p>}
        </Form.Group>

        <Form.Group>
          <Form.Label > Image </Form.Label>
          <Form.Control type="file" onChange={(e) => setFile(e.target.files[0])} />
        </Form.Group>

        <Button type="submit"> Upload </Button>
      </Form>
      </div>
      </Container>

  );
}

export default CreatePost;