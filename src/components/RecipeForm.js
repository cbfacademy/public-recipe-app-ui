import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RecipeForm = ({ handleOnSubmit }) => {
  const [recipe, setRecipe] = useState({
    title: '',
    ingredients: [{
      name: '',
      quantity: ''
    }],
    instructions: ''
  });

  const [submitErrorMessage, setSubmitErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setSubmitErrorMessage('');
    const { name, value } = event.target;

    setRecipe((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleIngredientInputChange = (event) => {
    setSubmitErrorMessage('');
    const { name, value } = event.target;
    let newArray = recipe.ingredients;

    newArray[0] = { ...newArray[0], [name]: value }

    setRecipe((prevState) => ({
      ...prevState,
      ingredients: newArray
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    let errorMessage = '';

    // expects nested object array for ingredients 
    const values = [recipe.title, recipe.ingredients.name, recipe.ingredients.quantity, recipe.instructions]
    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== '' && value !== '0';
    });

    if (allFieldsFilled) {
      handleOnSubmit(recipe)
      navigate("/");
    } else {
      errorMessage = 'Please fill out all the fields!';
      setSubmitErrorMessage(errorMessage)
    }
  }

  return (
    <div>
      <form className='form-container'>
        <div className='form'>
          {submitErrorMessage && <p className="error-message">{submitErrorMessage}</p>}

          <label>Name:</label>
          <input
            className="form-control"
            type="text"
            name="title"
            value={recipe.title}
            placeholder="recipe name"
            onChange={handleInputChange}
          />
          <label>Ingredients:</label>
          <div className='form-ingredients'>
            <div>
              <input
                className="form-control ingredient-quantity"
                type="text"
                name="quantity"
                placeholder="add quantity / weight"
                value={recipe.ingredients.name}
                onChange={handleIngredientInputChange}
              />
            </div>
            <div>
              <input
                className="form-control ingredient-name"
                type="text"
                name="name"
                placeholder="ingredient name"
                value={recipe.ingredients.name}
                onChange={handleIngredientInputChange}
              />
            </div>
          </div>
          <label>Method:</label>
          <textarea
            className="form-control"
            type="text"
            name="instructions"
            value={recipe.instructions}
            placeholder="cooking instructions"
            onChange={handleInputChange}
            rows="5"
            cols="50"
          />
        </div>
      </form>
      <button variant="primary" type="submit" className="submit-button" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  )

}

export default RecipeForm;