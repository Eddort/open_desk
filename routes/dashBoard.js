import express from 'express'
import { data } from 'dnd-desk'
import { Project } from '../model'
import hre from '../lib/handleRouteError'

const $ = express.Router()

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

export default $