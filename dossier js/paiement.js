let cliquer1 = document.querySelector(".cliquer1");
let cliquer2 = document.querySelector(".cliquer2");
let cliquer3 = document.querySelector(".cliquer3");

const pp1 = document.querySelector(".pp1");
const pp2 = document.querySelector(".pp2");
const pp3 = document.querySelector(".pp3");
const text = document.querySelector(".text");

let form = document.querySelector("form");
let message = document.querySelector(".message");

cliquer1.addEventListener("click", () => {
  pp1.style.display = "block";
  pp1.style.marginTop = "20px";
  pp2.style.display = "block";
  pp3.style.display = "block";
  text.style.display = "none";
});
cliquer2.addEventListener("click", () => {
  pp1.style.display = "block";
  pp1.style.marginTop = "20px";
  pp2.style.display = "block";
  pp3.style.display = "block";
  text.style.display = "none";
});
cliquer3.addEventListener("click", () => {
  pp1.style.display = "block";
  pp1.style.marginTop = "20px";
  pp2.style.display = "block";
  pp3.style.display = "block";
  text.style.display = "none";
});
pp3.addEventListener("click", () => {
  message.style.display = "block";
});
form.addEventListener("click", (e) => {
  e.preventDefault();
});
