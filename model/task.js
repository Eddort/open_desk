//@flow
import mongoose, { Schema } from 'mongoose'
import type { ObjectId } from 'mongoose'

const random = (max, min) =>
	Math.floor(Math.random() * (max - min)) + min

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
	/**
	 * Создать новый таск и сгенерить тайтл если нужно
	 * @param  {} {column
	 * @param  {} deskId
	 * @param  {} projectId
	 * @param  {} content
	 * @param  {} authorId
	 * @param  {} url
	 * @param  {Object} header}
	 * @returns Promise
	 */
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
		const countTasks = await Task.count({ projectId, authorId })
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
	/**
	 * @param  {ObjectId} deskId
	 * @returns Promise
	 */
	static findAllDeskTasks (deskId: ObjectId): Promise<Array<Task>> {
		return this.find({ deskId })
	}
	/**
	 * Получить все таски для выбранного деск
	 * @param  {ObjectId} deskId
	 * @returns Object
	 */
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
	static async _genRandomTasks (
		count: number,
		columns: Array<string>,
		opts: Object
	) {
		const max = count
		while (count) {
			const column = columns[random(0, max)]
			await this.getNew(Object.assign({}, opts, { column }))
			count--
		}
	}
}

TaskSchema.loadClass(Task)
export default mongoose.model('Task', TaskSchema)
