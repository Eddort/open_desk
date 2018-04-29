//@flow
import mongoose, { Schema } from 'mongoose'
import type { ObjectId } from 'mongoose'

const TaskSchema = new Schema(
	{
		header: {
			type: String,
			required: true
		},
		uid: {
			type: String,
			default: () =>
				Math.random()
					.toString(35)
					.substr(2, 9),
			unique: true
		},
		deskId: Schema.Types.ObjectId,
		projectId: Schema.Types.ObjectId,
		assigned: {
			type: Schema.Types.ObjectId
		},
		//user uid
		authorId: {
			type: String,
			required: true
		},
		url: String,
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
	},
	{
		autoIndex: true
	}
)

class Task /* :: extends Mongoose$Document */ {
	content: string
	header: string
	uid: string
	authorId: string
	dateCreate: Date
	order: number
	column: string
	deskId: ObjectId
	projectId: ObjectId
	url: string
	static async getNew ({
		column,
		deskId,
		projectId,
		content,
		authorId,
		url,
		header
	}: Object): Promise<Task> {
		let Task = this
		const countTasks = await Task.count({ column, projectId, authorId })
		if (!header) {
			header = `Новая задача ${countTasks + 1}`
		}
		const task = new Task({
			header,
			column,
			deskId,
			projectId,
			content,
			authorId,
			url: url,
			order: countTasks + 1
		})
		return task.save()
	}
	static findAllDeskTasks (deskId: ObjectId): Promise<Array<Task>> {
		return this.find({ deskId })
	}
	static async getAllDeskTasks (deskId: ObjectId): Object {
		const tasks = await this.findAllDeskTasks(deskId)
		if (!tasks.length) {
			return {}
		}
		console.log(2222)
		return tasks.reduce((accum, task) => {
			let { column } = task

			if (!accum[column]) {
				accum[column] = []
			}
			accum[column].push(task)
			return accum
		}, {})
	}
}

TaskSchema.loadClass(Task)
export default mongoose.model('Task', TaskSchema)
