/**
 POO raiz

*/


class Lampada{

    #id;
    #tipo;
    #estado;

    constructor(id, tipo){
        this.#id = id;
        this.#tipo = tipo;
        this.#estado = false;
    }


    //Encapsulamento
    get getId(){
        return this.#id
    }

    set setId(id){
        this.#id = id;
    }

    get getTipo(){
        return this.#tipo;
    }

    get getEstado(){
        return this.#estado;
    }

    //Funções
    ligar(){
        this.#estado = true;
    }
    desligar(){
        this.#estado = false;
    }




}

    lamp_01 = new Lampada(1, 'led'); 
    console.log(lamp_01.getId);
    lamp_01.setId = 5;
    console.log(lamp_01.getId)

    lamp_01.ligar()
    console.log(lamp_01.getEstado);

    