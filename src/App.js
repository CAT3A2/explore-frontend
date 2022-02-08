import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Container from '@mui/material/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useReducer, useEffect} from 'react'

import Navbar from './components/Navbar'
import Posts from './components/Posts';
import Followers from './components/Followers';
import Profile from './components/Profile';
import SignUp from './components/SignupForm'
import SignIn from './components/SignIn'
import About from './components/About'
import Post from './components/Post'
import CreatePost from './components/CreatePost'
import stateReducer from './stateReducer';
import ExploreContext from './ExploreContext';
import initialState from './initialState'

import './style/app.css'
import api from './api'

function App() {

  const [store, dispatch] = useReducer(stateReducer, initialState);

  useEffect(async () => {
    const res = await api.get('posts');
    // const data = await res.json();

    dispatch({
      type: 'setPosts',
      data: res.data
    });
  }, []);

  //   useEffect(async () => {

  //   // const data = await res.json();

  //   dispatch({
  //     type: 'setPosts',
  //     data:   [
  //       {
  //         id: 1,
  //         title: 'Post 1',
  //         description: 'This is the first post in the array',
  //         tags: ['summer', 'holiday', 'school'],
  //         likes: 6,
  //         user: {
  //           username: 'Shane',
  //           id: 45,
  //           avatar:
  //           'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  //         },
  //         image: "https://images.unsplash.com/photo-1512552288940-3a300922a275?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
  //       },
  //       {
  //         id: 2,
  //         title: 'Post 2',
  //         description: 'This is the worst post in the array',
  //         tags: ['summer', 'holiday', 'jungle'],
  //         likes: 10,
  //         user: {
  //           avatar:
  //           'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  //           id: 20,
  //           username: "Avely"
  //         },
  //         image: "https://images.unsplash.com/photo-1602002418816-5c0aeef426aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
  //       },
  //     ]
  //   });
  // }, []);



  return (
    <ExploreContext.Provider value={{ store, dispatch }}>
      <Container maxWidth="lg">
        <BrowserRouter>
          <Navbar />
          <Routes>

            <Route path="/" element={<Posts />} />
            <Route path="/followers" element={ <Followers /> } />
            <Route path="/profile/:id" element={ <Profile /> } />
            <Route path="/signup" element={ <SignUp /> } />
            <Route path="/signin" element={ <SignIn /> } />
            <Route path="/about" element={ <About /> } />
            <Route path="/post/:post_id" element={ <Post /> } />
            <Route path="/liked" element={ <Posts /> } />
            <Route path="post/new" element={ <CreatePost />} />

            <Route path="*" element={<h4>Page Not Found</h4>} />
          </Routes>
        </BrowserRouter>
      </Container>
    </ExploreContext.Provider>
  );
}

export default App;
