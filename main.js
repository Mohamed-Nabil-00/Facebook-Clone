// Validation Of Login Page

let userName = document.getElementById("username");
let passWord = document.getElementById("password");
let toHomePage = document.querySelector(".to-home");

document.forms[0].onsubmit = function (event) {
  event.preventDefault();
  if (userName.value === "" || passWord.value === "") {
    console.log("Error");
  } else {
    toHomePage.click();
  }
};