import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ cookies, locals, fetch }) => {
	const accessToken = cookies.get('access_token');
	if (!accessToken) {
		return {
			user: null
		};
	}

	const response = await fetch('/api/get/user', {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json'
		}
	});

	const responseJson = await response.json();
	console.log(responseJson);

	if (responseJson.ok) {
		const sessionID = cookies.get('session_id');
		locals.user = {
			userID: responseJson.grpcResponse.userID,
			sessionID: sessionID || '',
			isPrivacyChecked: true
		};
		const user = locals.user;
		return {
			user
		};
	} else {
		return {
			user: null
		};
	}
};
