import express from 'express'
const $ = express.Router()
import { data } from 'dnd-desk'
$.get('/', (req, res) => {
	const { url } = req;
	return res.react({
		url,
		initialState: {
			user: req.o.user
		}
	})
})

$.get('/desk', (req, res) => {
	const { url } = req;
	return res.react({
		url,
		initialState: {
			user: req.o.user,
			desk: data.medium
		}
	})
})

export default $