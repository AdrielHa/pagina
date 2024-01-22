let loadMoreBtn = document.querySelector('#load-more');
let currentItem = 8;

loadMoreBtn.onclick = () => {
    let boxes = [...document.querySelectorAll('.box-container .box')];
    for(var i = currentItem; i < currentItem + 4; i++){
        boxes[i].style.display = 'inline-block';
    }
    currentItem += 4;
    if(currentItem >= boxes.length){
        loadMoreBtn.style.display = 'none'
    }
}

//carrito
const carrito = document.getElementById('carrito');
const elementos1 = document.getElementById('lista-1');
const lista = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');

cargarEventListeners();

function cargarEventListeners(){
    elementos1.addEventListener('click', comprarElemento);
    carrito.addEventListener('click', eliminarElemento);

    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
}
function comprarElemento(e) {
e.preventDefault();
if(e.target.classList.contains('agregar-carrito')) {
    const elemento = e.target.parentElement.parentElement;
    leerDatosElemento(elemento); 
}
}


function leerDatosElemento(elemento){
    const infoElemento = {
        imagen: elemento.querySelector('img').src,
        titulo: elemento.querySelector('h3').textContent,
        precio: elemento.querySelector('.precio').textContent,
        id: elemento.querySelector('a').getAttribute('data-id')
    }
    insertarCarrito(infoElemento);
}

function insertarCarrito(elemento) {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>
         <img src="${elemento.imagen}" width=100 height=150px > 
      </td>
      <td>
      ${elemento.titulo}
      </td>
      <td>
      ${elemento.precio}
      </td>
      <td>
      <a href="#" class="borrar" data-id="${elemento.id}" >X</a>
      </td>
  `;
  lista.appendChild(row);
}

function eliminarElemento(e){
    e.preventDefault();
    let elemento,
    elementoId;

    if(e.target.classList.contains('borrar')){
        e.target.parentElement.parentElement.remove();
        elemento = e.target.parentElement.parentElement;
        elementoId = elemento.querySelector('a').getAttribute('data-id');
    }
}


function vaciarCarrito() {
    while(lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }
    return false;
}

          
const mp = new MercadoPago('TEST-72f552bc-03ca-483d-8c15-731dd33393d8', {
    locale: "es-MX"
});

document.getElementById("1").addEventListener("click", async () => {

    const orderData = {
        title: "Azul Casual", 
        quantity: 1,
        price: 200,
    };

    const response = await fetch("http://localhost:3000/create_preference", {
    method: "POST",
    headers: {
    "Content-Type": "aplication/json",
},
body: JSON.stringify(orderData),
    });

    const preference = await response.json()
});

document.getElementById("2").addEventListener("click", async () => {

    const orderData = {
        title: "Urbana Chic", 
        quantity: 1,
        price: 200,
    };

    const response = await fetch("http://localhost:3000/create_preference", {
    method: "POST",
    headers: {
    "Content-Type": "aplication/json",
},
body: JSON.stringify(orderData),
    });

    const preference = await response.json()
});

document.getElementById("3").addEventListener("click", async () => {

    const orderData = {
        title: "Vintage Clásica", 
        quantity: 1,
        price: 200,
    };

    const response = await fetch("http://localhost:3000/create_preference", {
    method: "POST",
    headers: {
    "Content-Type": "aplication/json",
},
body: JSON.stringify(orderData),
    });

    const preference = await response.json()
});

document.getElementById("4").addEventListener("click", async () => {

    const orderData = {
        title: "Executive Moderna", 
        quantity: 1,
        price: 200,
    };

    const response = await fetch("http://localhost:3000/create_preference", {
    method: "POST",
    headers: {
    "Content-Type": "aplication/json",
},
body: JSON.stringify(orderData),
    });

    const preference = await response.json()
});

document.getElementById("5").addEventListener("click", async () => {

    const orderData = {
        title: "Casual Sport", 
        quantity: 1,
        price: 200,
    };

    const response = await fetch("http://localhost:3000/create_preference", {
    method: "POST",
    headers: {
    "Content-Type": "aplication/json",
},
body: JSON.stringify(orderData),
    });

    const preference = await response.json()
});

document.getElementById("6").addEventListener("click", async () => {

    const orderData = {
        title: "Nocturna Glam", 
        quantity: 1,
        price: 200,
    };

    const response = await fetch("http://localhost:3000/create_preference", {
    method: "POST",
    headers: {
    "Content-Type": "aplication/json",
},
body: JSON.stringify(orderData),
    });

    const preference = await response.json()
});

document.getElementById("7").addEventListener("click", async () => {

    const orderData = {
        title: "Boho Chic", 
        quantity: 1,
        price: 200,
    };

    const response = await fetch("http://localhost:3000/create_preference", {
    method: "POST",
    headers: {
    "Content-Type": "aplication/json",
},
body: JSON.stringify(orderData),
    });

    const preference = await response.json()
});

document.getElementById("8").addEventListener("click", async () => {

    const orderData = {
        title: "Playa Verano", 
        quantity: 1,
        price: 200,
    };

    const response = await fetch("http://localhost:3000/create_preference", {
    method: "POST",
    headers: {
    "Content-Type": "aplication/json",
},
body: JSON.stringify(orderData),
    });

    const preference = await response.json()
});

document.getElementById("9").addEventListener("click", async () => {

    const orderData = {
        title: "Mini Noche", 
        quantity: 1,
        price: 200,
    };

    const response = await fetch("http://localhost:3000/create_preference", {
    method: "POST",
    headers: {
    "Content-Type": "aplication/json",
},
body: JSON.stringify(orderData),
    });

    const preference = await response.json()
});

document.getElementById("10").addEventListener("click", async () => {

    const orderData = {
        title: "Tote Clásica", 
        quantity: 1,
        price: 200,
    };

    const response = await fetch("http://localhost:3000/create_preference", {
    method: "POST",
    headers: {
    "Content-Type": "aplication/json",
},
body: JSON.stringify(orderData),
    });

    const preference = await response.json()
});


document.getElementById("11").addEventListener("click", async () => {

    const orderData = {
        title: "Satchel Elegante", 
        quantity: 1,
        price: 200,
    };

    const response = await fetch("http://localhost:3000/create_preference", {
    method: "POST",
    headers: {
    "Content-Type": "aplication/json",
},
body: JSON.stringify(orderData),
    });

    const preference = await response.json()
});


document.getElementById("12").addEventListener("click", async () => {
     try{
    const orderData = {
        title: "Crossbody Urbana", 
        quantity: 1,
        price: 200,
    };

const response = await fetch("http://localhost:3000/create_preference", {
    method: "POST",
    headers: {
    "Content-Type": "aplication/json",
},
body: JSON.stringify(orderData),
    });

    const preference = await response.json()
    createCheckoutButton(preference.id);
} catch (error){
    alert("error :(");
}
});

const createCheckoutButton = (preferenceId) => {
    const bricksBuilder = mp.bricks();

    const renderComponent = async () =>{
        if (window.checkoutButton) window.checkoutButton.unmount();

        await bricksBuilder.create("wallet", "wallet_container", {
            initialization: {
                preferenceId: preferenceId,
            },
         });
    };

    renderComponent();
};