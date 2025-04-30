// Referencias a elementos
const btnMenu = document.getElementById('btn-menu');
const btnRegresar = document.getElementById('btn-regresar');
const interfaz = document.getElementById('interfaz');
const menu = document.getElementById('menu');

// Mostrar menú y ocultar interfaz
btnMenu.addEventListener('click', () => {
  interfaz.classList.add('oculto');
  menu.classList.remove('oculto');
});

// Regresar a interfaz y ocultar menú
btnRegresar.addEventListener('click', () => {
  menu.classList.add('oculto');
  interfaz.classList.remove('oculto');
});