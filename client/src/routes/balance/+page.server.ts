import { HttpStatusCodes400 } from '$enum/httpStatusCode';
import { fail, type Actions } from '@sveltejs/kit';
export const actions: Actions = {
	registerBalance: async ({ fetch, request, cookies, url, locals }) => {
		const form = await request.formData();
		const name = form.get('name');
		const classification = form.get('classification');
		const tag = form.get('tag');
		const amount = form.get('amount');

		await new Promise((resolve) => setTimeout(resolve, 1000));

		if (!name) {
			return fail(HttpStatusCodes400.BAD_REQUEST, { nameMissing: true });
		}
		if (!amount) {
			return fail(HttpStatusCodes400.BAD_REQUEST, { amountMissing: true });
		}

		console.log(name);
		console.log(classification);
		console.log(tag);
		console.log(amount);
	}
};
