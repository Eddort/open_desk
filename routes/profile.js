import express from 'express'
const $ = express.Router()

$.get('/', (req, res) => {
	const { url } = req;
	return res.react({
		url,
		initialState: {
			user: req.o.user
		}
	})
})

export default $