/*
Função 

blocos de códigos para reaproveitar 


*/


function sigla(){
    console.log("IFRN");
}


sigla();

//Função sem retorno

function instituicao (){
    return "ifrn"
}


let nome = instituicao();
console.log(nome); 

console.log(instituicao());


/*
Função sem retorno com paramentros
*/


function soma(nume_1, nume_2){
    console.log(nume_1 + nume_2);
}

console.log(soma(10, 5));


/*
function com retorno e paramentro

*/


function subtracao(num1, num2){
    return num1 - num2;
}

console.log(subtracao(500, 1000));


/*
Funções com parametros opcionais
*/


function cadastro(usuario, senha){
    console.log(` ${usuario} - ${senha} `);
}

cadastro("Guilherme" , "123456");


function cadastro_opcional(usuario, senha= "123456"){
    console.log(`${usuario} - ${senha}`);
}

cadastro_opcional("Guilherme", "123456789");
cadastro_opcional("Guilherme");



/*
Função anonima 
- Função sem nome 
- Função para ser executada naquele instante e que pode ser atribuida
*/



let instituicaos = function (){
    console.log("IFRN");
}

instituicaos();


// Executar uma função anonima 

(function (){
    console.log("Canguratema")
})();


//arrow function

()=>{
    console.log("TSI");

}


let curso = () => {
    console.log("TSI")
}

curso();


let periodo = () => console.log("5");

let periodo_atual = () => "5";



