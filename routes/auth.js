import { Router } from 'express'
const $ = Router()

$.get('/', (req, res) => {
	const { url } = req;
	return res.react({
		url
	})
})

$.get('/desk', (req, res) => {
	const { url } = req;
	return res.react({
		url
	})
})

export default $