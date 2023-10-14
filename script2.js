let disBtn = document.querySelector(".disBtn");
let getEmail = document.querySelector(".my-mail");
let urlParams = new URLSearchParams(window.location.search);
let myEmail = urlParams.get("email");
window.addEventListener("load", () => {
  getEmail.innerHTML = `${myEmail}`;
});
disBtn.addEventListener("click", () => {
  history.back();
});
