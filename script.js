
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