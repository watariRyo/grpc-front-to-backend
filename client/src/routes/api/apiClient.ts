import type { HttpStatusCodes } from '../../lib/enum/httpStatusCode';

export type ErrorResponseSchema = {
	code?: number;
	message?: string;
	details?: [];
};

export class ApiError extends Error {
	name: string;
	url?: string;
	status?: number;
	statusText?: string;
	serverErrorContent?: ErrorResponseSchema;
	constructor(response?: Response, serverErrorContent?: ErrorResponseSchema) {
		super(response?.statusText || 'network error');
		this.name = 'API Error';
		this.status = response?.status;
		this.statusText = response?.statusText;
		this.url = response?.url;
		this.serverErrorContent = serverErrorContent;
	}
	serialize() {
		return Object.assign({}, this);
	}
}

export const createCustomApiError = (message: string, code: HttpStatusCodes) => {
	const serverErrorContent = {
		message
	};
	const apiError = new ApiError(undefined, serverErrorContent);
	apiError.status = code;
	return apiError;
};

export const apiClient = async (endPoint: RequestInfo, config: RequestInit) => {
	const response = await fetch(endPoint, {
		mode: 'cors',
		credentials: 'include', // サイトを跨ぐCookieの保持に必須
		headers: {
			...config.headers
		},
		...config
	}).catch(() => {
		return Promise.reject(new ApiError());
	});

	const contentType = response.headers.get('content-type') || '';

	if (!response.ok) {
		const serverErrorContent = isJson(contentType)
			? ((await response.json()) as ErrorResponseSchema)
			: undefined;
		return new ApiError(response, serverErrorContent);
	} else {
		return await response.json();
	}
};

const isJson = (contentType: string) => contentType.includes('application/json');
