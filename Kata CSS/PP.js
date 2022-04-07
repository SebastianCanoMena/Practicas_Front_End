const botton_d = document.querySelector(".botton_d");
const texto = document.querySelector(".texto");
/*botton_d.getElementsByClassName("botton_d").style;
botton_d.position = "static"*/

botton_d.addEventListener("click", (e)=>{
    texto.classlist.toggle("mostrar-mas");
    
})
