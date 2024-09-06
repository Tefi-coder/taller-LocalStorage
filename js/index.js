document.addEventListener('DOMContentLoaded', ()  => {
var boton = document.getElementById("buttonText").addEventListener('click', () => {
var inputText = document.getElementById("inputText").value
localStorage.setItem('texto', inputText);
})

});



