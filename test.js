const { differenceInCalendarWeeks, differenceInWeeks } = require('date-fns')
// const today = new Date().getDate()
const TODAY = new Date('2018-11-10')
const KNOWN_DELIVERY_DATE = new Date('2012-05-06') // new Date('5/6/2012')

let distance = differenceInWeeks(TODAY, KNOWN_DELIVERY_DATE)

let message =
	distance % 2 === 0
		? 'Recycleables are this week'
		: 'Recycleables are next week'

console.log(distance)
console.log(message)
