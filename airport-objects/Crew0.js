class Crew {
    constructor(name, position){
        this.name = name
        this.position = position
    }
    isPilot() {
        return this.position === 'pilot'
    }
}
module.exports = Crew;