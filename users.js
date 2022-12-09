// fetch('https://jsonplaceholder.typicode.com/todos/1') //El /1 devolvera el usuario 1
//   .then(response => response.json())
//   .then(json => console.log(json))


//   fetch('https://jsonplaceholder.typicode.com/todos') //Ahora devolvera todos --> /users devolvera los usuarios 
//   .then(response => response.json())
//   .then(json => console.log(json))

const urlUsuarios = "https://jsonplaceholder.typicode.com/users"; //guardamos la url dentro de una constante,es la de usuarios, la api trae esa opcion,por eso podemos utilizarla /users
const listaUsuarios = document.querySelector("#lista-usuarios");

//Mostrar usuarios

fetch(urlUsuarios) //Devuelve una promesa con un estado pendiente
.then((response) => response.json())
.then((data) => {
    console.log(data); //De aqui sacamos la informacion para obtener de ese array
    data.forEach(usuario => { //Porque data es un array
        const li = document.createElement("li");
        li.innerHTML = "Nombre: " + usuario.name + "<br>Email: " + usuario.email + "<br> <br>"; //Sacamos solo el nombre y el telefono, es la informacion que nos brinda la API, no al azar
        listaUsuarios.append(li); //Se nos agregara la lista de usuarios
        
    })

})