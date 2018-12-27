
const initialState = {
    userName: 'Tom-z- ReduxState',
    users: [],
    // selectedPlace: null
};

const reducer = (state=initialState, action) => {
    switch(action.type){
        case 'SET_CURRENT_USER_NAME':
            return{
                ...state,
                userName: action.name
            };
        default:
            return state;
    }

};

export default reducer;
