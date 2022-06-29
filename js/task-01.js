const NumberOfCategories = document.querySelectorAll(".item").length;
console.log("Number of categories: ", NumberOfCategories);
console.log("");

const listItems = document.querySelectorAll(".item");
//console.log(listItemsEl);

const showlistItems = listItems.forEach((element) => {
  console.log(`Category: ${element.querySelector("h2").textContent}`);
  console.log(`Elements: ${element.querySelectorAll("li").length}`);
  console.log("");
});
