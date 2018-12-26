import db from '../../db/db.json';
const initialState = {
    recipes: db.recipes
};

const reducer = (state=initialState, action) => {
    return state;
};

export default reducer;