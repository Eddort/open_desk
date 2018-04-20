import { Router } from 'express'
const $ = Router()

$.get('/', (req, res) => {
	return res.redirect('/auth/login')
})

$.get('/login', (req, res) => {
	const { url } = req;
	const { user } = req.o
	if (user) {
		return res.redirect('/')
	}

	return res.react({
		url
	})
})

$.get('/signup', (req, res) => {
	const { url } = req
	const { user } = req.o
	if (user) {
		return res.redirect('/')
	}
	return res.react({
		url
	})
})

export default $