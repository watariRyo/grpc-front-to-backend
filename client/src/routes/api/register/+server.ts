import { json, type RequestHandler } from '@sveltejs/kit';
import { apiClient, ApiError, createCustomApiError } from '../apiClient';
import { BASE_URL } from '$env/static/private';
import { HttpStatusCodes400 } from '../httpStatusCode';

export const POST: RequestHandler = async ({ request }) => {
	const data = await request.json();
	if (!data.userID) {
		const message = 'Username is required!';
		return json({
			ok: false,
			grpcResponse: createCustomApiError(message, HttpStatusCodes400.BAD_REQUEST)
		});
	}
	if (!data.password) {
		const message = 'Password is required!';
		return json({
			ok: false,
			grpcResponse: createCustomApiError(message, HttpStatusCodes400.BAD_REQUEST)
		});
	}
	if (data.password !== data.passwordConfirm) {
		const message = 'Password mismatch';
		return json({
			ok: false,
			grpcResponse: createCustomApiError(message, HttpStatusCodes400.BAD_REQUEST)
		});
	}
	const { userID, password } = data;

	const response = await apiClient(`${BASE_URL}/api/register/user`, {
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
