import db from '../../db/db.json';
const initialState = {
    recipes: db.recipes,
    selectedRecipe: {}
};

const reducer = (state=initialState, action) => {
    switch(action.type){
        case 'SHOW_RECIPE_DETAILS':
            return{
                ...state,
                selectedRecipe: state.recipes.find((el)=> el.id === action.id)

            };
        case 'ADD_RECIPE':
            return{
                ...state,
                recipes: state.recipes.concat(action.recipe)
            };
        case 'DELETE_RECIPE':
            return{
                ...state,
                recipes: state.recipes.filter((el) => el.id !== action.id)
            };

        case 'UPDATE_LIKES':
            return{
                ...state,

                recipes: state.recipes.map((item) => {
                        if(item.id === action.id){
                            return {
                                ...item,
                                likes: item.likes +1
                            }
                        }
                        return item;
                    })
            };

        default:
            return state;
    }

};

export default reducer;