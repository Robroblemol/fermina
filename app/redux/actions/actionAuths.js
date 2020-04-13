export const authenticateAction = (token) => ({
	type: 'AUTHENTICATE',
	token
});
export const user = (user_id) => ({
	type: 'USER',
	user_id
});
export function reauthenticate(token) {
	return (dispatch) => {
		dispatch(authenticateAction(token));
	};
}
