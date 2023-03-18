import { error, fail, redirect, type Actions } from '@sveltejs/kit';
import { HttpStatusCodes300, HttpStatusCodes400 } from '$enum/httpStatusCode';

export const actions: Actions = {
	register: async ({ fetch, request, cookies, url, locals }) => {
		const form = await request.formData();
		const userID = form.get('userID');
		const password = form.get('password');
		const passwordConfirm = form.get('password');

		await new Promise((resolve) => setTimeout(resolve, 1000));

		if (!userID) {
			return fail(HttpStatusCodes400.BAD_REQUEST, { userIDMissing: true });
		}
		if (!password) {
			return fail(HttpStatusCodes400.BAD_REQUEST, { passwordMissing: true, userID });
		}
		if (password !== passwordConfirm) {
			return fail(HttpStatusCodes400.BAD_REQUEST, { passwordMissmatch: true, userID });
		}

		const response = await fetch('/api/register', {
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
		if (responseJson.ok) {
			cookies.set('access_token', responseJson.grpcResponse.access_token);
			cookies.set('refresh_token', responseJson.grpcResponse.refresh_token);
			cookies.set('session_id', responseJson.grpcResponse.session_id);

			locals.user = {
				userID: responseJson.user_id,
				sessionID: responseJson.session_id,
				isPrivacyChecked: true
			};

			throw redirect(HttpStatusCodes300.SEE_OTHER, url.searchParams.get('redirectTo') || '/');
		} else {
			// statusごとの処理
			throw error(responseJson.grpcResponse.status, {
				message: responseJson.grpcResponse.serverErrorContent.message
			});
		}
	}
};
