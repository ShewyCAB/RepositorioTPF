



const botonAbrirModal = document.getElementById("abrirModal");



const modal = document.getElementById("modal");



botonAbrirModal.addEventListener("click", ()=>{
    modal.showModal();
    submit.onclick = function () {
        let usuario = user.value;
        let correo = email.value;
        let contra = password.value; 
        let datos = [
            usuario,
            correo,
            contra
        ]
        localStorage.setItem("datos", JSON.stringify(datos));
        alert(`${datos[1]} ha sido registrado correctamente.`)
    }
    return datos;
})





let signUp = document.getElementById("signUp");
let signIn = document.getElementById("signIn");
let nameInput = document.getElementById("nameInput")
let title = document.getElementById("title");
let submit = document.getElementById("submit");

let user = document.getElementById("user");
let email = document.getElementById("email");
let password = document.getElementById("password");
let cartOlv = document.getElementById("olv");




signUp.onclick = function() {
    nameInput.style.maxHeight = "60px";
    title.innerHTML = "Registro";
    cartOlv.innerHTML = `
    `;
    signUp.classList.remove("disable");
    signIn.classList.add("disable");
    submit.onclick = function () {
        let usuario = user.value;
        let correo = email.value;
        let contra = password.value;
        let datos = [
            usuario,
            correo,
            contra
        ]
        localStorage.setItem("datos", JSON.stringify(datos));
        alert(`${datos[1]} ha sido registrado correctamente.`)
    }
    return datos;
}

signIn.onclick = function() {
    nameInput.style.maxHeight = "0";
    cartOlv.style.maxHeight = "60px";
    cartOlv.innerHTML = `
    <p>Olvidaste tu contraseña? <a href="#">click aqui</a></p>
    `;
    title.innerHTML = "Login";
    signUp.classList.add("disable");
    signIn.classList.remove("disable");
    submit.onclick = function () {
        let correo = email.value;
        let contra = password.value;
        let datos = JSON.parse(localStorage.getItem("datos"));
        if (datos[1] == correo && datos[2] == contra ) {
            alert(`${correo} ha iniciado sesion correctamente.`)

        }
        else{
            alert(`Usuario o contraseña incorrecta`)
        }
    }
    
}