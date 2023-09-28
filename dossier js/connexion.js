let boutonConnexion = document.querySelector("#connexion");
let form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let bdUser = JSON.parse(localStorage.getItem("userdonner"));

  let resultat;
  bdUser.forEach((user) => {
    console.log("user");
    if (
      document.querySelector(".email").value === user.email &&
      document.querySelector(".password").value === user.password
    ) {
      console.log("passserrrrr verif");
      resultat = user;
      console.log(resultat);
      
    }

    if (typeof resultat !== "undefined") {
      console.log("passserrrrr");
      window.location.href = "../corporate2/tableau-bord.html";
      localStorage.setItem("sex1", JSON.stringify(resultat));
    }  else if (
       document.querySelector(".email").value === "admin@gmail.com" &&
         document.querySelector(".password").value === "08062003"
      ) {
       window.location.href = "../corporate2/admin.html";
       localStorage.setItem("sex1", JSON.stringify(resultat));

       }
       else {
      window.location.reload();
    }
  });
});
