const { TestWatcher } = require('@jest/core')
const Passengers = require ('./Pasengers')
describe('Passengers class', () => {
    test('has age', () => {
        const testPassengers = new Passengers (60)
    console.log('result '+testPassengers.valid_age, 'recommended entry should be the first batch')()
        expect (testPassengers.valid_age()).toBeTruthy()
    }) 
    test('has age', () => {
        const testPassengers = new Passengers (59)
    console.log('result' +testPassengers.valid-age(), 'recommended entry should be the second batch'())
        expect (testPassengers.valid_age()).toBeFalsy
    })
})