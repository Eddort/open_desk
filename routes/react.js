export const getIndex = (req, res) => {
	const { url } = req;
	return res.react({
		url
	})
}
