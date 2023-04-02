import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ cookies, fetch }) => {
	const accessToken = cookies.get('access_token');
	if (!accessToken) {
		return {
			user: null
		};
	}

	const balanceResponse = await fetch('/api/list/balance', {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json'
		}
	});
	const balanceResponseJson = await balanceResponse.json();

	const userTagResponse = await fetch('/api/list/userTag', {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json'
		}
	});
	const userTagResponseJson = await userTagResponse.json();

	console.log('reload');

	if (balanceResponseJson.ok && userTagResponseJson.ok) {
		const balances = balanceResponseJson.grpcResponse.income_and_expenditure_list;
		const userTags = userTagResponseJson.grpcResponse.user_tag_list;
		return {
			balances,
			userTags
		};
	} else {
		return {
			balances: [],
			userTags: []
		};
	}
};
