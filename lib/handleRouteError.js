export default (ctx) => (req, res, next) => {
	const routePromise = ctx(req, res, next);
	if (routePromise.catch) {
		routePromise.catch(err => next(err));
	}
}