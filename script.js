/* BURGER TOGGLE FUNKTION med CSS ANIMATION */

/*Har lært om følgende properties og måde at opstille CSS-animationer på i
Val Head's LinkedIn Learning kursus CSS Animation: https://www.linkedin.com/learning/css-animation-14153685?u=68595258
 og på w3schools - har selv rettet dem til JS-syntax*/

/*Forkortelser ved brug af const, fordi de er konstante*/
const burgerBog = document.getElementById("burgerBog");
const bogUnder = document.getElementById("bogUnder");
const bogVenstre = document.getElementById("bogVenstre");
const bogHoejre = document.getElementById("bogHoejre");

const burgerIkon = document.getElementById("burgerIkon");
const overlayNav = document.getElementById("overlayNav");

let synlig = false;

/*Burgerfunktionen sat op med if og else for at
#burgerIkonCirkel kan bruges som toggle til både at
åbne og lukke burgermenunen og viser CSS-animation
i overgangen*/
function burgerFunktion(){
    if (synlig == false){
        /* Åbner burgermenuen */
        overlayNav.style.width = "100%";

        /* sætter CSS-animationerne i gang */
        burgerBog.style.animationPlayState = "running";
        bogUnder.style.animationPlayState = "running";
        bogVenstre.style.animationPlayState = "running";
        bogHoejre.style.animationPlayState = "running";

        
        burgerBog.style.animationDirection = "normal"; 
        bogUnder.style.animationDirection = "normal"; 
        bogVenstre.style.animationDirection = "normal"; 
        bogHoejre.style.animationDirection = "normal"; 

        synlig = true;

    }else{
        /* Lukker burgermenuen */
        overlayNav.style.width = "0%";

        /* Siger til CSS-animationer at de skal afspilles baglæns,
        altså fra 100% til 0%*/
        burgerBog.style.animationDirection = "reverse"; 
        bogUnder.style.animationDirection = "reverse"; 
        bogVenstre.style.animationDirection = "reverse"; 
        bogHoejre.style.animationDirection = "reverse";

        synlig = false;
    }    
  }

  /* Kalder funktionen (åben eller luk) ved
  klik på div'en #burgerIkonCirkel */
  burgerIkon.addEventListener("click", burgerFunktion);

  

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


/*Åbner anmeldelse op*/ 
function aabenAnmeldelse() {
  document.getElementById("anmeldelseKort").style.display = "block";
}

/* Lukker anmeldelse */
function lukAndmeldelse() {
  document.getElementById("anmeldelseKort").style.display = "none";
}
