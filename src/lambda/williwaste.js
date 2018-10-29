export function handler(event, context, callback) {
	const { differenceInCalendarWeeks, differenceInWeeks } = require('date-fns')
	// const TODAY = new Date('2018-10-21') // should say next week
	// const TODAY = new Date('2018-10-27') // should say next week
	const TODAY = new Date()
	const KNOWN_DELIVERY_DATE = new Date('2012-05-06') // new Date('5/6/2012')

	let distance = differenceInWeeks(TODAY, KNOWN_DELIVERY_DATE)

	let message =
		distance % 2 === 0
			? 'Recyclables are this week'
			: 'Recyclables are next week'

	// show object spread works, i.e. babel works
	// const obj = {
	// 	foo: 'bar'
	// }

	callback(null, {
		statusCode: 200,
		// body: JSON.stringify({ msg: message, ...obj })
		body: JSON.stringify({ message })
	})
}
