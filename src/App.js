import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Container from '@mui/material/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useReducer, useEffect, useContext } from 'react';

import Navbar from './components/Navbar';
import Posts from './components/Posts';
import Followers from './components/Followers';
import Profile from './components/Profile';
import SignUp from './components/SignupForm';
import SignIn from './components/SignIn';
import About from './components/About';
import Post from './components/Post';
import CreatePost from './components/CreatePost';
import stateReducer from './stateReducer';
import ExploreContext from './ExploreContext';
import initialState from './initialState';
import axios from 'axios';
import { useCookies } from 'react-cookie';

import './style/app.css';
import api from './api';

function App() {
  const [store, dispatch] = useReducer(stateReducer, initialState);
  const [cookies, setCookie] = useCookies(['tokenCookie']);

  useEffect(() => {
    async function fetchData() {
      const res = await api.get('posts/all');
      dispatch({
        type: 'setPosts',
        data: res.data,
      });
    }
    fetchData();
  }, []);


  useEffect(() => {
    if (cookies.tokenCookie !== undefined && cookies.tokenCookie !== '') {
      const url = 'http://localhost:5500/auth/me';
      const config = {
        headers: {
          Authorization: `Bearer ${cookies.tokenCookie}`,
        },
      };

      axios.get(url, config)
        .then(function (response) {
          console.log(response)
          dispatch({
            // store the user information that was returned with the response in global store
            type: 'setCurrentUser',
            data: response.data,
          });
          console.log(response.data)

          // dispatch({
          //   // store the access token that was returned with the response in global store
          //   type: 'setAuthToken',
          //   data: `${cookies.tokenCookie}`,
          // });
      })

    }
  }, []);


  const { posts } = store;

  return (
    <ExploreContext.Provider value={{ store, dispatch }}>
      <Container maxWidth="lg">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Posts posts={posts} />} />
            <Route path="/followers" element={<Followers />} />
            <Route path="/profile/:id" element={<Profile />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/about" element={<About />} />
            <Route path="/post/:post_id" element={<Post />} />
            <Route path="/liked" element={<Posts />} />
            <Route path="post/new" element={<CreatePost />} />

            <Route path="*" element={<h4>Page Not Found</h4>} />
          </Routes>
        </BrowserRouter>
      </Container>
    </ExploreContext.Provider>
  );
}

export default App;
