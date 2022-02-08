import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Container from '@mui/material/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useReducer, useEffect } from 'react';

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

import './style/app.css';
import api from './api';

function App() {
  const [store, dispatch] = useReducer(stateReducer, initialState);

  useEffect(async () => {
    const res = await api.get('posts');
    // const data = await res.json();

    dispatch({
      type: 'setPosts',
      data: res.data,
    });
  }, []);

  return (
    <ExploreContext.Provider value={{ store, dispatch }}>
      <Container maxWidth="lg">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Posts />} />
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
