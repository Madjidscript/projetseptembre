let contribution = JSON.parse(localStorage.getItem("contribution"));
let paiement = JSON.parse(localStorage.getItem("paiement"));

let tbpaiement = [];
let tpcontribu = [];
let contb;
let contp;
let soletotale;

console.log(contribution);

function totaleContribution() {
  contribution.forEach((element) => {
    tpcontribu.push(element.montants);

    contb = tpcontribu.reduce((a, b) => a - b, 0);

    console.log(typeof contb);
  });
}
totaleContribution();

function totalepaiement() {
  paiement.forEach((element) => {
    tbpaiement.push(element.montants);

    contp = tbpaiement.reduce((a, b) => a - b, 0);

    console.log(contp);
  });
}
totalepaiement();

function solde() {
  soletotale = -contb + contp;
  console.log(soletotale);
}
solde();
document.querySelector(" #soldes").innerHTML = soletotale;
