class Passengers {
    constructor(age){
        this.age = age
        this.valid_age = function () {
            if (this.age >= 60) {
                return true
            }
            else {
                return false
            }
        }
    }

}

module.exports = Passengers;