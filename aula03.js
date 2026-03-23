let lista_1 = [1,5,0,6];
let lista_2 = [10.6,3.4,6.9,7.0];
let lista_3 = ["Segunda", "Terça", "Quarta" , "Quinta"];
let lista_5 = [true, false , true, false];
let lista_6 = [10, 9.0, false, "Dispositivos moveis"];

// Acessando e alterando
console.log(lista_3[1]);

lista_3[1] = "Terça-feira";
console.log(lista_3[1]); // corrigido

console.log(lista_6[3][1]); // pega letra da string

// Length
console.log(lista_3.length); // corrigido (era lista_4)

// Funções
lista_1.push(77);
console.log(lista_1);

lista_1.unshift(5);
console.log(lista_1);

lista_1.pop();
console.log(lista_1);

// indexOf
console.log(lista_1.indexOf(10));
console.log(lista_1.indexOf(-10));

// splice
let posicao = lista_1.indexOf(5); // exemplo
if (posicao !== -1) {
    lista_1.splice(posicao, 1);
}
console.log(lista_1);

// Desestruturação
let lista_7 = [5,10,-3];

let [numero_1, numero_2, numero_3]= lista_7;
console.log(numero_1);

// Spread
let lista_8 = [6,4,8];
let lista_9 = [3,4,9, ...lista_8];

console.log(lista_9);

//sort ordena elementos
console.log(lista_9.sort())



/*
função map 
- permite realizar uma determinda operação com cade elemento da lista, e retorna uma lista de mesmo tamanho com todos os valores atualizados
*/
let lista_10 = [10,2,5, 12, -5];

let resultado = lista_10.map(function (num) {
    return num + 2;
});

console.log(resultado);


/*
Função filter()
- Ele retorna uma nova lista que satisfazem uma condição
*/

resultado = lista_10.filter(function (num){
    return num > 0;
}); 
console.log(resultado);



/*
Função reduce
- Reduzir a lista em apenas 1 valor, atraves de uma operação desejada 

*/

resultado = lista_10.reduce(function(num, acumulador){
    return acumulador + num;
}, 0);

console.log(resultado);

/*
Function 
- 
*/