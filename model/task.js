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
	authorId: {
		type: String,
		required: true
	},
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
	content: String;
	static async getNew({ column, deskId, projectId, content, authorId, url, header }) {
		let Task = this
		const countTasks = await Task.count({ column, projectId, authorId })
		if (! header) {
			header = `Новая задача ${countTasks + 1}`
		}
		const task = new Task({
			header, column, deskId, projectId, content, authorId, url, order: countTasks + 1
		})
		return task.save()
	}
	static findAllDeskTasks(deskId: String) {
		this.content = {}
		return this.find({ deskId })
	}
	test(){
		this.content = 123
		
	}
	static async getAllDeskTasks(deskId: String): Object {
		const tasks = await this.findAllDeskTasks(deskId)
		tasks[0].content = 123
		if (! tasks.length) {
			return {}
		}
		return tasks.reduce((accum, task) => {
			let { column } = task
			if (! accum[column]) {
				accum[column] = []
			}
			accum[column].push(task)
			return accum
		}, {})
	}
}
