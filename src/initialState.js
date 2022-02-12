const initialState = {
  currentUser: null,
  // authToken: null,
  posts: [],
  searchedPosts: [],
  users: [],
  user: {
    posts: [],
    id: null,
    username: '',
    followers: [],
    followees: [],
  },
};

export default initialState;
