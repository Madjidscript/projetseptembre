let bdDonner = JSON.parse(localStorage.getItem("contribution"));

console.log(bdDonner);

function afficheDataCont() {
  let html = "";
  bdDonner.forEach((element) => {
    html += `
    <tr>
      <td>${element.dates} </td>
      <td>${element.email} </td>
      <td>${element.contact} </td>
      <td>${element.montants}</td>
    </tr>`;
  });

  document.querySelector("#insert").innerHTML = html;
  console.log(html);
}

document.onload = afficheDataCont();

let messagePaiement = JSON.parse(localStorage.getItem("paiement"));

function afficheDataPaiement() {
  let date = "";
  messagePaiement.forEach((element) => {
    date += ` <p>${element.dates} </p>
    
    `;
  });

  document.querySelector(".date").innerHTML = date;
}

document.onload = afficheDataPaiement();

function afficheDataMontant() {
  let montant = "";
  messagePaiement.forEach((element) => {
    montant += ` <p>${element.montants} </p> `;
  });

  document.querySelector(".valeur").innerHTML = montant;
}

document.onload = afficheDataMontant();
