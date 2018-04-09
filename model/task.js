import mongoose from 'mongoose'
 
const taskSchema = mongoose.Schema({
	header: {
		type: String,
		required: true
	}
});

taskSchema.statics.getNew = async function (header) {
	let Task = this;
	let task = new Task({
		header
	})
	return task.save()
}


export default mongoose.model('Task', taskSchema);
