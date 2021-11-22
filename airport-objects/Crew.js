class Crew {
    constructor(person){
        this.person = person
        this.valid_person = function () {
            if (this.person == pilot) {return true}
            else{return false}
        }
    }
}
module.exports = Crew;