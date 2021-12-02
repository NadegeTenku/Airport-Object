const Person = require('../Person');
const Passenger = require('./Passenger');
const CrewMember = require('./crewmember');

class Airplane {
    static airplanes = [];
    constructor(id, capacity, range, crewmember, passengers) {
        this.id = id;
        this.capacity= capacity;
        this.range = range;
        this,crewmember = [];
        this.passengers = [];
        this.constructor.airplane = [...this.constructor.airplanes, this];
    }
    board(person){
        if (!(person instanceof Person)) throw new error("must be a person to board");
        if (person instanceof Passenger) {
            this.passengers = [...this.passengers, person];

        }
        if (person instanceof crewmember) {
            this.crewmembers = [...this.crewmembers, person]
        }
    }
}

module.exports = Airplane;