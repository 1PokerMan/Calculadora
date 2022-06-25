let display = document.getElementById('mostrarPantalla')
//const igual = document.querySelector('.igual')



const pantalla = (num) =>{
    display.value += num
}
const calculadora = () => {
    try {
        display.value = eval(display.value)
        
    } catch (error) {
        display.value = 'ERROR'
        setTimeout(() => {
           display.value = ""; 
        }, 2000);
    }
}
const limpiar = () => {
    display.value = "";
}
const borrar = () => {
    display.value = display.value.slice(0,-1)
}

//------------------------------------------------------------>
//abrir y cerrar ventanas
var myWindow;

function openWin() {
  myWindow = window.open("", "myWindow", "width=200,height=100");
  //myWindow.document.write("<p>Esta es mi ventana'</p>");
}

function closeWin() {
  myWindow.close();
}

//-------------------------------------------------------------->


VanillaTilt.init(document.querySelector(".contenedor"), {
    max: 25,
    speed: 100,
    glare: true,
    "max-glare": 0.5,
});







//-------------------------------------------------------------->
//reloj






















/* igual.addEventListener('click', () =>{
    console.log('funciono')
    if(igual.value === undefined){
        return 0;
    }
}) */



/* 
function pantalla(num){
    display.value += num
}
function calculadora(){
    try {
        display.value = eval(display.value)
    } catch (error) {
        alert('error')
    }
}
function limpiar(){
    display.value = "";
}
function borrar(){
    display.value = display.value.slice(0,-1)
}
 */

