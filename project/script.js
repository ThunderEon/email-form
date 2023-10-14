let subscribeForm = document.getElementById("get-email-address");
let emailInput = document.getElementById("email-in");
let emailFormat = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
let emailLable = document.querySelector(".label-span");

function index1Form() {
  subscribeForm.addEventListener("submit", (e) => {
    if (!emailInput.value || !emailFormat.test(emailInput.value)) {
      emailLable.classList.add("email-error");
      emailInput.classList.add("error");
      e.preventDefault();
      return false;
    } else {
      {
        emailLable.classList.remove("email-error");
        emailInput.classList.remove("error");
        return true;
      }
    }
  });
}
index1Form();
