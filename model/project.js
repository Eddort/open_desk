import { model } from 'mongoose-decorators'
import mongoose from 'mongoose'
import fs from './decorators/fs'
@model({
	title: {
		type: String,
		required: true
	},
	userIds: {
		type:  [ mongoose.Schema.Types.ObjectId ],
		required: true
	},
	roles: {
		admin: {
			type:  [ mongoose.Schema.Types.ObjectId ],
			required: true
		},
		agent: {
			type:  [ mongoose.Schema.Types.ObjectId ],
			required: true
		},
		assessor: {
			type:  [ mongoose.Schema.Types.ObjectId ],
			required: true
		}
	},
	uid: {
		type: String,
		default: () => Math.random().toString(35).substr(2, 9),
		unique: true
	},
	avatar: {
		type: String
	},
	dateCreate: {
		type: Date,
		default: Date.now
	}
}, {
	autoIndex: true
})
export default class Project {
	@fs
	static async getNew({ title, userId }) {
		let Project = this
		if (! title) {
			const projectCnt = await Project.count()
			title = 'Новый проект'
			if (projectCnt > 0) {
				title += ' ' + (projectCnt + 1)
			}
		}
		const project = new Project({
			title,
			userIds: [ userId ],
			roles: {
				admin: [ userId ],
				agent: [ userId ],
				assessor: [ userId ]
			}
		})
		// project.userIds.push(mongoose.Types.ObjectId())
		// // console.log( mongoose.Schema.Types.ObjectId())
		return project.save()
	}
	static async getAllAvail({ userId }) {
		return this.find({ userIds: userId })
	}
	static async getByUid(uid) {
		return this.findOne({ uid })
	}
	static async getAvailProject({ uid }) {
		return this.findOne({ uid })
	}
}