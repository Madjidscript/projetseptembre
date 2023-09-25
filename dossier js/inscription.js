let inputBouton = document.querySelector(".inscription");

function envoie() {
  //e.preventDefault();
  let bdUtilisateur = JSON.parse(localStorage.getItem("userdonner")) || [];
  let nom = document.querySelector("#nom").value;
  let email = document.querySelector("#email").value;
  let password = document.querySelector("#password").value;
  let numero = document.querySelector("#numero").value;

  // crer unid pour l'utilisateur
  let nouvelId = 1;
  if (bdUtilisateur.length > 0) {
    const dernierUtilisateur = bdUtilisateur[bdUtilisateur.length - 1];
    nouvelId = dernierUtilisateur.id + 1;
  }
  //je creer unobjet

  let utilisateur = {
    id: nouvelId,
    nom: nom,
    email: email,
    password: password,
    numero: numero,
  };
  bdUtilisateur.push(utilisateur);
  localStorage.setItem("userdonner", JSON.stringify(bdUtilisateur));
}

function verifChamp() {
  let nom = document.querySelector("#nom").value;
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

inputBouton.addEventListener("click", (e) => {
  if (verifChamp() === true) {
    e.preventDefault();
    alert(
      "votre contributions a ete effectuer avec succés veuillez verifie votre tableau de bord"
    );
    envoie();
    window.location.href = "../corporate2/tableau-bord.html";
  }
});
