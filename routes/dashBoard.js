import express from 'express'
import { data } from 'dnd-desk'
// import { Project } from '../model'
import hre from '../lib/handleRouteError'
import { Desk } from '../model'
import { Task } from '../model'
const $ = express.Router()

$.get('/', hre(async (req, res) => {
	const { url } = req;
	console.log('22222')
	return res.react({
		url,
		initialState: {
			user: req.o.user,
			project: req.o.project
		}
	})
}))

$.post('/', hre(async (req, res) => {
	res.json({
		user: req.o.user,
		project: req.o.project
	})
}))

$.get('/desk', hre(async (req, res) => {
	const { url } = req;
	const _desk = await Desk.getNew({ header: 'Test desk', projectId: req.o.project._id })
	await Task.getNew({ column: 'backlog', deskId: _desk._id, projectId:req.o.project._id, content:'test', authorId: req.o.user.uid, url:'/' })
	const desk = await Desk.getOneByProjectId({ projectId: req.o.project._id, _id: _desk._id, user: req.o.user })
	return res.react({
		url,
		initialState: {
			user: req.o.user,
			project: req.o.project,
			desk: desk
		}
	})
}))

$.post('/desk', hre(async (req, res) => {
	res.json({
		user: req.o.user,
		project: req.o.project,
		desk: data.medium
	})
}))

export default $