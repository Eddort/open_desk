import react from './react'

export default (req, res, next) => {
	res.react = react;
    return next();
}