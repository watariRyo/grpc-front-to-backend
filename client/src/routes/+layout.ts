import type { LayoutLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const load: LayoutLoad = ({ data, url }) => {
	const { user } = data || {};
	if (user && url.pathname === '/login') {
		throw redirect(307, '/balance');
	}
	if (user && url.pathname === '/') {
		throw redirect(307, '/balance');
	}
	if (!user && url.pathname !== '/login') {
		if (url.pathname !== '/register') {
			throw redirect(307, '/login');
		}
	}

	return {
		user
	};
};
