const { expect } = require('@jest/globals')

const Bags = require('./Bags');

describe('Bags class', () => {
    
    test('has weight', () => {
        const testBags = new Bags(25)
        expect (testBags.weight).toBe(25)
    })
})