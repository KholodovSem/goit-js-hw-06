const inputRef = document.querySelector("#font-size-control");
console.log(inputRef);
const spanRef = document.querySelector("#text");
console.log(spanRef);

inputRef.addEventListener("input", () => {
  spanRef.style.fontSize = inputRef.value + "px";
  console.log(inputRef.value);
});

// spanRef.style.fontSize = "50";
