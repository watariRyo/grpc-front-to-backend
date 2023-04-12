import { json, type RequestHandler } from '@sveltejs/kit';
import { apiClient, ApiError } from '../apiClient';
import { BASE_URL } from '$env/static/private';
import { access } from 'fs';

export const GET: RequestHandler = async ({ cookies }) => {
	const accessToken = cookies.get('access_token');
	const sessionID = cookies.get('session_id');

	const response = await apiClient(`${BASE_URL}/api/list/incomeAndExpenditure`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: accessToken || ''
		},
		body: JSON.stringify({
			session_id: sessionID
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

export const POST: RequestHandler = async ({ request, cookies }) => {
	const data = await request.json();
	const accessToken = cookies.get('access_token');
	const sessionID = cookies.get('session_id');

	const response = await apiClient(`${BASE_URL}/api/register/incomeAndExpenditure`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: accessToken || ''
		},
		body: JSON.stringify({
			name: data.name,
			amount: data.amount,
			occurrence_date: data.occurrenceDate,
			user_tag_id: data.tag,
			classification: data.classification,
			session_id: sessionID
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
