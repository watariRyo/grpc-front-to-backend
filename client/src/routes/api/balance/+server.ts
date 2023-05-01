import { json, type RequestHandler } from '@sveltejs/kit';
import { apiClient, ApiError } from '../apiClient';
import { BASE_URL } from '$env/static/private';
import { access } from 'fs';

export const GET: RequestHandler = async ({ cookies, url }) => {
	const accessToken = cookies.get('access_token');
	const sessionID = cookies.get('session_id');

	const queries = url.searchParams;

	const today = new Date();
	const year = today.getFullYear();
	const month = ('00' + (today.getMonth() + 1)).slice(-2);
	const day = ('00' + today.getDate()).slice(-2);
	const defaultDate = year + '-' + month + '-' + day;

	const occurrenceDate = queries.has('occurenceDate') ? queries.get('occurenceDate') : defaultDate;

	const response = await apiClient(`${BASE_URL}/api/list/incomeAndExpenditure`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: accessToken || ''
		},
		body: JSON.stringify({
			session_id: sessionID,
			occurrence_date: occurrenceDate
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

export const PUT: RequestHandler = async ({ request, cookies }) => {
	const data = await request.json();
	const accessToken = cookies.get('access_token');
	const sessionID = cookies.get('session_id');

	const response = await apiClient(`${BASE_URL}/api/update/incomeAndExpenditure`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: accessToken || ''
		},
		body: JSON.stringify({
			id: data.id,
			amount: data.amount,
			name: data.name,
			occurrence_date: data.occurrenceDate,
			user_tag_id: data.tag,
			classification: data.classification,
			session_id: sessionID
		})
	});

	console.log(response);

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
