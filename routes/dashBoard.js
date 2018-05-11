import express from 'express'
import { data } from 'dnd-desk'
// import { Project } from '../model'
import hre from '../lib/handleRouteError'
import { Desk } from '../model'
import { Task } from '../model'
const $ = express.Router()

$.get(
	'/',
	hre(async (req, res) => {
		const { url } = req
		console.log('22222')
		return res.react({
			url,
			initialState: {
				user: req.o.user,
				project: req.o.project
			}
		})
	})
)

$.post(
	'/',
	hre(async (req, res) => {
		res.json({
			user: req.o.user,
			project: req.o.project
		})
	})
)

$.get(
	'/desk',
	hre(async (req, res) => {
		const { url } = req
		// await Desk.getNew({header: 'TEST', projectId: req.o.project._id})
		const desk = await Desk.findOneByProjectId(req.o.project._id)
		// Task._genRandomTasks(3, desk.columns, {
		// 	column: 'backlog',
		// 	deskId: desk._id,
		// 	projectId: req.o.project._id,
		// 	content: 'test',
		// 	authorId: req.o.user.uid,
		// 	url: '/'
		// })
		const renderDesk = await Desk.getOneByProjectId({
			projectId: req.o.project._id,
			user: req.o.user,
			_id: desk._id
		})
		return res.react({
			url,
			initialState: {
				user: req.o.user,
				project: req.o.project,
				desk: renderDesk
			}
		})
	})
)

$.post(
	'/desk',
	hre(async (req, res) => {
		res.json({
			user: req.o.user,
			project: req.o.project,
			desk: data.medium
		})
	})
)

export default $
