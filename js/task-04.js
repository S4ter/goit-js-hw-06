let counterValue = 0;


const finalValue = document.querySelector('#value')
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');


decrementBtn.addEventListener("click", () => {
    counterValue --;
    finalValue.textContent = counterValue;
  });

  incrementBtn.addEventListener("click", () => {
    counterValue ++;
    finalValue.textContent = counterValue;
  });
