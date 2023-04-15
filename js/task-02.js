const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsList = document.querySelector('#ingredients');

ingredients.forEach((el) => {
  const newIngredientsList = document.createElement('li');
  newIngredientsList.textContent = `${el}`;
  newIngredientsList.classList.add('item');
  ingredientsList.prepend(newIngredientsList);
})
