// we do not need to worry about the first parameter, react will get it
export default function (currentState, action) {

    switch(action.type) {
        case 'setCurrentUser' : 
            return {

            }

        case 'setToken' :
            return {

            }

        case 'setUser' :
            return {

            }
        case 'setUsers' : 
            return {

            }
        
        case 'setPosts' : 
            return {
                ...currentState,
                posts: action.data
            }

    }
}