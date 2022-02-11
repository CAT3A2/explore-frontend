import { useState, useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { useNavigate, useParams } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import api from './../api'

import ExploreContext from '../ExploreContext';

function UpdatePost() {
  const [cookies] = useCookies(['tokenCookie']);
  const [file, setFile] = useState();
  const [post, setPost] = useState();
  const navigate = useNavigate();
  const params = useParams();

  const {
    store: { currentUser},
  } = useContext(ExploreContext);

  useEffect(() => {
    async function fetchData() {
      const res = await api.get(`posts/${params.post_id}`);

      setPost(res.data);
    }
    fetchData();
  }, []);

  const preloadedValues = {
      title: `${post.title}`,
      description: `${post.description}`,
      destination: `${post.destination}`,
      tags: `${post.tags}`
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({defaultValues: preloadedValues});

  function onSubmit(data) {
    const url = `http://localhost:5500/profile/${currentUser.user_id}/posts`;
    const formData = new FormData();
    // split tags from string into an array of strings
    const tagArray = data.tags.split(/[\s,]+/);
    formData.append('image_url', file);
    formData.append('title', data.title);
    formData.append('description', data.description);
    formData.append('destination', data.destination);
    formData.append('tags', tagArray);
    console.log(cookies.tokenCookie);
    console.log(currentUser)

    const config = {
      headers: {
        'content-type': 'multipart/form-data',
        'Authorization': `Bearer ${cookies.tokenCookie}`,
      },
    };
    axios.post(url, formData, config).then((response) => {
      console.log(response)
    });
    navigate(`/post/${params.post_id}`);
  }

  return (
    <Container>
      <div className="formCard">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <h1> Edit Post </h1>
          <Form.Group className="mb-3">
            <Form.Label> Title </Form.Label>
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
            <Form.Label> Description </Form.Label>
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
            <Form.Label> Destination </Form.Label>
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
            {/* <Form.Label> Tags </Form.Label> */}
            <Form.Control
              type="hidden"
              id="tags"
              name="tags"
              placeholder="Tags"
              // validation
              {...register('tags', { required: true })}
            />
            {errors.tags && <p></p>}
          </Form.Group>

          <Form.Group>
            <Form.Label> Image </Form.Label>
            <Form.Control
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </Form.Group>

          <Button type="submit"> Upload </Button>
        </Form>
      </div>
    </Container>
  );
}

export default UpdatePost;