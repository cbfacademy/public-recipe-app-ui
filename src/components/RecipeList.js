import React from 'react';

import Recipe from './Recipe';

const RecipeList = ({ recipes, setAlert }) => {
  return (
    <div className="recipe-list">
      {recipes.map((recipe, index) => (
        <div key={index}>
          <Recipe
            id={recipe.id}
            title={recipe.title}
            ingredients={recipe.ingredients}
            instructions={recipe.instructions}
          />
        </div>
      ))}
    </div>
  );
};

export default RecipeList;