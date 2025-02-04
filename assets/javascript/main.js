/*Efecto fade-in de las pelotas*/ 
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".fade-in").forEach((el) => {
      el.classList.add("visible");
    });
  });

  /*Efecto de la barra lateral*/

  document.getElementById("menuToggle").addEventListener("click", function () {
    document.getElementById("sidebar").style.right = "0";
  });
  
  document.getElementById("closeMenu").addEventListener("click", function () {
    document.getElementById("sidebar").style.right = "-250px";
  });