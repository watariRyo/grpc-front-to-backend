import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ cookies, fetch }) => {
	const accessToken = cookies.get('access_token');
	if (!accessToken) {
		return {
			user: null
		};
	}

	const response = await fetch('/api/list/balance', {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json'
		}
	});

	const responseJson = await response.json();

	console.log(responseJson.grpcResponse);

	if (responseJson.ok) {
		const balances = responseJson.grpcResponse.income_and_expenditure_list;
		return {
			balances
		};
	} else {
		return {
			balances: []
		};
	}
};
