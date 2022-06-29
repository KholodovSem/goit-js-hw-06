const submitForm = document.querySelector(".login-form");
const usersDataBtn = document.querySelector("[data-usersData]");
const usersData = [];

submitForm.addEventListener("submit", offDefault);

usersDataBtn.addEventListener("click", onGetUserData);
usersDataBtn.style.marginTop = "20px";
usersDataBtn.style.width = "320px";

function offDefault(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  console.log(email.value);
  console.log(password.value);

  if (email.value === "" || password.value === "") {
    return alert("Не все поля заполнены!");
  }

  usersData.push({ email: email.value, password: password.value });
  submitForm.reset();
}

function onGetUserData() {
  console.log(usersData);
}
