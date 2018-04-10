import mongoose from 'mongoose'
 
const taskSchema = new mongoose.Schema({
	header: {
		type: String,
		required: true
	},
	assigned: {
		type: mongoose.Schema.Types.ObjectId
	},
	author: {
		type: mongoose.Schema.Types.ObjectId
	},
	body: {
		type: String
	},
	dateCreate: {
		type: Date,
		default: Date.now
	}
});

taskSchema.statics.getNew = async function (header) {
	let Task = this;
	let task = new Task({
		header,
		body: 'Hello'
	})
	return task.save()
}


export default mongoose.model('Task', taskSchema);
