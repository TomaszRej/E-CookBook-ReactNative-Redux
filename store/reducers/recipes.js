import db from '../../db/db.json';
const initialState = {
    recipes: db.recipes,
    selectedRecipe: {}
};

const reducer = (state=initialState, action) => {
    switch(action.type){
        case 'SHOW_RECIPE_DETAILS':
            console.log('recipe details dispatch', action.id);
            state.recipes.filter((el) => {
                if (el.id === action.id) {

                }
                console.log(el.id);
            });
            return{
                ...state,
                selectedRecipe: state.recipes.find((el)=>el.id === action.id)

            };
        case 'ADD_RECIPE':
            return{
                ...state,
                recipes: state.recipes.concat(action.recipe)
            };
        case 'UPDATE_LIKES':
            console.log(state.recipes,'state REDUX');

            return{
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