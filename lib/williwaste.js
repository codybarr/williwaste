module.exports = (today = new Date()) => {
	const { differenceInWeeks } = require('date-fns')

	const TODAY = today
	const KNOWN_DELIVERY_DATE = new Date('2012-05-06')
	const DISTANCE = differenceInWeeks(TODAY, KNOWN_DELIVERY_DATE)

	const message =
		DISTANCE % 2 === 0
			? 'Recyclables are this week'
			: 'Recyclables are next week'

	return message
}
