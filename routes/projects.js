import { Project } from '../model'
import hre from '../lib/handleRouteError'
import { Router } from 'express'
const $ = Router()

export const existProject = hre(async (req, res, next) => {
	if (!req.params || !req.params.projectUid) {
		return res.send('404')
	}
	const project = await Project.getAvailProject({
		uid: req.params.projectUid
	})
	if (!project) {
		return res.send('404')
	}
	req.o.project = project
	next()
})

$.get(
	'/',
	hre(async (req, res) => {
		const { url } = req
		const projects = await Project.getAllAvail({ userId: req.o.user._id })
		return res.react({
			url,
			initialState: {
				user: req.o.user,
				projects
			}
		})
	})
)

$.post(
	'/',
	hre(async (req, res) => {
		const projects = await Project.getAllAvail({ userId: req.o.user._id })
		return res.json({
			user: req.o.user,
			projects
		})
	})
)

$.post(
	'/add',
	hre(async (req, res) => {
		const project = await Project.getNew({ userId: req.o.user._id })
		res.json({ project })
	})
)

export default $
