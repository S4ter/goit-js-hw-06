function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const boxes = document.querySelector('#boxes');
const input = document.querySelector('input');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');

const createDiv = () => {
  let startingSize = 30;
  for (let i = 0; i < input.value; i++) {
  const randomColor = getRandomHexColor()
  const newDiv = document.createElement('div')
  boxes.prepend(newDiv)
  newDiv.id = i + 1
  newDiv.style.backgroundColor = randomColor;
  newDiv.style.width = `${startingSize}px`
  newDiv.style.height = `${startingSize}px`
startingSize += 10
}}
const destroyDiv = () => {
  boxes.remove();
}
createBtn.addEventListener('click', createDiv);
destroyBtn.addEventListener('click', destroyDiv);