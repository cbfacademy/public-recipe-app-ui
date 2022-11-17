import React from 'react';
import RecipeForm from './RecipeForm';

const AddRecipe = ({ handleOnSubmit }) => {
  return (
    <div>
      <RecipeForm handleOnSubmit={handleOnSubmit} />
    </div>
  )
}

export default AddRecipe;