class Person {
    constructor(name){
        this.name = name
        this.bags = []
    }
    addBag(bag){
        this.bags.push(bag)
    }
}
// let p1 = new Person('Sara")
// console.log(p1 instanceof Person)
module.exports = Person;