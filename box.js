let openModal = document.getElementById('openModal');
let closeModal = document.getElementById('closeModal');
let modal = document.getElementById('modal');
let btnUrl = document.getElementById('btnUrl');
let form = document.getElementById('form');
const socket = io("http://localhost:4001")
//const socket = io("http://localhost:8080")



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

// let app_id = "1493138",
//     key = "1b4f215e4f78af5cc4ba",
//     secret = "cc2ac2c9aef5ae008317",
//     cluster = "us2";


form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('click')

    function socketIO() {
        socket.emit("message", "Hola Jorge");
        socket.on("message", (data) => {
            console.log(data);
        });
      }
      socketIO()

    let data = new FormData(form);
    console.log(data.get('inputText'));
    //let url = document.getElementById('url').value;
    //console.log(url);
    //let iframe = document.getElementById('iframe');
    //iframe.src = url;    
})

//console.log(socket);
