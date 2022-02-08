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

export default initialState