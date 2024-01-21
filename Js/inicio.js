let botonActv1 = document.getElementById("botonActv1");
let botonActv2 = document.getElementById("botonActv2");
let botonActv3 = document.getElementById("botonActv3");
let descrp1 = document.getElementById("descripcion1");
let descrp2 = document.getElementById("descripcion2");
let descrp3 = document.getElementById("descripcion3");
band1 = false;
band2 = false;
band3 = false;
descrp1.style.maxHeight = "0";
descrp2.style.maxHeight = "0";
descrp3.style.maxHeight = "0";




botonActv1.onclick = function() {
    if(band1 == false) {
        descrp1.style.maxHeight = "400px";
        descrp1.style.transition = "max-height 0.5s"
        descrp1.style.color= "rgba(0, 0, 0)";
        band1 = true;
        return; 
    }
    if(band1 == true) {
        descrp1.style.maxHeight = "0";
        descrp1.style.transition = "max-height 0.5s";
        descrp1.style.color= "rgba(0, 0, 0, 0)";
        band1 = false;
        return ;
    }
}

botonActv2.onclick = function() {
    if(band2 == false) {
        descrp2.style.maxHeight = "400px";
        descrp2.style.transition = "max-height 0.5s"
        descrp2.style.color= "rgba(0, 0, 0)";
        band2 = true;
        return; 
    }
    if(band2 == true) {
        descrp2.style.maxHeight = "0";
        descrp2.style.transition = "max-height 0.5s";
        descrp2.style.color= "rgba(0, 0, 0, 0)";
        band2 = false;
        return ;
    }
}

botonActv3.onclick = function() {
    if(band3 == false) {
        descrp3.style.maxHeight = "400px";
        descrp3.style.transition = "max-height 0.5s"
        descrp3.style.color= "rgba(0, 0, 0)";
        band3 = true;
        return; 
    }
    if(band3 == true) {
        descrp3.style.maxHeight = "0";
        descrp3.style.transition = "max-height 0.5s";
        descrp3.style.color= "rgba(0, 0, 0, 0)";
        band3 = false;
        return ;
    }
}





const botonAbrirModal = document.getElementById("abrirModal");

const botonCerrarModal = document.getElementById("cerrarModal");

const modal = document.getElementById("modal");



botonAbrirModal.addEventListener("click", ()=>{
    modal.showModal();
    submit.onclick = function () {
        let usuario = user.value;
        let correo = email.value;
        let contra = password.value;
        
        alert(`${usuario} ha sido registrado correctamente.`)
        
    }
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


