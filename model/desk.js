import { model } from 'mongoose-decorators'
import mongoose from 'mongoose'
import Task from './task'
const COL_FIELD_NAME = 'quotes'

@model({
	header: {
		type: String,
		required: true
	},
	projectId: mongoose.Schema.Types.ObjectId,
	uid: {
		type: String,
		default: () => Math.random().toString(35).substr(2, 9),
		unique: true
	},
	dateCreate: {
		type: Date,
		default: Date.now
	},
	columns: {
		type: Array,
		default: [
			'backlog',
			'in progress',
			'done'
		]
	}
}, {
	autoIndex: true
})
export default class Desk {
	static async getNew({ header, projectId }) {
		let Desk = this
		const desk = new Desk({ header, projectId })
		return desk.save()
	}
	static async getOneByProjectId({projectId, _id, user}) {
		let Desk = this
		const desk = await Desk.findOne({projectId, _id})
		const tasks = await Task.getAllDeskTasks(desk._id)
		return {
			[COL_FIELD_NAME]: tasks,
			authors: {
				[user.uid]: user
			}
		}
		
	}
	prepareDataForView() {
		return this.columns.reduce((accum, col) => {
			accum[col] = {}
			return accum
		}, {})
	}
}