import express from 'express'
const $ = express.Router()
import { data } from 'dnd-desk'
import { Project } from '../model'
import hre from '../lib/handleRouteError'
$.get('/', hre(async (req, res) => {
	const { url } = req;
	const projects = await Project.getAllAvail({ userId: req.o.user._id })
	return res.react({
		url,
		initialState: {
			user: req.o.user,
			projects
		}
	})
}))

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


$.post('/add', hre(async (req, res) => {
	console.log('2222222222222222222222')
	const project = await Project.getNew({ userId: req.o.user._id })
	res.json({project})
}))

export default $