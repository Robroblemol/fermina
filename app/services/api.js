import { create } from 'apisauce';

export default (token = null) => create({
	// baseURL: 'https://api.gearph.co/api',
	baseURL: 'http://192.168.1.13:5000',
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json',
		'Authorization': token
	},
});
