import mongoose from 'mongoose'
import config from 'config'

const createConnection = async function () {
	const connect = await mongoose.connect(config.db.url + config.db.name, config.db.options)
	console.log(`DB: ${ config.db.name } is ready`)
	return connect
}

export default createConnection