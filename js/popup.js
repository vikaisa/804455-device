var link = document.querySelector("button-feedback");
var popup = document.querySelector("modal-feedback");
var close = document.querySelector("modal-close");
var form = popup.querySelector("form");
var name = popup.querySelector("[name=name]");
var mail = popup.querySelector("[name=e-mail]");
var message = popup.querySelector("[name=message]");
var storage = name.localStorage.getItem ("name");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  name.focus();
});

 close.addEventListener("click", function (evt) {
   evt.preventDefault();
   popup.classList.remove("modal-show");
 });

form.addEventListener("submit", function (evt) {
   if (!login.value || !password.value) {
     evt.preventDefault();
     console.log("Нужно ввести логин и пароль");
 }
 });
