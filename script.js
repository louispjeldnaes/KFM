//RUL EN BOG
const vistBog = document.getElementById("rulEnBogMedKnap");
const rulEnBog = document.getElementById("rulEnBogKnap");

/*Vi bruger Math.random til at generere en tilfældig bog*/

function rul() {
  let resultat = Math.floor(Math.random() * 8) + 1;
  switch (resultat) {
    case 1:
      vistBog.innerHTML =
        '<img src="img/citronbjerget.jpg" alt="Citronbjerget af Eva Tind">';
      break;
    case 2:
      vistBog.innerHTML =
        '<img src= "img/deBedsteFamilier.jpg" alt="De bedste familier af Kim Blæsbjerg">';
      break;
    case 3:
      vistBog.innerHTML =
        '<img src="img/deForsvundneTræersØ.jpg" alt="De forsvundne træers ø af Elif Shafak">';
      break;
    case 4:
      vistBog.innerHTML =
        '<img src="img/mrLoverman.jpg" alt="Mr. Loverman af Bernardine Evaristo">';
      break;
    case 5:
      vistBog.innerHTML =
        '<img src="img/detTredjeRige.jpg" alt="Det tredje rige af Karl Ove Knausgård">';
      break;
    case 6:
      vistBog.innerHTML =
        '<img src="img/enVejUdAfTågen.jpg" alt="En vej ud af tågen af Kristian Leth">';
      break;
    case 7:
      vistBog.innerHTML =
        '<img src="img/fremtidenErDer.jpg" alt="Fremtiden er der også i morgen af Kristian Leth">';
      break;
    case 8:
      vistBog.innerHTML =
        '<img src="img/fyrsterneAfFinntjern.jpg" alt="Fyrsterne af Finntjern af Lars Elling">';
      break;
    default: //???
  }
}

rulEnBog.addEventListener("click", rul);

/* Åbner burgermenuen */
function openNav() {
  document.getElementById("overlayNav").style.width = "100%";
  document.getElementById("overlay_burgermenu").style.display = "none";
}

/* Lukker burgermenuen */
function closeNav() {
  document.getElementById("overlayNav").style.width = "0%";
  document.getElementById("overlay_burgermenu").style.display = "block";
}
