const Person = require('./Person');
const Bag = require('./Bag');

describe('Person', () => {
    const testPerson = new Person("Joe")
    const testBag = new Bag(12)

    test('has a name', ()=> {
        expect(testPerson.name).toBe("Joe")
    })

    test('has a bag', () => {
        expect(testPerson.bags.length).toBe(0)
        testPerson.addBag(testBag)
        expect(testPerson.bags.length).toBe(1)
        //expect(testBag.bags[0]).toBe(testBag)

    })
})
