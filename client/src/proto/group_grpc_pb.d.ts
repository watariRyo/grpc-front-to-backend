// package: proto
// file: group.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as group_pb from "./group_pb";

interface IGroupServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    listGroup: IGroupServiceService_IListGroup;
    getGroup: IGroupServiceService_IGetGroup;
    registerGroup: IGroupServiceService_IRegisterGroup;
    updateGroup: IGroupServiceService_IUpdateGroup;
    deleteGroup: IGroupServiceService_IDeleteGroup;
}

interface IGroupServiceService_IListGroup extends grpc.MethodDefinition<group_pb.ListGroupRequest, group_pb.ListGroupResponse> {
    path: "/proto.GroupService/ListGroup";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<group_pb.ListGroupRequest>;
    requestDeserialize: grpc.deserialize<group_pb.ListGroupRequest>;
    responseSerialize: grpc.serialize<group_pb.ListGroupResponse>;
    responseDeserialize: grpc.deserialize<group_pb.ListGroupResponse>;
}
interface IGroupServiceService_IGetGroup extends grpc.MethodDefinition<group_pb.GetGroupRequest, group_pb.GetGroupResponse> {
    path: "/proto.GroupService/GetGroup";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<group_pb.GetGroupRequest>;
    requestDeserialize: grpc.deserialize<group_pb.GetGroupRequest>;
    responseSerialize: grpc.serialize<group_pb.GetGroupResponse>;
    responseDeserialize: grpc.deserialize<group_pb.GetGroupResponse>;
}
interface IGroupServiceService_IRegisterGroup extends grpc.MethodDefinition<group_pb.RegisterGroupRequest, group_pb.RegisterGroupResponse> {
    path: "/proto.GroupService/RegisterGroup";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<group_pb.RegisterGroupRequest>;
    requestDeserialize: grpc.deserialize<group_pb.RegisterGroupRequest>;
    responseSerialize: grpc.serialize<group_pb.RegisterGroupResponse>;
    responseDeserialize: grpc.deserialize<group_pb.RegisterGroupResponse>;
}
interface IGroupServiceService_IUpdateGroup extends grpc.MethodDefinition<group_pb.UpdateGroupRequest, group_pb.UpdateGroupResponse> {
    path: "/proto.GroupService/UpdateGroup";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<group_pb.UpdateGroupRequest>;
    requestDeserialize: grpc.deserialize<group_pb.UpdateGroupRequest>;
    responseSerialize: grpc.serialize<group_pb.UpdateGroupResponse>;
    responseDeserialize: grpc.deserialize<group_pb.UpdateGroupResponse>;
}
interface IGroupServiceService_IDeleteGroup extends grpc.MethodDefinition<group_pb.DeleteGroupRequest, group_pb.DeleteGroupResponse> {
    path: "/proto.GroupService/DeleteGroup";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<group_pb.DeleteGroupRequest>;
    requestDeserialize: grpc.deserialize<group_pb.DeleteGroupRequest>;
    responseSerialize: grpc.serialize<group_pb.DeleteGroupResponse>;
    responseDeserialize: grpc.deserialize<group_pb.DeleteGroupResponse>;
}

export const GroupServiceService: IGroupServiceService;

export interface IGroupServiceServer {
    listGroup: grpc.handleUnaryCall<group_pb.ListGroupRequest, group_pb.ListGroupResponse>;
    getGroup: grpc.handleUnaryCall<group_pb.GetGroupRequest, group_pb.GetGroupResponse>;
    registerGroup: grpc.handleUnaryCall<group_pb.RegisterGroupRequest, group_pb.RegisterGroupResponse>;
    updateGroup: grpc.handleUnaryCall<group_pb.UpdateGroupRequest, group_pb.UpdateGroupResponse>;
    deleteGroup: grpc.handleUnaryCall<group_pb.DeleteGroupRequest, group_pb.DeleteGroupResponse>;
}

