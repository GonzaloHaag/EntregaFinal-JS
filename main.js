// PRODUCTOS -->Crearemos un array de todos los productos,para luego utilizar el localStorage
const productos = [
    // Musculosas
    {
        id: "Musculosa-01",
        titulo: "Musculosa 01",
        imagen: "./img/Musculosas/01.jpg", //Ruta de imagen
        categoria: { //abrimos una categoria
            nombre: "Musculosas",
            id: "Musculosas" //Debe coincidir con el id del HTML que le pongamos
        },
        precio: 1500
    },
    {
        id: "Musculosa-02",
        titulo: "Musculosa 02",
        imagen: "./img/Musculosas/02.jpg",
        categoria: {
            nombre: "Musculosas",
            id: "Musculosas"
        },
        precio: 1500
    },
    {
        id: "Musculosa-03",
        titulo: "Musculosa 03",
        imagen: "./img/Musculosas/03.jpg",
        categoria: {
            nombre: "Musculosas",
            id: "Musculosas"
        },
        precio: 1500
    },
    {
        id: "Musculosa-04",
        titulo: "Musculosa 04",
        imagen: "./img/Musculosas/04.jpg",
        categoria: {
            nombre: "Musculosas",
            id: "Musculosas"
        },
        precio: 1500
    },
    {
        id: "Musculosa-05",
        titulo: "Musculosa 05",
        imagen: "./img/Musculosas/05.jpg",
        categoria: {
            nombre: "Musculosas",
            id: "Musculosas"
        },
        precio: 1500
    },
    // Remeras Algodon
    {
        id: "Remera-Algodon-01",
        titulo: "Remera Algodon 01",
        imagen: "./img/Remeras-algodon/01.jpg",
        categoria: {
            nombre: "Remeras Algodon",
            id: "remera-algodon"
        },
        precio: 2000
    },
    {
        id: "Remera-Algodon-02",
        titulo: "Remera Algodon 02",
        imagen: "./img/Remeras-algodon/02.jpg",
        categoria: {
            nombre: "Remeras Algodon",
            id: "remera-algodon"
        },
        precio: 2000
    },
    {
        id: "Remera-Algodon-03",
        titulo: "Remera Algodon 03",
        imagen: "./img/Remeras-algodon/03.jpg",
        categoria: {
            nombre: "Remeras Algodon",
            id: "remera-algodon"
        },
        precio: 2000
    },
    {
        id: "Remera-Algodon-04",
        titulo: "Remera Algodon 04",
        imagen: "./img/Remeras-algodon/04.jpg",
        categoria: {
            nombre: "Remeras Algodon",
            id: "remera-algodon"
        },
        precio: 2000
    },
    {
        id: "Remera-Algodon-05",
        titulo: "Remera Algodon 05",
        imagen: "./img/Remeras-algodon/05.jpg",
        categoria: {
            nombre: "Remeras Algodon",
            id: "remera-algodon"
        },
        precio: 2000
    },
    {
        id: "Remera-Algodon-06",
        titulo: "Remera Algodon 06",
        imagen: "./img/Remeras-algodon/06.jpg",
        categoria: {
            nombre: "Remeras Algodon",
            id: "remera-algodon"
        },
        precio: 2000
    },
    {
        id: "Remera-Algodon-07",
        titulo: "Remera Algodon 07",
        imagen: "./img/Remeras-algodon/07.jpg",
        categoria: {
            nombre: "Remeras Algodon",
            id: "remera-algodon"
        },
        precio: 2000
    },
    {
        id: "Remera-Algodon-08",
        titulo: "Remera Algodon 08",
        imagen: "./img/Remeras-algodon/08.jpg",
        categoria: {
            nombre: "Remeras Algodon",
            id: "remera-algodon"
        },
        precio: 2000
    },
    // Buzos 
    {
        id: "Buzo-01",
        titulo: "Buzo 01",
        imagen: "./img/Buzos/01.jpg",
        categoria: {
            nombre: "Buzos",
            id: "buzos"
        },
        precio: 3000
    },
    {
        id: "Buzo-02",
        titulo: "Buzo 02",
        imagen: "./img/Buzos/02.jpg",
        categoria: {
            nombre: "Buzos",
            id: "buzos"
        },
        precio: 3000
    },
    {
        id: "Buzo-03",
        titulo: "Buzo 03",
        imagen: "./img/Buzos/03.jpg",
        categoria: {
            nombre: "Buzos",
            id: "buzos"
        },
        precio: 3000
    },
    {
        id: "Buzo-04",
        titulo: "Buzo 04",
        imagen: "./img/Buzos/04.jpg",
        categoria: {
            nombre: "Buzos",
            id: "buzos"
        },
        precio: 3000
    },
    {
        id: "Buzo-05",
        titulo: "Buzo 05",
        imagen: "./img/Buzos/05.jpg",
        categoria: {
            nombre: "Buzos",
            id: "buzos"
        },
        precio: 3000
    }
];

const contenedorProductos = document.querySelector("#contenedor-productos"); //Div

const botonesCategorias = document.querySelectorAll(".boton-categoria"); //El all se utiliza cuando queremos traer todos esos botones

