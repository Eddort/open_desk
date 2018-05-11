//@flow
import mongoose, { Schema } from 'mongoose'
import type { ObjectId } from 'mongoose'
import Task from './task'

const COL_FIELD_NAME = 'quotes'

export const DeskSchema = new Schema(
	{
		header: {
			type: String,
			required: true
		},
		projectId: mongoose.Schema.Types.ObjectId,
		uid: {
			type: String,
			default: () =>
				Math.random()
					.toString(35)
					.substr(2, 9),
			unique: true
		},
		dateCreate: {
			type: Date,
			default: Date.now
		},
		columns: {
			type: Array,
			default: ['backlog', 'in progress', 'done']
		}
	},
	{
		autoIndex: true
	}
)

export class Desk /* :: extends Mongoose$Document */ {
	header: string
	projectId: ObjectId
	uid: string
	dateCreate: Date
	columns: Array<string>
	_id: any
	static async getNew ({ header, projectId }: any): Promise<Desk> {
		let Desk = this
		const desk = new Desk({ header, projectId })
		return desk.save()
	}
	static async getOneByProjectId ({ projectId, _id, user }: Object): Object {
		let Desk = this
		const desk = await Desk.findOne({ projectId, _id })
		if (!desk) {
			return {}
		}
		// const tasks = desk._id
		const tasks = await Task.getAllDeskTasks(desk._id)
		if (!tasks) {
			return {}
		}
		return {
			[COL_FIELD_NAME]: tasks,
			authors: {
				[user.uid]: user
			}
		}
	}
	static async findOneByProjectId (projectId: ObjectId): Promise<any> {
		const desks = await this.find({ projectId })
			.sort({ dateCreate: -1 })
			.limit(1)
			.exec()
		if (desks.length === 0) {
			return {}
		}
		return desks[0]
	}
	prepareDataForView () {
		return this.columns.reduce((accum, col) => {
			accum[col] = {}
			return accum
		}, {})
	}
}

DeskSchema.loadClass(Desk)
export default mongoose.model('Desk', DeskSchema)
