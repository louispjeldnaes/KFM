//BOGKARRUSEL

const venstrePil = document.getElementById("karruselHoejrePil");
const hoejrePil = document.getElementById("karruselVenstrePil");

/*hoejrePil.addEventListener("click", () => {
  const bogIKarruselWidth = bogIKarrusel.clientWidth;
  bogKarrusel.scrollLeft += bogIKarruselWidth;
});*/

//RUL EN BOG
const vistBog = document.getElementById("rulEnBogMedKnap");
const rulEnBog = document.getElementById("rulEnBogKnap");

/*Vi bruger Math.random til at generere en tilfældig bog*/

function rul() {
  let resultat = Math.floor(Math.random() * 8) + 1;
  switch (resultat) {
    case 1:
      vistBog.innerHTML =
        '<a href="bogbeskrivelse.html"><img src="img/citronbjerget.jpg" alt="Citronbjerget af Eva Tind"></a>';
      break;
    case 2:
      vistBog.innerHTML =
        '<a href="bogbeskrivelse.html"><img src= "img/deBedsteFamilier.jpg" alt="De bedste familier af Kim Blæsbjerg"></a>';
      break;
    case 3:
      vistBog.innerHTML =
        '<a href="bogbeskrivelse.html"><img src="img/deForsvundneTræersØ.jpg" alt="De forsvundne træers ø af Elif Shafak"></a>';
      break;
    case 4:
      vistBog.innerHTML =
        '<a href="bogbeskrivelse.html"><img src="img/mrLoverman.jpg" alt="Mr. Loverman af Bernardine Evaristo"></a>';
      break;
    case 5:
      vistBog.innerHTML =
        '<a href="bogbeskrivelse.html"><img src="img/detTredjeRige.jpg" alt="Det tredje rige af Karl Ove Knausgård"></a>';
      break;
    case 6:
      vistBog.innerHTML =
        '<a href="bogbeskrivelse.html"><img src="img/enVejUdAfTågen.jpg" alt="En vej ud af tågen af Kristian Leth"></a>';
      break;
    case 7:
      vistBog.innerHTML =
        '<a href="bogbeskrivelse.html"><img src="img/fremtidenErDer.jpg" alt="Fremtiden er der også i morgen af Kristian Leth"></a>';
      break;
    case 8:
      vistBog.innerHTML =
        '<a href="bogbeskrivelse.html"><img src="img/fyrsterneAfFinntjern.jpg" alt="Fyrsterne af Finntjern af Lars Elling"></a>';
      break;
    default: //???
  }
}

rulEnBog.addEventListener("click", rul);

/* Åbner burgermenuen */
function openNav() {
  document.getElementById("overlayNav").style.width = "100%";
  document.getElementById("overlay_burgermenu").style.display = "none";
  document.getElementById("burgerCirkel").style.display = "none";
}

/* Lukker burgermenuen */

function closeNav() {
  document.getElementById("overlayNav").style.width = "0%";
  document.getElementById("overlay_burgermenu").style.display = "block";
  document.getElementById("burgerCirkelLuk").style.display = "block";
}

/* Fylder hjertet */


function hjerteFyldes() {
  document.getElementById("hjerteTomt").style.display = "none";
  document.getElementById("hjerteFyldt").style.display = "block";

}

/* Tømmer hjertet */
function hjerteToemmes() {  
  document.getElementById("hjerteFyldt").style.display = "none";
  document.getElementById("hjerteTomt").style.display = "block";
}

