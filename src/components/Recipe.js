import React from 'react';
import { useNavigate } from 'react-router-dom';

import { deleteRecipe } from '../service/fetch';

const Recipe = ({ id, title, ingredients, instructions }) => {
  const navigate = useNavigate();

  const deleteItem = async (id) => {
    deleteRecipe(id)
    navigate("/");
  }

  return (
    <div className='recipe'>
      <div key={id}>
        <h2 className='recipe-title'>{title}</h2>
        <div>
          <div className='recipe-ingredients'>
            {ingredients.map((ingredient, index) => (
              <div key={index}>
                <table>
                  <tbody>
                    <tr>
                      <td>{ingredient.quantity}</td>
                      <td>{ingredient.name}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        </div>
        <div className='recipe-instructions'>
          <p><strong>Method:</strong></p>
          <p>{instructions}</p></div>
      </div>
      <div className='recipe-buttons'>
        <button className="edit-button" onClick={() => navigate(`/update/${id}`)}>
          Edit
        </button>
        <button className="delete-button" onClick={() => deleteItem(id)}>
          Delete
        </button>
      </div>
    </div >
  );
};

export default Recipe;