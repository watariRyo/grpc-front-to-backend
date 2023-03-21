import { json, redirect, type RequestHandler } from '@sveltejs/kit';
import { apiClient, ApiError } from '../apiClient';
import { BASE_URL } from '$env/static/private';
import { HttpStatusCodes300 } from '$enum/httpStatusCode';

export const GET: RequestHandler = async ({ cookies }) => {
	const accessToken = cookies.get('access_token');
	const sessionID = cookies.get('session_id');

	await apiClient(`${BASE_URL}/logout`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: accessToken || ''
		},
		body: JSON.stringify({
			session_id: sessionID
		})
	});

	// 結果によらずcookie削除
	cookies.delete('access_token', { path: '/' });
	cookies.delete('refresh_token', { path: '/' });
	cookies.delete('session_id', { path: '/' });

	throw redirect(HttpStatusCodes300.TEMPORARY_REDIRECT, '/login');
};
