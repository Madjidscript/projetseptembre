let userconnecter = JSON.parse(localStorage.getItem("sex1"));
let bdUser = JSON.parse(localStorage.getItem("userdonner"));
let envoieModif = document.querySelector(".envoyer");
console.log(bdUser);

let nom = document.querySelector("#non");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let numero = document.querySelector("#numero");

nom.value = userconnecter.nom;
email.value = userconnecter.email;
password.value = userconnecter.password;
numero.value = userconnecter.numero;

function verifchamps() {
  let nom = document.querySelector("#non").value;
  let email = document.querySelector("#email").value;
  let password = document.querySelector("#password").value;
  let numero = document.querySelector("#numero").value;

  if (nom === "") {
    alert("entrer votre nom");
    return false;
  }
  if (email === "") {
    alert("entrer votre email");
    return false;
  }
  if (password === "") {
    alert("entrer votre password");
    return false;
  }
  if (numero === "") {
    alert("entrer votre numero");
    return false;
  }
  return true;
}

function modif() {
  if (verifchamps() === true) {
    let nom = document.querySelector("#non").value;
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;
    let numero = document.querySelector("#numero").value;

    console.log(nom);
    bdUser.find((element) => {
      if (email === element.email) {
        element.nom = nom;
        console.log(nom);
        element.numero = numero;
        element.password = password;

        localStorage.setItem("userdonner", JSON.stringify(bdUser));
        localStorage.setItem("sex1", JSON.stringify(bdUser));

        console.log("donnée modifiée");
      }
    });
  }
}

envoieModif.addEventListener("click", (e) => {
  e.preventDefault();
  modif();
  window.location.href = "../tableau doc/tbprofil.html";
});
