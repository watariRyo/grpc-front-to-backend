// package: proto
// file: user_tag.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as user_tag_pb from "./user_tag_pb";

interface IUserTagServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    listUserTag: IUserTagServiceService_IListUserTag;
    getUserTag: IUserTagServiceService_IGetUserTag;
    registerUserTag: IUserTagServiceService_IRegisterUserTag;
    updateUserTag: IUserTagServiceService_IUpdateUserTag;
    deleteUserTag: IUserTagServiceService_IDeleteUserTag;
}

interface IUserTagServiceService_IListUserTag extends grpc.MethodDefinition<user_tag_pb.ListUserTagRequest, user_tag_pb.ListUserTagResponse> {
    path: "/proto.UserTagService/ListUserTag";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_tag_pb.ListUserTagRequest>;
    requestDeserialize: grpc.deserialize<user_tag_pb.ListUserTagRequest>;
    responseSerialize: grpc.serialize<user_tag_pb.ListUserTagResponse>;
    responseDeserialize: grpc.deserialize<user_tag_pb.ListUserTagResponse>;
}
interface IUserTagServiceService_IGetUserTag extends grpc.MethodDefinition<user_tag_pb.GetUserTagRequest, user_tag_pb.GetUserTagResponse> {
    path: "/proto.UserTagService/GetUserTag";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_tag_pb.GetUserTagRequest>;
    requestDeserialize: grpc.deserialize<user_tag_pb.GetUserTagRequest>;
    responseSerialize: grpc.serialize<user_tag_pb.GetUserTagResponse>;
    responseDeserialize: grpc.deserialize<user_tag_pb.GetUserTagResponse>;
}
interface IUserTagServiceService_IRegisterUserTag extends grpc.MethodDefinition<user_tag_pb.RegisterUserTagRequest, user_tag_pb.RegisterUserTagResponse> {
    path: "/proto.UserTagService/RegisterUserTag";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_tag_pb.RegisterUserTagRequest>;
    requestDeserialize: grpc.deserialize<user_tag_pb.RegisterUserTagRequest>;
    responseSerialize: grpc.serialize<user_tag_pb.RegisterUserTagResponse>;
    responseDeserialize: grpc.deserialize<user_tag_pb.RegisterUserTagResponse>;
}
interface IUserTagServiceService_IUpdateUserTag extends grpc.MethodDefinition<user_tag_pb.UpdateUserTagRequest, user_tag_pb.UpdateUserTagResponse> {
    path: "/proto.UserTagService/UpdateUserTag";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_tag_pb.UpdateUserTagRequest>;
    requestDeserialize: grpc.deserialize<user_tag_pb.UpdateUserTagRequest>;
    responseSerialize: grpc.serialize<user_tag_pb.UpdateUserTagResponse>;
    responseDeserialize: grpc.deserialize<user_tag_pb.UpdateUserTagResponse>;
}
interface IUserTagServiceService_IDeleteUserTag extends grpc.MethodDefinition<user_tag_pb.DeleteUserTagRequest, user_tag_pb.DeleteUserTagResponse> {
    path: "/proto.UserTagService/DeleteUserTag";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_tag_pb.DeleteUserTagRequest>;
    requestDeserialize: grpc.deserialize<user_tag_pb.DeleteUserTagRequest>;
    responseSerialize: grpc.serialize<user_tag_pb.DeleteUserTagResponse>;
    responseDeserialize: grpc.deserialize<user_tag_pb.DeleteUserTagResponse>;
}

export const UserTagServiceService: IUserTagServiceService;

export interface IUserTagServiceServer {
    listUserTag: grpc.handleUnaryCall<user_tag_pb.ListUserTagRequest, user_tag_pb.ListUserTagResponse>;
    getUserTag: grpc.handleUnaryCall<user_tag_pb.GetUserTagRequest, user_tag_pb.GetUserTagResponse>;
    registerUserTag: grpc.handleUnaryCall<user_tag_pb.RegisterUserTagRequest, user_tag_pb.RegisterUserTagResponse>;
    updateUserTag: grpc.handleUnaryCall<user_tag_pb.UpdateUserTagRequest, user_tag_pb.UpdateUserTagResponse>;
    deleteUserTag: grpc.handleUnaryCall<user_tag_pb.DeleteUserTagRequest, user_tag_pb.DeleteUserTagResponse>;
}

