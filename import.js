import sigla from "./exp_varialvel01.js";
import instituto  from "./exp_fun01.js";
import quadruplo from "./exp_fun02.js";
import disciplina from "./exp_obj01.js";
import varios from "./exp_varios_01.js"
import {quadrado} from "./exp_s_defult_func.js"

console.log(sigla);
console.log(instituto());

quadruplo(10);

console.log(disciplina.nome);
console.log(disciplina.sigla);
console.log(disciplina.carga_horaria);
console.log(varios.nome);
console.log(varios.local());
console.log(varios.soma(4,6))
console.log(varios.notas[0]);

console.log(quadrado(3));