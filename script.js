

const scriptURL =
"https://script.google.com/macros/s/AKfycbybAMhsC-FjHRc2ROgx5PL6pN2Qdct1s1I6PjeKI2uux0XIt6jaL0M5rSohL_lFLX1kMg/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
e.preventDefault();
fetch(scriptURL, { method: "POST", body: new FormData(form) })
  .then((response) => {
    msg.innerHTML = "Message sent sucessfully";
    setTimeout(function () {
      msg.innerHTML = "";
    }, 5000);
    form.reset();
  })
  .catch((error) => console.error("Error!", error.message));
});


var loader = document.getElementById("preloader");
window.addEventListener("load", function () {
    loader.style.display = "none"
})



