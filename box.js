let openModal =  document.getElementById('openModal');
let closeModal =  document.getElementById('closeModal');
let modal =  document.getElementById('modal');
let btnUrl =  document.getElementById('btnUrl');

// abrir
openModal.addEventListener('click', () => {
    modal.style.visibility = 'visible';
    btnUrl.style.visibility = 'visible';
})

// cerrar
closeModal.addEventListener('click', () => {
    modal.style.visibility = 'hidden';
    btnUrl.style.visibility = 'hidden';
})

// modal.addEventListener('click', () => {
//     modal.style.visibility = 'hidden';
// })

