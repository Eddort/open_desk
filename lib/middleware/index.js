import react from './react'
import { User } from '../../model'
import hre from '../handleRouteError'

/**
 * Root dep
 * @param  {} req
 * @param  {} res
 * @param  {} next
 */
export default hre(async (req, res, next) => {
	res.react = react
	
	const user = await User.getSessionUser(req.headers['target-user'])
	
	req.o = {
		user
	}
	
	next()
})
