import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Container from '@mui/material/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useReducer, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import stateReducer from './stateReducer';
import ExploreContext from './ExploreContext';
import initialState from './initialState';

import Navbar from './components/Navbar';
import Posts from './components/Posts';
import Followers from './components/Followers';
import Profile from './components/Profile';
import SignUp from './components/SignupForm';
import SignIn from './components/SignIn';
import About from './components/About';
import Post from './components/Post';
import CreatePost from './components/CreatePost';
import UpdatePost from './components/UpdatePost';

import './style/app.css';
import api from './api';

function App() {
  const [store, dispatch] = useReducer(stateReducer, initialState);
  const [cookies, setCookies] = useCookies(['tokenCookie']);

  // get all the posts for showing on home page
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

  // when global state is cleared out and token in cookies is still present,
  // get the logged in user from server and save them in currentUser
  useEffect(() => {
    async function fetchUser() {
      if (cookies.tokenCookie !== undefined && cookies.tokenCookie !== '') {
        // const url = 'http://localhost:5500/auth/me';
        const config = {
          headers: {
            Authorization: `Bearer ${cookies.tokenCookie}`,
          },
        };

        api.get('auth/me', config).then(function (response) {
          dispatch({
            // store the user information that was returned with the response in global store
            type: 'setCurrentUser',
            data: response.data,
          });
        });
      }
    }
    fetchUser();
  }, []);

  const { posts, searchedPosts } = store;

  return (
    <ExploreContext.Provider value={{ store, dispatch }}>
      <Container maxWidth="lg">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Posts posts={posts} />} />
            <Route path="/search" element={<Posts posts={searchedPosts} />} />
            <Route path="/followers" element={<Followers />} />
            <Route path="/profile/:id" element={<Profile />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/about" element={<About />} />
            <Route path="/post/:post_id" element={<Post />} />
            <Route path="/liked" element={<Posts />} />
            <Route path="post/new" element={<CreatePost />} />
            <Route path="post/:post_id/update" element={<UpdatePost />} />

            <Route path="*" element={<h4>Page Not Found</h4>} />
          </Routes>
        </BrowserRouter>
      </Container>
    </ExploreContext.Provider>
  );
}

export default App;