const tituloPrincipal = document.querySelector("#titulo-principal");

let botonesAgregar = document.querySelectorAll(".producto-agregar"); 

const numerito = document.querySelector("#numerito");




function cargarProductos (productosElegidos) { //Este parametro representa el array de los productos que queremos mostrar

    contenedorProductos.innerHTML =""; //Para que al principio la funcion deje el contenedor vacio, si no al mostrar los productos se mostraran abajo de todo

    productosElegidos.forEach(producto=>{ //reccoremos el array con ese parametro



        let div = document.createElement("div");//creamos un div
        div.classList.add("producto"); //que tenga la clase producto, que la modificamos en el css
        div.innerHTML = `
        <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}"> 
        <div class="productos-detalles">
        <h3 class="producto-titulo"> ${producto.titulo}</h3>
        <p class="producto-precio"> $ ${producto.precio}</p>
        <button class="producto-agregar" id="${producto.id}">Agregar</button>
        </div>
        
        `;
        contenedorProductos.append(div);//para agregarlo a nuestro contenedor


    })
    actualizarBotonesAgregar(); //Llamamos la funcion aca, para que al cargar los productos tambien actualice los botones

}
cargarProductos(productos); //La primera vez queremos que aparezcan todos los productos, por lo que le pasamos el array entero de productos, que contiene todos

//botonesCategorias--Es un array que trae todo los elementos, estamos buscando que al hacerle click pase algo

botonesCategorias.forEach(boton =>{
    boton.addEventListener("click",(e)=>{
        botonesCategorias.forEach(boton=>boton.classList.remove("active")); //Para que se elimine primero la clase active de los demas botones, y se le agregue a la que le hacemos click
        e.currentTarget.classList.add("active"); //Esto depende de lo que clickeemos, estamos buscando que el active pase al boton de abrigo.

        if(e.currentTarget.id != "todos"){ //Porque el id del boton de todos los productos es todos

            const productoCategoria =  productos.find(producto=>producto.categoria.id === e.currentTarget.id); //Para recorrer ese array nuevamente

            // console.log(productoCategoria); //Traera el primer producto que coincida con la categoria.id que sea abrigo, eso es lo que hace el find



            tituloPrincipal.innerText = productoCategoria.categoria.nombre; //Para que me traiga el nombre y modifique el titulo principal

        const productosBoton = productos.filter(producto=>producto.categoria.id === e.currentTarget.id); //Queremos que al clickear en alguna categoria nos traiga los productos que contenga esa categoria, la propiedad e.currentTarget nos trae el id de ese elemento HTML
        cargarProductos(productosBoton); //Ahora le pasamos como parametro esto,para que al clickear aparezca lo que se debe y NO todos los productos
        }
        else{
            tituloPrincipal.innerText = "Todos los productos"; //El titulo principal de todos los productos sera este si es igual el id del boton que tiene id=todos
            cargarProductos(productos);
        }


    })
});


//FUNCION PARA LOS BOTONES DE AGREGAR -> Porque el let botonesAgregar, todavia no lo encuentra en el dom, nosotros queremos que lo busque

function actualizarBotonesAgregar() {
     botonesAgregar = document.querySelectorAll(".producto-agregar"); //Para que lo busque en el dom, porque al principio no existe.Lo traemos del DOM

     botonesAgregar.forEach(boton=> {
        boton.addEventListener("click",agregarAlCarrito); //Cada vez que se ejecute la funcion
     })

}
const productosEnCarrito = []; //al principio estara vacio

function agregarAlCarrito (e) {
    const idBoton = e.currentTarget.id; //Devuelve el id de ese boton agregar,que es igual a un id de un producto

    const productoAgregado = productos.find(producto => producto.id === idBoton); //El find busca el primer elemento que coincida,nos trae el producto entero

    if(productosEnCarrito.some(producto=> producto.id === idBoton)) { //some se fija si ese elemento ya esta en el array,devuelve true o false, para que si elige el mismo elemento se aumente la cantidad y no se agregue 2 veces

        const index = productosEnCarrito.findIndex(producto => producto.id===idBoton); //nos da el numero de indice
        productosEnCarrito[index].cantidad++; //para incrementar la cantidad en caso de que ya este en el carrito


    }
    else{
        productoAgregado.cantidad=1; //le estamos asignando una propiedad cantidad que sea igual a 1
        productosEnCarrito.push(productoAgregado); //Que le agregue al carrito
    }
    actualizarNumerito(); //Llamamos a la funcion cada vez que agregamos algo al carrito

    //LocalStorage

    localStorage.setItem("productos-en-carrito",JSON.stringify(productosEnCarrito)); //Lo guardo en el localstorage, el primer parametro es el nombre que yo quiera ponerle-> Verificar en aplicacion
    

   



}

//para actualizar el numerito del carrito

function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc,producto) => acc + producto.cantidad,0); //que sume el acumulador mas la cantidad y que arranque en 0

    numerito.innerText = nuevoNumerito; //para que haga efecto en el numerito de nuestro html -> en numerito teniamos guardado el numerito al lado del carrito
   
}