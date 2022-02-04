import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Container from '@mui/material/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useReducer} from 'react'

import Navbar from './components/Navbar'
import Posts from './components/Posts';
import Followers from './components/Followers';
import Profile from './components/Profile';
import SignUp from './components/SignupForm'
import SignIn from './components/SignIn'
import About from './components/About'
import Post from './components/Post'
import './style/app.css'
import stateReducer from './stateReducer';
import ExploreContext from './ExploreContext';

function App() {

  const initialState = {
    currentUser: null,
    authToken: null,
    posts: [],
    users: [],
    user: {
      posts: [],
      id: null,
      username: "",
      followers: [],
      followees: []
    }
  }

  const [store, dispatch] = useReducer(stateReducer, initialState);

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
            <Route path="/post/:id" element={ <Post /> } />
            <Route path="/liked" element={ <Posts /> } />

            <Route path="*" element={<h4>Page Not Found</h4>} />
          </Routes>
        </BrowserRouter>
      </Container>
    </ExploreContext.Provider>
  );
}

export default App;
