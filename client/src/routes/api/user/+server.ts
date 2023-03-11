import { UserServiceClient } from '../../../proto/user_grpc_pb';
import { RegisterUserRequest, type RegisterUserResponse } from '$proto/user_pb';
import * as grpc from '@grpc/grpc-js';
import { redirect, type RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = () => {
	const client = new UserServiceClient('http://localhost:8080', grpc.credentials.createInsecure());
	const req = new RegisterUserRequest();

	req.setUserId('AAA');
	req.setPassword('BBB');

	const res = new Promise<RegisterUserResponse>((resolve, reject) => {
		console.log('Send Client');
		client.registerUser(req, (err, response) => {
			if (err) {
				return reject(err);
			}
			console.log('Received');
			return resolve(response);
		});
	});
	console.log(res);
	throw redirect(307, `http://localhost:5173`);
};
