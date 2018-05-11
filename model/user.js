//@flow
import mongoose, { Schema } from 'mongoose'
import type { ObjectId } from 'mongoose'
import fs from './decorators/fs'

export const UserSchema = new Schema({
	name: {
		type: String
	},
	dateCreate: {
		type: Date,
		default: Date.now
	},
	uid: {
		type: String,
		unique: true
	},
	avatarUrl: String
})

export class User /* :: extends Mongoose$Document */ {
	@fs
	uid: ?string
	avatarUrl: ?string
	/**
	 * @param  {ObjectId} _id
	 * @returns User
	 */
	static async getSessionUser (_id: ObjectId): (?User | Promise<?User>) {
		const user = await this.findOne({_id})
		if (user && !user.uid) {
			user.uid = Math.random()
				.toString(35)
				.substr(2, 9).toString()
			return user.save()
		}
		return user
	}
}

UserSchema.loadClass(User)
export default mongoose.model('User', UserSchema)