import './styles/App.css';
import Header from './components/Header.js';
import RecipeList from './components/RecipeList';
import AddRecipe from './components/AddRecipe';
import EditRecipe from './components/EditRecipe';
import Alert from './components/Alert';
import { getRecipes, postRecipe } from './service/fetch';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState, Fragment } from 'react';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [isError, setIsError] = useState(false)
  const standardErrorMessage = 'Something went wrong. Please try again';

  const fetchRecipes = async () => {
    getRecipes()
      .then((data) => setRecipes(data))
      .catch((err) => {
        console.log(err.message);
        setIsError(true)
      })
  }

  useEffect(() => {
    fetchRecipes();
  }, [recipes]);

  const createNewRecipe = async (newRecipe) => {
    postRecipe(newRecipe)
      .then((response) => response.json())
      .catch((err) => {
        console.log(err.message)
        setIsError(true)
      })
  }

  return (
    < div className="App" >
      <BrowserRouter>
        <div>
          <div className="main-content">
            <Routes>
              <Route exact path="/" element={
                <Fragment>
                  <Header />
                  {isError ?
                    <Alert alertMessage={standardErrorMessage} setIsError={setIsError} /> :
                    <div />}
                  {recipes.length > 0 ?
                    <RecipeList recipes={recipes} /> :
                    <p className="message">No recipes yet. Please add some!</p>
                  }
                </Fragment>
              }>
              </Route>
              <Route exact path="/create" element={
                <Fragment>
                  <Header />
                  <AddRecipe handleOnSubmit={createNewRecipe} />
                </Fragment>
              }>
              </Route>
              <Route exact path={"/update/:id"} element={
                <Fragment>
                  <Header />
                  <EditRecipe setisError={setIsError} />
                </Fragment>
              }>
              </Route>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </ div>
  );
}

export default App;