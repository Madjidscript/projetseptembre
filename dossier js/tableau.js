let bdDonner = JSON.parse(localStorage.getItem("contribution"));

console.log(bdDonner);

function afficheDataCont() {
  let html = "";
  bdDonner.forEach((element) => {
    html += `
    <tr>
      <td>${element.dates} </td>
      <td>${element.password} </td>
      <td>${element.contact} </td>
      <td>${element.montants}</td>
    </tr>`;
  });

  document.querySelector("#insert").innerHTML = html;
  console.log(html);
}

document.onload = afficheDataCont();
