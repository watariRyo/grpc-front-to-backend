// package: proto
// file: user.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as user_pb from "./user_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

interface IUserServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getUser: IUserServiceService_IGetUser;
    registerUser: IUserServiceService_IRegisterUser;
    updateUser: IUserServiceService_IUpdateUser;
    deleteUser: IUserServiceService_IDeleteUser;
    loginUser: IUserServiceService_ILoginUser;
    logoutUser: IUserServiceService_ILogoutUser;
}

interface IUserServiceService_IGetUser extends grpc.MethodDefinition<user_pb.GetUserRequest, user_pb.GetUserResponse> {
    path: "/proto.UserService/GetUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.GetUserRequest>;
    requestDeserialize: grpc.deserialize<user_pb.GetUserRequest>;
    responseSerialize: grpc.serialize<user_pb.GetUserResponse>;
    responseDeserialize: grpc.deserialize<user_pb.GetUserResponse>;
}
interface IUserServiceService_IRegisterUser extends grpc.MethodDefinition<user_pb.RegisterUserRequest, user_pb.RegisterUserResponse> {
    path: "/proto.UserService/RegisterUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.RegisterUserRequest>;
    requestDeserialize: grpc.deserialize<user_pb.RegisterUserRequest>;
    responseSerialize: grpc.serialize<user_pb.RegisterUserResponse>;
    responseDeserialize: grpc.deserialize<user_pb.RegisterUserResponse>;
}
interface IUserServiceService_IUpdateUser extends grpc.MethodDefinition<user_pb.UpdateUserRequest, user_pb.UpdateUserResponse> {
    path: "/proto.UserService/UpdateUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.UpdateUserRequest>;
    requestDeserialize: grpc.deserialize<user_pb.UpdateUserRequest>;
    responseSerialize: grpc.serialize<user_pb.UpdateUserResponse>;
    responseDeserialize: grpc.deserialize<user_pb.UpdateUserResponse>;
}
interface IUserServiceService_IDeleteUser extends grpc.MethodDefinition<user_pb.DeleteUserRequest, user_pb.DeleteUserResponse> {
    path: "/proto.UserService/DeleteUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.DeleteUserRequest>;
    requestDeserialize: grpc.deserialize<user_pb.DeleteUserRequest>;
    responseSerialize: grpc.serialize<user_pb.DeleteUserResponse>;
    responseDeserialize: grpc.deserialize<user_pb.DeleteUserResponse>;
}
interface IUserServiceService_ILoginUser extends grpc.MethodDefinition<user_pb.LoginUserRequest, user_pb.LoginUserResponse> {
    path: "/proto.UserService/LoginUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.LoginUserRequest>;
    requestDeserialize: grpc.deserialize<user_pb.LoginUserRequest>;
    responseSerialize: grpc.serialize<user_pb.LoginUserResponse>;
    responseDeserialize: grpc.deserialize<user_pb.LoginUserResponse>;
}
interface IUserServiceService_ILogoutUser extends grpc.MethodDefinition<user_pb.LogoutUserRequest, user_pb.LogoutUserResponse> {
    path: "/proto.UserService/LogoutUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.LogoutUserRequest>;
    requestDeserialize: grpc.deserialize<user_pb.LogoutUserRequest>;
    responseSerialize: grpc.serialize<user_pb.LogoutUserResponse>;
    responseDeserialize: grpc.deserialize<user_pb.LogoutUserResponse>;
}

export const UserServiceService: IUserServiceService;

export interface IUserServiceServer {
    getUser: grpc.handleUnaryCall<user_pb.GetUserRequest, user_pb.GetUserResponse>;
    registerUser: grpc.handleUnaryCall<user_pb.RegisterUserRequest, user_pb.RegisterUserResponse>;
    updateUser: grpc.handleUnaryCall<user_pb.UpdateUserRequest, user_pb.UpdateUserResponse>;
    deleteUser: grpc.handleUnaryCall<user_pb.DeleteUserRequest, user_pb.DeleteUserResponse>;
    loginUser: grpc.handleUnaryCall<user_pb.LoginUserRequest, user_pb.LoginUserResponse>;
    logoutUser: grpc.handleUnaryCall<user_pb.LogoutUserRequest, user_pb.LogoutUserResponse>;
}

