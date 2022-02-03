import { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';


function CreatePost() {

  const [image, setImage] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    const url = 'http://localhost:3000/createpost';
    const formData = new FormData();
    formData.append('image', image);
    console.log(data)
    // formData.append('fileName', file.name);
    formData.append('', data.username);
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
<Container>
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
          <Form.Control type="file" onChange={(e) => setImage(e.target.files[0])} />
        </Form.Group>

        <Button type="submit"> Upload </Button>
      </Form>
      </Container>

  );
}

export default CreatePost;