const inputRef = document.querySelector("#name-input");
console.log(inputRef);
const spanRef = document.querySelector("#name-output");
console.log(spanRef);

inputRef.addEventListener("input", () => {
  spanRef.textContent = inputRef.value;
  if (spanRef.textContent === "") {
    spanRef.textContent = "Anonymous";
  }
});
