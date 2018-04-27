import mongoose from 'mongoose'
import loadClass from 'mongoose-class-wrapper'
import fs from './decorators/fs'

const schema = new mongoose.Schema({
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
});

class User {
	@fs
	static async getSessionUser(_id) {
		const user = await this.findOne({_id: mongoose.Types.ObjectId(_id)})
		if (user && ! user.uid) {
			user.uid = Math.random().toString(35).substr(2, 9)
			return user.save()
		}
		return user
	}
}

schema.plugin(loadClass, User);
const m = mongoose.model('User', schema);

export default m