export interface IGroupServiceClient {
    listGroup(request: group_pb.ListGroupRequest, callback: (error: grpc.ServiceError | null, response: group_pb.ListGroupResponse) => void): grpc.ClientUnaryCall;
    listGroup(request: group_pb.ListGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: group_pb.ListGroupResponse) => void): grpc.ClientUnaryCall;
    listGroup(request: group_pb.ListGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: group_pb.ListGroupResponse) => void): grpc.ClientUnaryCall;
    getGroup(request: group_pb.GetGroupRequest, callback: (error: grpc.ServiceError | null, response: group_pb.GetGroupResponse) => void): grpc.ClientUnaryCall;
    getGroup(request: group_pb.GetGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: group_pb.GetGroupResponse) => void): grpc.ClientUnaryCall;
    getGroup(request: group_pb.GetGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: group_pb.GetGroupResponse) => void): grpc.ClientUnaryCall;
    registerGroup(request: group_pb.RegisterGroupRequest, callback: (error: grpc.ServiceError | null, response: group_pb.RegisterGroupResponse) => void): grpc.ClientUnaryCall;
    registerGroup(request: group_pb.RegisterGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: group_pb.RegisterGroupResponse) => void): grpc.ClientUnaryCall;
    registerGroup(request: group_pb.RegisterGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: group_pb.RegisterGroupResponse) => void): grpc.ClientUnaryCall;
    updateGroup(request: group_pb.UpdateGroupRequest, callback: (error: grpc.ServiceError | null, response: group_pb.UpdateGroupResponse) => void): grpc.ClientUnaryCall;
    updateGroup(request: group_pb.UpdateGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: group_pb.UpdateGroupResponse) => void): grpc.ClientUnaryCall;
    updateGroup(request: group_pb.UpdateGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: group_pb.UpdateGroupResponse) => void): grpc.ClientUnaryCall;
    deleteGroup(request: group_pb.DeleteGroupRequest, callback: (error: grpc.ServiceError | null, response: group_pb.DeleteGroupResponse) => void): grpc.ClientUnaryCall;
    deleteGroup(request: group_pb.DeleteGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: group_pb.DeleteGroupResponse) => void): grpc.ClientUnaryCall;
    deleteGroup(request: group_pb.DeleteGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: group_pb.DeleteGroupResponse) => void): grpc.ClientUnaryCall;
}

export class GroupServiceClient extends grpc.Client implements IGroupServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public listGroup(request: group_pb.ListGroupRequest, callback: (error: grpc.ServiceError | null, response: group_pb.ListGroupResponse) => void): grpc.ClientUnaryCall;
    public listGroup(request: group_pb.ListGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: group_pb.ListGroupResponse) => void): grpc.ClientUnaryCall;
    public listGroup(request: group_pb.ListGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: group_pb.ListGroupResponse) => void): grpc.ClientUnaryCall;
    public getGroup(request: group_pb.GetGroupRequest, callback: (error: grpc.ServiceError | null, response: group_pb.GetGroupResponse) => void): grpc.ClientUnaryCall;
    public getGroup(request: group_pb.GetGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: group_pb.GetGroupResponse) => void): grpc.ClientUnaryCall;
    public getGroup(request: group_pb.GetGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: group_pb.GetGroupResponse) => void): grpc.ClientUnaryCall;
    public registerGroup(request: group_pb.RegisterGroupRequest, callback: (error: grpc.ServiceError | null, response: group_pb.RegisterGroupResponse) => void): grpc.ClientUnaryCall;
    public registerGroup(request: group_pb.RegisterGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: group_pb.RegisterGroupResponse) => void): grpc.ClientUnaryCall;
    public registerGroup(request: group_pb.RegisterGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: group_pb.RegisterGroupResponse) => void): grpc.ClientUnaryCall;
    public updateGroup(request: group_pb.UpdateGroupRequest, callback: (error: grpc.ServiceError | null, response: group_pb.UpdateGroupResponse) => void): grpc.ClientUnaryCall;
    public updateGroup(request: group_pb.UpdateGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: group_pb.UpdateGroupResponse) => void): grpc.ClientUnaryCall;
    public updateGroup(request: group_pb.UpdateGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: group_pb.UpdateGroupResponse) => void): grpc.ClientUnaryCall;
    public deleteGroup(request: group_pb.DeleteGroupRequest, callback: (error: grpc.ServiceError | null, response: group_pb.DeleteGroupResponse) => void): grpc.ClientUnaryCall;
    public deleteGroup(request: group_pb.DeleteGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: group_pb.DeleteGroupResponse) => void): grpc.ClientUnaryCall;
    public deleteGroup(request: group_pb.DeleteGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: group_pb.DeleteGroupResponse) => void): grpc.ClientUnaryCall;
}
