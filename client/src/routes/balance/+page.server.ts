import { HttpStatusCodes300, HttpStatusCodes400 } from '$enum/httpStatusCode';
import type { Balance } from '$lib/model/balance';
import { error, fail, json, redirect, type Actions } from '@sveltejs/kit';
export const actions: Actions = {
	registerBalance: async ({ fetch, request, cookies, url, locals }) => {
		const form = await request.formData();
		const name = form.get('name');
		const classification = form.get('classification');
		const tag = form.get('tag');
		const amount = form.get('amount');
		const occurrenceDate = form.get('occurrence_date');

		await new Promise((resolve) => setTimeout(resolve, 1000));

		if (!name) {
			return fail(HttpStatusCodes400.BAD_REQUEST, { nameMissing: true });
		}
		if (!amount) {
			return fail(HttpStatusCodes400.BAD_REQUEST, { amountMissing: true });
		}
		if (!occurrenceDate) {
			return fail(HttpStatusCodes400.BAD_REQUEST, { occurrenceDateMissing: true });
		}

		if (isNaN(new Date(occurrenceDate.toString()).getTime())) {
			return fail(HttpStatusCodes400.BAD_REQUEST, { occurrenceInvalidDate: true });
		}

		const formatForDate = new Date(occurrenceDate.toString());
		const requestDate = formatForDate.toISOString().split('T')[0].replaceAll('-', '');

		const response = await fetch('/api/balance', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				name,
				classification,
				tag,
				amount,
				occurrenceDate: requestDate
			})
		});
		const responseJson = await response.json();
		if (responseJson.ok) {
			return responseJson.grpcResponse;
		} else {
			throw error(responseJson.grpcResponse.status, {
				message: responseJson.grpcResponse.serverErrorContent.message
			});
		}
	},
	updateBalance: async ({ fetch, request, cookies, url, locals }) => {
		const form = await request.formData();
		const id = form.get('id');
		const name = form.get('name');
		const classification = form.get('classification');
		const tag = form.get('tag');
		const amount = form.get('amount');
		const occurrenceDate = form.get('occurrence_date');

		await new Promise((resolve) => setTimeout(resolve, 1000));

		if (!name) {
			return fail(HttpStatusCodes400.BAD_REQUEST, { nameMissing: true });
		}
		if (!amount) {
			return fail(HttpStatusCodes400.BAD_REQUEST, { amountMissing: true });
		}
		if (!occurrenceDate) {
			return fail(HttpStatusCodes400.BAD_REQUEST, { occurrenceDateMissing: true });
		}

		if (isNaN(new Date(occurrenceDate.toString()).getTime())) {
			return fail(HttpStatusCodes400.BAD_REQUEST, { occurrenceInvalidDate: true });
		}

		const formatForDate = new Date(occurrenceDate.toString());
		const requestDate = formatForDate.toISOString().split('T')[0].replaceAll('-', '');

		const response = await fetch('/api/balance', {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				id,
				name,
				classification,
				tag,
				amount,
				occurrenceDate: requestDate
			})
		});
		const responseJson = await response.json();

		console.log(responseJson);

		if (responseJson.ok) {
			return responseJson.grpcResponse;
		} else {
			throw error(responseJson.grpcResponse.status, {
				message: responseJson.grpcResponse.serverErrorContent.message
			});
		}
	}
};
