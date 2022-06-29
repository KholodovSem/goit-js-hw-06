const ulCategoriesEl = document.querySelector("#categories");
const firstElOfCategories = ulCategoriesEl.firstElementChild;
const secondElOfCategories = firstElOfCategories.nextElementSibling;
const thirdElOfCategories = secondElOfCategories.nextElementSibling;

console.log(secondElOfCategories);
console.log(
  "Number of categories:",
  ulCategoriesEl.querySelectorAll(".item").length
);
console.log("Category:", ulCategoriesEl.querySelector("h2").textContent);
console.log("Elements:", firstElOfCategories.querySelectorAll("li").length);
console.log("Category:", secondElOfCategories.querySelector("h2").textContent);
console.log("Elements:", secondElOfCategories.querySelectorAll("li").length);
console.log("Category:", thirdElOfCategories.querySelector("h2").textContent);
console.log("Elements:", thirdElOfCategories.querySelectorAll("li").length);
