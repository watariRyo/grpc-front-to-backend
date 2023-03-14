import { BASE_URL } from '$env/static/private';
import { json, type RequestHandler } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ request }) => {
	const { userID, password } = await request.json();

	const response = await fetch(`${BASE_URL}/login`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			userID,
			password
		})
	});

	const responseJson = await response.json();

	// throw redirect(307, '/');
	return json(responseJson);
};
