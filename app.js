let nameInput = document.getElementById("nameInput");

let SignIN = document.getElementById("SignInButton");

let SignUp = document.getElementById("SignUpButton");

SignIN.addEventListener("click", () => {
  if (nameInput) {
    nameInput.parentNode.removeChild(nameInput);
  }
});
