import type { Actions } from '@sveltejs/kit';
export const actions: Actions = {
	registerBalance: async ({ fetch, request, cookies, url, locals }) => {
		const form = await request.formData();
		const name = form.get('name');
		const classification = form.get('classification');
		const tag = form.get('tag');

		console.log(name);
		console.log(classification);
		console.log(tag);
	}
};
