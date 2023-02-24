function mostrarOcultarTexto(botonId, textoAdicionalId) {
    let boton = document.getElementById(botonId);
    let textoAdicional = document.getElementById(textoAdicionalId);
    let textoVisible = false;

    if (textoAdicional.style.display === "block") {
      textoAdicional.style.display = "none";
      boton.textContent = "Leer más";
    } else {
      textoAdicional.style.display = "block";
      boton.textContent = "Ocultar";
    }
  }

  const neonButton = document.getElementById('neon');

  neonButton.addEventListener('mouseover', function() {
    neonButton.style.animationPlayState = 'running';
  });
  
  neonButton.addEventListener('animationend', function() {
    neonButton.style.animationPlayState = 'paused';
  });



const emailLink = document.querySelector('.contact-info li:nth-child(1) a');
const phoneLink = document.querySelector('.contact-info li:nth-child(2) a');

emailLink.addEventListener('click', function(e) {
  e.preventDefault();
  window.location.href = 'mailto:tuemail@gmail.com';
});

phoneLink.addEventListener('click', function(e) {
  e.preventDefault();
  window.location.href = 'tel:+1234567890';
});