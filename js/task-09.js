const changeColorBtn = document.querySelector(".change-color");
console.log(changeColorBtn);

const currentColorRef = document.querySelector(".color");
console.log(currentColorRef);

changeColorBtn.addEventListener("click", changeColorAndGetResult);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeColorAndGetResult() {
  document.body.style.backgroundColor = getRandomHexColor();
  currentColorRef.textContent = document.body.style.backgroundColor;
}
