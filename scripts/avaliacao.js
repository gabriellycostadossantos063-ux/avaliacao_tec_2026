//function
//getElementById
//addEventListner

//---------------Questão 1---------------//
function exemplo1(){
    //escreve o enunciado aqui
    //some 2 numeros 
    alert("funcionou aqui")
    const numero1 = Number(prompt("digite um numero:"))
    const numero2 = Number(prompt("digite um numero"))
    alert(numero1+numero2)
}
const buttonexemplo1 = document.getElementById("questao1")
buttonexemplo1.addEventListener('click', () => { exemplo1 ()})