let boton = document.getElementById("boton");
let mensaje = document.getElementById("mensaje");
mensaje.style.maxHeight = "0";



boton.onclick = function() {
    mensaje.style.maxHeight = "200px"
    mensaje.innerHTML = `
    <p>Le enviamos un mail, por favor revise su correo.</p>
    `;
    mensaje.style.transition = "max-height 0.5s";
    
}



const botonAbrirModal = document.getElementById("abrirModal");

const botonCerrarModal = document.getElementById("cerrarModal");

const modal = document.getElementById("modal");
modal.style.transition = "1s";
botonAbrirModal.style.transition = "1s";
botonCerrarModal.style.transition = "1s";

botonAbrirModal.addEventListener("click", ()=>{
    modal.showModal();
    
})

botonCerrarModal.addEventListener("click", ()=>{
    modal.close();
    
})