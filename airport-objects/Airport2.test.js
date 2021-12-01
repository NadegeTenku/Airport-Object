const Airport = require('./Airport2')

describe('Airport object', () => {
	const testAirport = new Airport("DFW")
	const testAirport2 = new Airport("CDG")

	test('airport has a name', () => {
		expect(testAirport.name).toBe("DFW")
		expect(testAirport2.name).toBe("CDG")
	})

	// test('airports have a country and city', (done) => {
	// 	//run getInfo method
	// 	testAirport.getInfo((err, info) => {
	// 	//log this airport info to console
	// 	console.log(info)
	// 	//expect error to be null
	// 	expect(err).toBeNull()
	// 	//expect the airport country to be FR
	// 	expect(info.country).toEqual('US')
	// 	expect(info.city).toEqual('Dallas-Fort Worth')
	// 	console.log(`${info.city} and ${info.country}`)
	// 	//end asynchrounous test
	// 	done()
	// })

	test('airports have a city', () => {
		const CDG = new Airport('CDG')
		return CDG.getInfo()
			.then(info => {
				expect(info.city).toEqual('Paris')
				console.log(`${info.city}, ${info.state} and ${info.country}`)
			})
			.catch(err => {
				expect(err).toBeNull()
			})
	})

	test('can get information like the city from an airport instance', async () => {
		const CDG = new Airport('CDG')
		const airport = await CDG.getInfo()
		expect(airport.city).toEqual('Paris')
	})
})