export interface IUserServiceClient {
    getUser(request: user_pb.GetUserRequest, callback: (error: grpc.ServiceError | null, response: user_pb.GetUserResponse) => void): grpc.ClientUnaryCall;
    getUser(request: user_pb.GetUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.GetUserResponse) => void): grpc.ClientUnaryCall;
    getUser(request: user_pb.GetUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.GetUserResponse) => void): grpc.ClientUnaryCall;
    registerUser(request: user_pb.RegisterUserRequest, callback: (error: grpc.ServiceError | null, response: user_pb.RegisterUserResponse) => void): grpc.ClientUnaryCall;
    registerUser(request: user_pb.RegisterUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.RegisterUserResponse) => void): grpc.ClientUnaryCall;
    registerUser(request: user_pb.RegisterUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.RegisterUserResponse) => void): grpc.ClientUnaryCall;
    updateUser(request: user_pb.UpdateUserRequest, callback: (error: grpc.ServiceError | null, response: user_pb.UpdateUserResponse) => void): grpc.ClientUnaryCall;
    updateUser(request: user_pb.UpdateUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.UpdateUserResponse) => void): grpc.ClientUnaryCall;
    updateUser(request: user_pb.UpdateUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.UpdateUserResponse) => void): grpc.ClientUnaryCall;
    deleteUser(request: user_pb.DeleteUserRequest, callback: (error: grpc.ServiceError | null, response: user_pb.DeleteUserResponse) => void): grpc.ClientUnaryCall;
    deleteUser(request: user_pb.DeleteUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.DeleteUserResponse) => void): grpc.ClientUnaryCall;
    deleteUser(request: user_pb.DeleteUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.DeleteUserResponse) => void): grpc.ClientUnaryCall;
    loginUser(request: user_pb.LoginUserRequest, callback: (error: grpc.ServiceError | null, response: user_pb.LoginUserResponse) => void): grpc.ClientUnaryCall;
    loginUser(request: user_pb.LoginUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.LoginUserResponse) => void): grpc.ClientUnaryCall;
    loginUser(request: user_pb.LoginUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.LoginUserResponse) => void): grpc.ClientUnaryCall;
    logoutUser(request: user_pb.LogoutUserRequest, callback: (error: grpc.ServiceError | null, response: user_pb.LogoutUserResponse) => void): grpc.ClientUnaryCall;
    logoutUser(request: user_pb.LogoutUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.LogoutUserResponse) => void): grpc.ClientUnaryCall;
    logoutUser(request: user_pb.LogoutUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.LogoutUserResponse) => void): grpc.ClientUnaryCall;
}

export class UserServiceClient extends grpc.Client implements IUserServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getUser(request: user_pb.GetUserRequest, callback: (error: grpc.ServiceError | null, response: user_pb.GetUserResponse) => void): grpc.ClientUnaryCall;
    public getUser(request: user_pb.GetUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.GetUserResponse) => void): grpc.ClientUnaryCall;
    public getUser(request: user_pb.GetUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.GetUserResponse) => void): grpc.ClientUnaryCall;
    public registerUser(request: user_pb.RegisterUserRequest, callback: (error: grpc.ServiceError | null, response: user_pb.RegisterUserResponse) => void): grpc.ClientUnaryCall;
    public registerUser(request: user_pb.RegisterUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.RegisterUserResponse) => void): grpc.ClientUnaryCall;
    public registerUser(request: user_pb.RegisterUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.RegisterUserResponse) => void): grpc.ClientUnaryCall;
    public updateUser(request: user_pb.UpdateUserRequest, callback: (error: grpc.ServiceError | null, response: user_pb.UpdateUserResponse) => void): grpc.ClientUnaryCall;
    public updateUser(request: user_pb.UpdateUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.UpdateUserResponse) => void): grpc.ClientUnaryCall;
    public updateUser(request: user_pb.UpdateUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.UpdateUserResponse) => void): grpc.ClientUnaryCall;
    public deleteUser(request: user_pb.DeleteUserRequest, callback: (error: grpc.ServiceError | null, response: user_pb.DeleteUserResponse) => void): grpc.ClientUnaryCall;
    public deleteUser(request: user_pb.DeleteUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.DeleteUserResponse) => void): grpc.ClientUnaryCall;
    public deleteUser(request: user_pb.DeleteUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.DeleteUserResponse) => void): grpc.ClientUnaryCall;
    public loginUser(request: user_pb.LoginUserRequest, callback: (error: grpc.ServiceError | null, response: user_pb.LoginUserResponse) => void): grpc.ClientUnaryCall;
    public loginUser(request: user_pb.LoginUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.LoginUserResponse) => void): grpc.ClientUnaryCall;
    public loginUser(request: user_pb.LoginUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.LoginUserResponse) => void): grpc.ClientUnaryCall;
    public logoutUser(request: user_pb.LogoutUserRequest, callback: (error: grpc.ServiceError | null, response: user_pb.LogoutUserResponse) => void): grpc.ClientUnaryCall;
    public logoutUser(request: user_pb.LogoutUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.LogoutUserResponse) => void): grpc.ClientUnaryCall;
    public logoutUser(request: user_pb.LogoutUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.LogoutUserResponse) => void): grpc.ClientUnaryCall;
}
