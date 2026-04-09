const btninicio = document.getElementById("inicio")
const btnacerca = document.getElementById("acerca")
const btnayuda = document.getElementById("ayuda")

btninicio.addEventListener("click",function() {
document.getElementById("INICIO").scrollIntoView({behavior:"smooth"});
});

btnacerca.addEventListener("click",function() {
document.getElementById("ACERCA").scrollIntoView({behavior:"smooth"});
});

btnayuda.addEventListener("click",function() {
document.getElementById("AYUDA").scrollIntoView({behavior:"smooth"});
});