const Airport0 = require('./Airport0')

describe('Airport0 class', () => {
    
    test('has a name', () => {
        const testname = 'DFW'
        const testAirport0 = new Airport0(testname)
        console.log('result ' +testAirport0.name)
        expect(testAirport0.name).toBe(testname)
    })

    // test('has an airportname', () => {
    //     const testAirport0 = new Airport0(BWI)
    //     console.log('result ' +testAirport0.airportname('for landing'))
    //     console.log('recommended Airport0 is BWI')
    //     expect (testAirport0.airportname()).toBe(authorized)
    // })
})