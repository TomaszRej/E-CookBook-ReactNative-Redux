import db from '../../db/db.json';
const initialState = {
    userName: '',
    users: db.users,
    validUserData: false
    // selectedPlace: null
};

const reducer = (state=initialState, action) => {
    switch(action.type){
        case 'SET_CURRENT_USER_NAME':
            return{
                ...state,
                userName: action.name
            };
        case 'SET_VALID_USER_DATA':
            return{
                ...state,
                validUserData: action.valid
            };
        default:
            return state;
    }

};

export default reducer;
