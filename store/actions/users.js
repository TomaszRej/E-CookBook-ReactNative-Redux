import {SET_CURRENT_USER_NAME, SET_VALID_USER_DATA,ADD_TO_FAVORITES,DELETE_FROM_FAVORITES} from './actionTypes';

export const setCurrentUserName = (name) => {
    return {
        type: SET_CURRENT_USER_NAME,
        name: name
    }
};
export const setValidUserData = (valid) => {
    return {
        type: SET_VALID_USER_DATA,
        valid: valid
    }
};

export const addToFavorites = (recipe,name) => {
    return{
        type: ADD_TO_FAVORITES,
        recipe: recipe,
        name: name
    }
};


export const deleteFromFavorites = (id,name) => {
    return{
        type: DELETE_FROM_FAVORITES,
        id: id,
        name: name
    }
};