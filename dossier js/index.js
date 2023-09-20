let numero = document.querySelectorAll(".numero");
let interval = 5000;

numero.forEach((element) => {
  let debeutValeur = 0;

  let finValeur = parseInt(element.getAttribute("data-val"));

  let durer = Math.floor(interval / finValeur);
  let conter = setInterval(function () {
    debeutValeur += 1;
    console.log(debeutValeur);

    element.textContent = debeutValeur;
    if (debeutValeur === finValeur) {
      clearInterval(conter);
    }
  }, durer);
});
