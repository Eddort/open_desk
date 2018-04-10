import mongoose from 'mongoose'
 
const userSchema = new mongoose.Schema({
	name: {
        type: String
    },
	dateCreate: {
		type: Date,
		default: Date.now
	}
});

userSchema.statics.getNew = async function (header) {
	let Task = this;
	let task = new Task({
		header,
		body: 'Hello'
	})
	return task.save()
}


export default mongoose.model('Task', userSchema);
