const BASE_URL = "http://localhost:8080/";
const path = "recipes";

export const getRecipes = async () => {
  return await fetch(`${BASE_URL}${path}/`).then((response) => response.json())
}

export const postRecipe = async (newRecipe) => {
  return await fetch(`${BASE_URL}${path}/create`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      title: newRecipe.title,
      ingredients: newRecipe.ingredients,
      instructions: newRecipe.instructions
    })
  })
}

export const deleteRecipe = async (id) => {
  return await fetch(`${BASE_URL}${path}/delete/${id}`, {
    method: 'DELETE'
  })
}

export const updateRecipe = async (id, updatedRecipe) => {
  const requestOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      title: updatedRecipe.title,
      ingredients: updatedRecipe.ingredients,
      instructions: updatedRecipe.instructions
    })
  };

  return await fetch(`${BASE_URL}${path}/update/${id}`, requestOptions)
}