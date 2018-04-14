import express from 'express'
const $ = express.Router()

$.get('/', (req, res) => {
	const { url } = req;
	return res.react({
		url
	})
})

export default $