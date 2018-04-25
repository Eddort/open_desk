import { model } from 'mongoose-decorators'
import mongoose from 'mongoose'

@model({
	header: {
		type: String,
		required: true
	},
	uid: {
		type: String,
		default: () => Math.random().toString(35).substr(2, 9),
		unique: true
	},
	deskId: mongoose.Schema.Types.ObjectId,
	projectId: mongoose.Schema.Types.ObjectId,
	assigned: {
		type: mongoose.Schema.Types.ObjectId
	},
	//user uid
	authorId: String,
	content: {
		type: String
	},
	column: {
		type: String,
		required: true
	},
	order: {
		type: Number,
		required: true
	},
	dateCreate: {
		type: Date,
		default: Date.now
	}
}, {
	autoIndex: true
})
export default class Task {
	static async getNew({ column, deskId, projectId, content, authorId, url }) {
		let Task = this
		const countTasks = await Task.count({ column, projectId, authorId })
		const task = new Task({
			column, deskId, projectId, content, authorId, url, order: countTasks + 1
		})
		return task.save()
	}
	static findAllDeskTasks(deskId) {
		return this.find({ deskId })
	}
	static async getAllDeskTasks(deskId) {
		const tasks = await this.findAllDeskTasks(deskId)
	}
}
