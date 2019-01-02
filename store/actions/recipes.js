import {SHOW_RECIPE_DETAILS, ADD_RECIPE, DELETE_RECIPE, UPDATE_LIKES} from './actionTypes';

export const showRecipeDetails = (id) =>{
  return{
      type: SHOW_RECIPE_DETAILS,
      id: id
  }
};

export const addRecipe = (recipe) =>{
  return{
      type: ADD_RECIPE,
      recipe: recipe
  }
};

export const deleteRecipe = (id) =>{
    return{
        type: DELETE_RECIPE,
        id: id
    }
};

export const updateLikes = (id) =>{
    return{
        type: UPDATE_LIKES,
        id: id
    }
};
