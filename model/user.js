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
	}
});

class User {
	@fs
	static getNew = async function (header) {
		let Task = this;
		let task = new Task({
			header,
			body: 'Hello'
		})
		return task.save()
	}
	static getSessionUser(_id) {
		return this.findOne({_id: mongoose.Types.ObjectId(_id)})
	}
}

schema.plugin(loadClass, User);
const m = mongoose.model('User', schema);

export default m
