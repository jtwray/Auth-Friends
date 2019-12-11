import {
    START,
    GET_FRIENDS_SUCCESS,
    ADD_FRIEND_SUCCESS,
    ADD_FRIEND_START,
    ERROR
} from '../actions'

const intitialState = {
    isLoading: false,
    isError: false,
    allfriends: [
        { name: 'Johnny', age: 35, id: 7, email: "johnnyappleseed@fujiGala.com" },
        { name: 'Jaxson', age: 47, id: 17, email: "jaxson@bhvs.org" }
    ]
};

const friendsReducer = (state = intitialState, action) => {
    switch (action.type) {
        case 'START': {
            return { ...state, isLoading: true, }
        }
        case 'ADD_FRIENDS_START': {
            return { ...state, isLoading: true, }
        }
        case 'GET_FRIENDS_SUCCESS': {
            return { ...state, isLoading: false, allfriends: [...state.allfriends, action.payload] }
        }
        case 'ADD_FRIEND_SUCCESS': {
            console.log('addfriend', action);
            return { ...state, isLoading: false, allfriends: [...state.allfriends, action.payload] }
        }
        case 'LOGIN_SUCCESS': {
            localStorage.setItem(`token`, action.payload);

            return { ...state, isLoading: false, }
        }
        case 'ERROR':
            return {
                ...state,
                isError: true,
                error: action.payload
            }
        default:
            return { ...state }
    }
}

export default friendsReducer