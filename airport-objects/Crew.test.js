const { expect } = require('@jest/core')
const Crew = require('./Crew')
describe('crew class', () => {
    test ('has a pilot', () => {
        const testCrew = new Crew
        except (testCrew.valid_pilot()).toBeTrue()
    } )
})