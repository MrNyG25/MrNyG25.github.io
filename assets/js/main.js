let button = document.getElementById('saludar');
let info = document.getElementById('info');


button.addEventListener('click', () => {
    info.innerHTML = 'Hola';
});