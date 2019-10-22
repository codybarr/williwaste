const williwaste = require('../lib/williwaste')

module.exports = (req, res) => {
	const { query } = req

	try {
		const message = williwaste()
		return res.status(200).json(message)
	} catch (err) {
		return res.status(400).send('Something went wrong. Try again.')
	}
}
