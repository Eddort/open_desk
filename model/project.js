//@flow
import mongoose, { Schema } from 'mongoose'
import type { ObjectId } from 'mongoose'
import fs from './decorators/fs'

export const ProjectSchema = new Schema(
	{
		title: {
			type: String,
			required: true
		},
		userIds: {
			type: [mongoose.Schema.Types.ObjectId],
			required: true
		},
		roles: {
			admin: {
				type: [mongoose.Schema.Types.ObjectId],
				required: true
			},
			agent: {
				type: [mongoose.Schema.Types.ObjectId],
				required: true
			},
			assessor: {
				type: [mongoose.Schema.Types.ObjectId],
				required: true
			}
		},
		uid: {
			type: String,
			default: () =>
				Math.random()
					.toString(35)
					.substr(2, 9),
			unique: true
		},
		avatar: {
			type: String
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

export class Project /* :: extends Mongoose$Document */ {
		
	@fs
	title: string
	userIds: [ObjectId]
	roles: {
		admin: [ObjectId],
		agent: [ObjectId],
		assessor: [ObjectId]
	}
	uid: string
	avatar: string
	dateCreate: Date
	static async getNew ({ title, userId }: any) {
		let Project = this
		if (!title) {
			const projectCnt = await Project.count()
			title = 'Новый проект'
			if (projectCnt > 0) {
				title += ' ' + (projectCnt + 1)
			}
		}
		const project = new Project({
			title,
			userIds: [userId],
			roles: {
				admin: [userId],
				agent: [userId],
				assessor: [userId]
			}
		})
		// project.userIds.push(mongoose.Types.ObjectId())
		// // console.log( mongoose.Schema.Types.ObjectId())
		return project.save()
	}
	static async getAllAvail ({ userId }: any) {
		return this.find({ userIds: userId })
	}
	static async getByUid (uid: string) {
		return this.findOne({ uid })
	}
	static async getAvailProject ({ uid }: any) {
		return this.findOne({ uid })
	}
}

ProjectSchema.loadClass(Project)
export default mongoose.model('Project', ProjectSchema)
