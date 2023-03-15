import { json, type RequestHandler } from '@sveltejs/kit';
import { apiClient, ApiError } from '../apiClient';
import { BASE_URL } from '$env/static/private';

export const POST: RequestHandler = async ({ request }) => {
	const { userID, password } = await request.json();

	const response = await apiClient(`${BASE_URL}/login`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			userID,
			password
		})
	});

	if (response instanceof ApiError) {
		return json({
			ok: false,
			grpcResponse: response
		});
	} else {
		return json({
			ok: true,
			grpcResponse: response
		});
	}
};
