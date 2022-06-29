const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulEl = document.querySelector("#ingredients");

const liArrayEl = ingredients.map((el) => {
  const liEl = document.createElement("li");
  liEl.textContent = el;
  liEl.classList.add("item");

  return liEl;
});

ulEl.prepend(...liArrayEl);
console.log(ulEl);

// ----------------------------------------------------------------------------------------------------------------

// const ulEl = document.querySelector("#ingredients");
// console.log(ulEl);
// const liArrayEl = [];

// ingredients.forEach((ingredient) =>
//   liArrayEl.push(document.createElement("li"))
// );
// console.log(liArrayEl);

// liArrayEl.forEach((li) => {
//   li.textContent = [ingredients[liArrayEl.indexOf(li)]];
//   li.classList.add("item");
// });
// console.log(liArrayEl);

// ulEl.prepend(...liArrayEl);
// console.log(ulEl);

// ----------------------------------------------------------------------------------------------------------------
