import React from 'react';
import { useParams } from 'react-router-dom';

import { updateRecipe } from '../service/fetch';
import RecipeForm from './RecipeForm';

const EditRecipe = ({ setIsError }) => {
  const { id } = useParams();

  const updateExistingRecipe = async (updatedRecipe) => {
    updateRecipe(id, updatedRecipe)
      .then((response) => response.json())
      .catch((err) => {
        console.log(err.message)
        setIsError(true)
      })
  }

  return (
    <div>
      <RecipeForm handleOnSubmit={updateExistingRecipe} />
    </div>
  )
}

export default EditRecipe;