import {SET_CURRENT_USER_NAME, } from './actionTypes';

export const setCurrentUserName = (name) => {
    return {
        type: SET_CURRENT_USER_NAME,
        name: name
    }
};

//
//
// case 'SET_VALID_USER_DATA':
// return {
//     ...state,
//     validUserData: action.valid
// };
// case 'ADD_TO_FAVORITES':
// console.log(state.userName, 'stateuserName');
// return {
//     ...state,
//     users: state.users.map((user) => {
//         if (action.name === user.name) {
//             return {
//                 ...user,
//                 favorites: user.favorites.concat(action.recipe)
//             }
//         }
//         return user;
//
//     })
// };
// case 'DELETE_FROM_FAVORITES':