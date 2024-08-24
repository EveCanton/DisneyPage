const tarjetas = document.getElementsByClassName("tarjetas");

for (let i = 0; i < tarjetas.length; i++) {
    tarjetas[i].addEventListener("click", function () {
        this.classList.toggle("grande");
    });
}

document.getElementById("mickey")
.addEventListener("click",()=>cambiarFondo("var(--fondo-mickey)"));

document.getElementById("cars")
.addEventListener("click",()=>cambiarFondo("var(--fondo-cars)"));

document.getElementById("stitch")
.addEventListener("click",()=>cambiarFondo("var(--fondo-stitch)"));

function cambiarFondo(colorFondo){
    document.documentElement.style.setProperty('--fondo-principal', colorFondo);
}