
const valores = document.getElementById('valores').children;

document.body.onload = function(){
    const arrVal = [];
    const botoes = document.getElementById('botoes').children;

    for (let i = 0; i < valores.length; i++) {
        arrVal.push(valores[i].innerText);
        botoes[i].addEventListener('click', function(){
            console.log(valores[i].innerText);
        }) 
    }
    
    console.log(arrVal);  
}