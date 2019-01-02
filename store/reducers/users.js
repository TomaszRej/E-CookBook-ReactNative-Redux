import db from '../../db/db.json';

const initialState = {
    userName: '',
    users: db.users,
    validUserData: false
};

const reducer = (state = initialState, action) => {
        switch (action.type) {
            case 'SET_CURRENT_USER_NAME':
                return {
                    ...state,
                    userName: action.name
                };
            case 'SET_VALID_USER_DATA':
                return {
                    ...state,
                    validUserData: action.valid
                };
            case 'ADD_TO_FAVORITES':
                return {
                    ...state,
                    users: state.users.map((user) => {
                        if (action.name === user.name) {
                            return {
                                ...user,
                                favorites: user.favorites.concat(action.recipe)
                            }
                        }
                        return user;

                    })
                };
            case 'DELETE_FROM_FAVORITES':
                return{
                    ...state,
                    users: state.users.map((user) => {
                        if (action.name === user.name) {
                            return {
                                ...user,
                                favorites: [
                                    ...user.favorites.slice(0,action.id),
                                    ...user.favorites.slice(action.id+1)
                                    ]
                            }
                        }
                        return user;
                    })
                };
            default:
                return state;
        }

    }
;

export default reducer;
