import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ cookies, locals, fetch }) => {
	const accessToken = cookies.get('access_token');
	if (!accessToken) {
		console.log('hoge');
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
		console.log(responseJson);
		const sessionID = cookies.get('session_id');
		locals.user = {
			userID: responseJson.grpcResponse.user_id,
			sessionID: sessionID || '',
			isPrivacyChecked: responseJson.is_privacy_checked
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
