let cliquer1 = document.querySelector(".cliquer1");
let cliquer2 = document.querySelector(".cliquer2");
let cliquer3 = document.querySelector(".cliquer3");
let contacts = document.querySelector("#contacts");
let montant = document.querySelector("#montant");
let text = document.querySelector(".text");
let envoyer = document.querySelector(".envoyer");

cliquer1.addEventListener("click", (e) => {
  e.preventDefault();
  montant.style.display = "block";
  contacts.style.display = "block";
  envoyer.style.display = "block";
  text.style.display = "none";
});
cliquer2.addEventListener("click", (e) => {
  e.preventDefault();
  montant.style.display = "block";
  contacts.style.display = "block";
  envoyer.style.display = "block";
  text.style.display = "none";
});
cliquer3.addEventListener("click", (e) => {
  e.preventDefault();
  montant.style.display = "block";
  contacts.style.display = "block";
  envoyer.style.display = "block";
  text.style.display = "none";
});

function verifChamp() {
  let dates = document.querySelector("#date").value;
  let contact = document.querySelector("#contacts").value;
  let montants = document.querySelector("#montant").value;

  if (dates === "") {
    alert("entrer la date");
    return false;
  }
  if (contact === "") {
    alert("entrer la date");
    return false;
  }
  if (montants === "") {
    alert("entrer la date");
    return false;
  }
  return true;
}

// partie envoie des donner

function envoie() {
  let bdDonner = JSON.parse(localStorage.getItem("paiement")) || [];

  let dates = document.querySelector("#date").value;
  let contact = document.querySelector("#contacts").value;
  let montants = document.querySelector("#montant").value;

  let objetDonner = {
    dates: dates,
    contact: contact,
    montants: montants,
  };

  bdDonner.push(objetDonner);

  localStorage.setItem("paiement", JSON.stringify(bdDonner));
}

envoyer.addEventListener("click", (e) => {
  if (verifChamp() === true) {
    e.preventDefault();
    alert(
      "votre paiement a ete effectuer avec succés veuillez verifie votre tableau de bord"
    );
    envoie();
    window.location.href = "../corporate2/tableau-bord.html";
  }
});
