/*
Objetos em JS
- É uma estrutura que possui atributos/propriedades semelhante a dicionario de outras linguagens

*/

let disciplina = {
    nome : "Desenvolvimento para dis. moveis",
    sigla : "des moveis",
    carga_horaria : 4,
    alunos : ['aluno1','aluno2','aluno3']
}


console.log(disciplina.nome)
console.log(disciplina.sigla)
console.log(disciplina.carga_horaria)
console.log(disciplina.alunos[1])

let {nome,sigla,carga_horaria,alunos} = disciplina
console.log(sigla)

/*

let nome = disciplina.nome

*/


