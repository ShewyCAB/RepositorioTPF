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
        descrp1.style.maxHeight = "350px";
        band1 = true;
        return; 
    }
    if(band1 == true) {
        descrp1.style.maxHeight = "0";
        band1 = false;
        return ;
    }
}

botonActv2.onclick = function() {
    if(band2 == false) {
        descrp2.style.maxHeight = "350px";
        band2 = true;
        return; 
    }
    if(band2 == true) {
        descrp2.style.maxHeight = "0";
        band2 = false;
        return ;
    }
}

botonActv3.onclick = function() {
    if(band3 == false) {
        descrp3.style.maxHeight = "350px";
        band3 = true;
        return; 
    }
    if(band3 == true) {
        descrp3.style.maxHeight = "0";
        band3 = false;
        return ;
    }
}





