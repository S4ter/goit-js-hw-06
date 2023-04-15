/* eslint-disable no-multiple-empty-lines */
/* eslint-disable linebreak-style */
/* eslint-disable no-trailing-spaces */
const findItems = document.querySelectorAll('.item');
const countItems = findItems.length;
console.log(`Number of categories: ${countItems}`); 

findItems.forEach((el) => {
  const findHeader = el.querySelector('h2').innerText;
  const findElements = el.querySelectorAll('li').length;
  console.log(`Category: ${findHeader}`);
  console.log(`Elements: ${findElements}`);
});
