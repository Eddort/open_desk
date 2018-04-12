import mongoose from 'mongoose'
 
const projectSchema = new mongoose.Schema({
	title: {
        type: String
    },
	dateCreate: {
		type: Date,
		default: Date.now
    },
    //пользователи (агенты) при помощи этого айди добавляют себе проект
	projectId: {
		type: mongoose.Schema.Types.ObjectId
	}
});

projectSchema.statics.getNew = async function (header) {
	let Task = this;
	let task = new Task({
		header,
		body: 'Hello'
	})
	return task.save()
}


export default mongoose.model('Project', projectSchema);
