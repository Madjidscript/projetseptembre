let contribution = JSON.parse(localStorage.getItem("contribution")) || [];
let paiement = JSON.parse(localStorage.getItem("paiement")) || [];

let tbpaiement = [];
let tpcontribu = [];
let contb;
let contp;
let contriTotale;
let paiementTotale;
let soletotale;
let soldes;
// let envoie = document.querySelector(".envoyer");
// console.log(envoie);

function totaleContribution() {
  contribution.forEach((element) => {
    contb = parseInt(element.montants);
    console.log(typeof contp);
    tpcontribu.push(contb);
  });
  contriTotale = tpcontribu.reduce((a, b) => a + b, 0);
  console.log(contriTotale);
}

totaleContribution();

function totalepaiement() {
  paiement.forEach((iteration) => {
    contp = parseInt(iteration.montants);
    tbpaiement.push(contp);
  });
  paiementTotale = tbpaiement.reduce((a, b) => a + b, 0);
  console.log(paiementTotale);
}
totalepaiement();

function solde() {
  soletotale = contriTotale - paiementTotale;
  console.log(soletotale);
}
solde();
document.querySelector(" #soldes").innerHTML = soletotale;
