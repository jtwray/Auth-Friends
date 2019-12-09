// import {ACTIONS} from './actions'

const intitialState = {

    friends: [
        { name: 'Johnny', age: 35, id: 7, email: "johnnyappleseed@fujiGala.com" },
        { name: 'Jaxson', age: 47, id: 17, email: "jaxson@bhvs.org" }
    ]
};

export const friendsReducer = (state = intitialState, action) => {
    switch (action.type) {
        case 'ADD_FRIEND':
            console.log('add_friend', action);
            const newFriend = {
                name: action.payload
            }
            return {
                ...state,
                isLoading: false,
                friends: [...state.friends, newFriend]
            }
        default:
            return state;
    }
}