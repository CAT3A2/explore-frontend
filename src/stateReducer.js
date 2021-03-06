// we do not need to worry about the first parameter, react will get it
export default function stateReducer(currentState, action) {
  switch (action.type) {
    case 'setCurrentUser':
      return {
        ...currentState,
        currentUser: action.data,
      };

    // case 'setAuthToken' :
    //     return {
    //         ...currentState,
    //         authToken: action.data
    //     }

    case 'setPosts':
      return {
        ...currentState,
        posts: action.data,
      };

    case 'setSearchedPost':
      return {
        ...currentState,
        searchedPosts: action.data,
      };

    default:
  }
}
