const counter = {
  value: 0,
  step: 1,
  minusValue() {
    this.value -= this.step;
  },
  plusValue() {
    this.value += this.step;
  },
};

const counterValueRef = document.querySelector("#value");
const minusBtnRef = document.querySelector('[data-action="decrement"]');
const plusBtnRef = document.querySelector('[data-action="increment"]');

minusBtnRef.addEventListener("click", () => {
  counter.minusValue();
  counterValueRef.textContent = counter.value;
  console.log(counterValueRef.textContent);
});

plusBtnRef.addEventListener("click", () => {
  counter.plusValue();
  counterValueRef.textContent = counter.value;
  console.log(counterValueRef.textContent);
});
