import axios from 'axios'

export default function ({url, data, method = 'post'}) {
	return axios({
		method,
		url,
		data
	});
}