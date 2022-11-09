// seleziono un elemento tramite il suo id
let seaHead = document.getElementById("explore-sea-head");
console.log(seaHead);

let price = document.getElementById("price-sea");
price.innerHTML = "400/person";
// element è selezionato e con remuve gli tolgo una classe
seaHead.classList.remove("bg-warning");

seaHead.classList.add("bg-danger");

seaHead.style.textDecoration = "underline";

