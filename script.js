let contenido = document.getElementById("contenido");
 
let contenedor = document.createElement("div");
contenedor.setAttribute("class", "contenedor-consejos");
 
let titulo = document.createElement("h2");
titulo.innerHTML = "Consejos para las clases con el teacher Irvin";
contenedor.appendChild(titulo);
 
let lista = document.createElement("ul");
 
let consejos = [
    "No procrastinar.",
    "Poner mucha atención en clase.",
    "Siempre tratar de practicar las cosas que aprendimos en clase.",
    "No hablar en clase.",
    "Tener una buena actitud.",
    "Siempre tratar de ver los videos que a veces suele enviar el teacher.",
    "Siempre revisar los enlaces que envía el teacher.",
    "Usar recursos en línea como W3Schools.",
    "Trabajar en equipo y compartir conocimientos.",
    "Hacer preguntas y buscar ayuda cuando sea necesario.",
    "Si tiene examen y el teacher viene formal, suerte."
];
 
consejos.forEach(texto => {
    let item = document.createElement("li");
    item.innerHTML = texto;
    lista.appendChild(item);
});
 
contenedor.appendChild(lista);
document.body.appendChild(contenedor);