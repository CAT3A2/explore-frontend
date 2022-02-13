import { useState, useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { useNavigate, useParams } from 'react-router-dom';
import { useCookies } from 'react-cookie';

import api from './../api';
import ExploreContext from '../ExploreContext';

function UpdatePost() {
  const [cookies, setCookies] = useCookies(['tokenCookie']);
  //   const [file, setFile] = useState();
  const [post, setPost] = useState();
  const [preloadedValues, setPreloadedValues] = useState();
  const navigate = useNavigate();
  const params = useParams();

  const {
    store: { posts },
  } = useContext(ExploreContext);

  //   const post = posts.find((post) => post.post_id == params.post_id);
  useEffect(() => {
    setPost((post) => post.post_id == params.post_id);
    console.log(post)
    setPreloadedValues({
        title: `${post.title}`,
        destination: 'helllo',
        descriprion: 'bye',
      });
  }, []);


  //   //   get the post being edited from the backend and use it for preloaded values
  //   useEffect(() => {
  //     // async function fetchData() {
  //     //   const res = await api.get(`posts/${params.post_id}`);
  //     api.get(`posts/${params.post_id}`).then((res) => {
  //       setPost(res.data);
  //       setPreloadedValues({
  //         title: `${res.data.title}` ,
  //         destination: 'helllo',
  //         descriprion: 'bye',
  //       });
  //     });
  //     // }
  //     // fetchData();
  //   }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: preloadedValues });

  function onSubmit(data) {
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('description', data.description);
    formData.append('destination', data.destination);

    const config = {
      headers: {
        'content-type': 'multipart/form-data',
        Authorization: `Bearer ${cookies.tokenCookie}`,
      },
    };
    api
      .post(`profile/${post.user_id}/posts/${post.id}`, formData, config)
      .then((response) => {
        console.log(response);
      });
    navigate(`/post/${params.post_id}`);
  }

  return post ? (
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
              type="textarea"
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

          {/* <Form.Group>
            <Form.Label> Image </Form.Label>
            <Form.Control
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </Form.Group> */}

          <Button type="submit"> Upload </Button>
        </Form>
      </div>
    </Container>
  ) : (
    <p></p>
  );
}

export default UpdatePost;
