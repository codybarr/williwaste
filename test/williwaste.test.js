const williwaste = require('../lib/williwaste')

// const TODAY = new Date('2018-10-21') // should say next week
// const TODAY = new Date('2018-10-27') // should say next week

test('when today is 2018-10-21, recyclables should be next week', () => {
	const today = new Date('2018-10-21')
	expect(williwaste(today)).toEqual('Recyclables are next week')
})

test('when today is 2018-10-27, recyclables should be next week', () => {
	const today = new Date('2018-10-27')
	expect(williwaste(today)).toEqual('Recyclables are next week')
})

test('when today is 2018-10-14, recyclables should be this week', () => {
	const today = new Date('2018-10-14')
	expect(williwaste(today)).toEqual('Recyclables are this week')
})

test('when today is 2018-10-20, recyclables should be this week', () => {
	const today = new Date('2018-10-20')
	expect(williwaste(today)).toEqual('Recyclables are this week')
})
