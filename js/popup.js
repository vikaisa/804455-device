var link = document.querySelector(".button-feedback");
var popup = document.querySelector(".modal-feedback");
var close = popup.querySelector(".modal-close");
var form = popup.querySelector("form");
var fullname = popup.querySelector("[name=fullname]");
var mail = popup.querySelector("[name=e-mail]");
var message = popup.querySelector("[name=message]");
var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("fullname");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");

  if (storage) {
    fullname.value = storage;
    mail.focus();
  } else {
    fullname.focus();
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove('modal-error');
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("modal-show")) {
      evt.preventDefault();
      popup.classList.remove("modal-show");
      popup.classList.remove('modal-error');
    }
  }
});

form.addEventListener("submit", function (evt) {
  if (!fullname.value || !mail.value || !message.value) {
    evt.preventDefault();
    popup.classList.add('modal-error');
  } else {
    if (isStorageSupport) {
      localStorage.setItem("fullname", fullname.value);
      localStorage.setItem("mail", mail.value);
    }
  }
});
