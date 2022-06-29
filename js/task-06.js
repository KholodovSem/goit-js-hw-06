const inputRef = document.querySelector("#validation-input");
const inputRefValidation = inputRef.getAttribute("data-length");

inputRef.addEventListener("blur", () => {
  if (inputRef.value.length === Number(inputRefValidation)) {
    inputRef.classList.add("valid");
  } else {
    inputRef.classList.add("invalid");
  }
});

console.log(inputRef);