export interface IUserTagServiceClient {
    listUserTag(request: user_tag_pb.ListUserTagRequest, callback: (error: grpc.ServiceError | null, response: user_tag_pb.ListUserTagResponse) => void): grpc.ClientUnaryCall;
    listUserTag(request: user_tag_pb.ListUserTagRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_tag_pb.ListUserTagResponse) => void): grpc.ClientUnaryCall;
    listUserTag(request: user_tag_pb.ListUserTagRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_tag_pb.ListUserTagResponse) => void): grpc.ClientUnaryCall;
    getUserTag(request: user_tag_pb.GetUserTagRequest, callback: (error: grpc.ServiceError | null, response: user_tag_pb.GetUserTagResponse) => void): grpc.ClientUnaryCall;
    getUserTag(request: user_tag_pb.GetUserTagRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_tag_pb.GetUserTagResponse) => void): grpc.ClientUnaryCall;
    getUserTag(request: user_tag_pb.GetUserTagRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_tag_pb.GetUserTagResponse) => void): grpc.ClientUnaryCall;
    registerUserTag(request: user_tag_pb.RegisterUserTagRequest, callback: (error: grpc.ServiceError | null, response: user_tag_pb.RegisterUserTagResponse) => void): grpc.ClientUnaryCall;
    registerUserTag(request: user_tag_pb.RegisterUserTagRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_tag_pb.RegisterUserTagResponse) => void): grpc.ClientUnaryCall;
    registerUserTag(request: user_tag_pb.RegisterUserTagRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_tag_pb.RegisterUserTagResponse) => void): grpc.ClientUnaryCall;
    updateUserTag(request: user_tag_pb.UpdateUserTagRequest, callback: (error: grpc.ServiceError | null, response: user_tag_pb.UpdateUserTagResponse) => void): grpc.ClientUnaryCall;
    updateUserTag(request: user_tag_pb.UpdateUserTagRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_tag_pb.UpdateUserTagResponse) => void): grpc.ClientUnaryCall;
    updateUserTag(request: user_tag_pb.UpdateUserTagRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_tag_pb.UpdateUserTagResponse) => void): grpc.ClientUnaryCall;
    deleteUserTag(request: user_tag_pb.DeleteUserTagRequest, callback: (error: grpc.ServiceError | null, response: user_tag_pb.DeleteUserTagResponse) => void): grpc.ClientUnaryCall;
    deleteUserTag(request: user_tag_pb.DeleteUserTagRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_tag_pb.DeleteUserTagResponse) => void): grpc.ClientUnaryCall;
    deleteUserTag(request: user_tag_pb.DeleteUserTagRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_tag_pb.DeleteUserTagResponse) => void): grpc.ClientUnaryCall;
}

export class UserTagServiceClient extends grpc.Client implements IUserTagServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public listUserTag(request: user_tag_pb.ListUserTagRequest, callback: (error: grpc.ServiceError | null, response: user_tag_pb.ListUserTagResponse) => void): grpc.ClientUnaryCall;
    public listUserTag(request: user_tag_pb.ListUserTagRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_tag_pb.ListUserTagResponse) => void): grpc.ClientUnaryCall;
    public listUserTag(request: user_tag_pb.ListUserTagRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_tag_pb.ListUserTagResponse) => void): grpc.ClientUnaryCall;
    public getUserTag(request: user_tag_pb.GetUserTagRequest, callback: (error: grpc.ServiceError | null, response: user_tag_pb.GetUserTagResponse) => void): grpc.ClientUnaryCall;
    public getUserTag(request: user_tag_pb.GetUserTagRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_tag_pb.GetUserTagResponse) => void): grpc.ClientUnaryCall;
    public getUserTag(request: user_tag_pb.GetUserTagRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_tag_pb.GetUserTagResponse) => void): grpc.ClientUnaryCall;
    public registerUserTag(request: user_tag_pb.RegisterUserTagRequest, callback: (error: grpc.ServiceError | null, response: user_tag_pb.RegisterUserTagResponse) => void): grpc.ClientUnaryCall;
    public registerUserTag(request: user_tag_pb.RegisterUserTagRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_tag_pb.RegisterUserTagResponse) => void): grpc.ClientUnaryCall;
    public registerUserTag(request: user_tag_pb.RegisterUserTagRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_tag_pb.RegisterUserTagResponse) => void): grpc.ClientUnaryCall;
    public updateUserTag(request: user_tag_pb.UpdateUserTagRequest, callback: (error: grpc.ServiceError | null, response: user_tag_pb.UpdateUserTagResponse) => void): grpc.ClientUnaryCall;
    public updateUserTag(request: user_tag_pb.UpdateUserTagRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_tag_pb.UpdateUserTagResponse) => void): grpc.ClientUnaryCall;
    public updateUserTag(request: user_tag_pb.UpdateUserTagRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_tag_pb.UpdateUserTagResponse) => void): grpc.ClientUnaryCall;
    public deleteUserTag(request: user_tag_pb.DeleteUserTagRequest, callback: (error: grpc.ServiceError | null, response: user_tag_pb.DeleteUserTagResponse) => void): grpc.ClientUnaryCall;
    public deleteUserTag(request: user_tag_pb.DeleteUserTagRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_tag_pb.DeleteUserTagResponse) => void): grpc.ClientUnaryCall;
    public deleteUserTag(request: user_tag_pb.DeleteUserTagRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_tag_pb.DeleteUserTagResponse) => void): grpc.ClientUnaryCall;
}
