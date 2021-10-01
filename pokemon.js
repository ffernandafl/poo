/* Nombre de la clase en mayúscula */
class Pokemon {

//encapsular se hace con #

    #name = '';
    #type = '';
    #evolutions = [];

    constructor(name, type, evolutions) {
        this.#name = name;
        this.#type = type;
        this.#evolutions = evolutions;
    }

    set name (name) {
        this.#name = name;
    }

    set type (type) {
        this.#type = type;
    }

    set type (type) {
        this.#type = type;
    }

    get name () {
        return this.#name;
    }

    get type () {
        return this.#type;
    }

    get evolution () {
        return this.#evolutions;
    }

    attack() {
        return `${this.#name}, está atacando`
    }

    evolve (evolution = 0) {
        //valida que la opción exista
        const EVOLVE = this.#evolutions[evolution] || '';
        let message = 'No puedo evolucionar';

        if (EVOLVE) {
            message = `${this.#name} está evolucionando a ${EVOLVE}`
            this.#name = EVOLVE;
        }

        return message;
    }
}

const Charmander = new Pokemon (`Charmander`, 'Fire', ['Charmelon', 'Charizar']);

const Squirtle = new Pokemon ('Squirtle', 'Water', ['Wartortle', 'Blastoise']);

console.log ((`${Charmander.name} es de tipo ${Charmander.type}`));
console.log ((Charmander.attack()));
console.log(Charmander.evolve(0));
//console.log(Charmander.evolve(1));
//console.log(Charmander.evolve(5));
console.log ((`${Charmander.name} es de tipo ${Charmander.type}`));

console.log('---------------------------------');

console.log((`${Squirtle.name} es de tipo ${Squirtle.type}`));
console.log ((Squirtle.attack()));
console.log(Squirtle.evolve(0));
console.log ((`${Squirtle.name} es de tipo ${Squirtle.type}`));

console.log('---------------------------------');

//Herencia
class Typefire extends Pokemon {

    constructor(name, evolutions) {

        super(name, 'fire', evolutions);
    }

    message () {
        return `Hola, soy ${this.name} y soy de tipo fuego`;
    }

}

const charmander = new Typefire ('Charmander', ['Charmelon', 'Charizar']);
console.log(charmander.message());

charmander.name = 'Gato';
console.log(charmander.message());