// package: proto
// file: group.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class ListGroupRequest extends jspb.Message { 
    getUserId(): string;
    setUserId(value: string): ListGroupRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListGroupRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListGroupRequest): ListGroupRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListGroupRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListGroupRequest;
    static deserializeBinaryFromReader(message: ListGroupRequest, reader: jspb.BinaryReader): ListGroupRequest;
}

export namespace ListGroupRequest {
    export type AsObject = {
        userId: string,
    }
}

export class ListGroupResponse extends jspb.Message { 
    clearGroupListList(): void;
    getGroupListList(): Array<GroupResponse>;
    setGroupListList(value: Array<GroupResponse>): ListGroupResponse;
    addGroupList(value?: GroupResponse, index?: number): GroupResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListGroupResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListGroupResponse): ListGroupResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListGroupResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListGroupResponse;
    static deserializeBinaryFromReader(message: ListGroupResponse, reader: jspb.BinaryReader): ListGroupResponse;
}

export namespace ListGroupResponse {
    export type AsObject = {
        groupListList: Array<GroupResponse.AsObject>,
    }
}

export class GroupResponse extends jspb.Message { 
    getId(): number;
    setId(value: number): GroupResponse;
    getUserId(): string;
    setUserId(value: string): GroupResponse;
    getGroupName(): string;
    setGroupName(value: string): GroupResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GroupResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GroupResponse): GroupResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GroupResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GroupResponse;
    static deserializeBinaryFromReader(message: GroupResponse, reader: jspb.BinaryReader): GroupResponse;
}

export namespace GroupResponse {
    export type AsObject = {
        id: number,
        userId: string,
        groupName: string,
    }
}

export class GetGroupRequest extends jspb.Message { 
    getUserId(): string;
    setUserId(value: string): GetGroupRequest;
    getGroupName(): string;
    setGroupName(value: string): GetGroupRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetGroupRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetGroupRequest): GetGroupRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetGroupRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetGroupRequest;
    static deserializeBinaryFromReader(message: GetGroupRequest, reader: jspb.BinaryReader): GetGroupRequest;
}

export namespace GetGroupRequest {
    export type AsObject = {
        userId: string,
        groupName: string,
    }
}

export class GetGroupResponse extends jspb.Message { 
    getId(): number;
    setId(value: number): GetGroupResponse;
    getUserId(): string;
    setUserId(value: string): GetGroupResponse;
    getGroupName(): string;
    setGroupName(value: string): GetGroupResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetGroupResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetGroupResponse): GetGroupResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetGroupResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetGroupResponse;
    static deserializeBinaryFromReader(message: GetGroupResponse, reader: jspb.BinaryReader): GetGroupResponse;
}

export namespace GetGroupResponse {
    export type AsObject = {
        id: number,
        userId: string,
        groupName: string,
    }
}

export class RegisterGroupRequest extends jspb.Message { 
    getUserId(): string;
    setUserId(value: string): RegisterGroupRequest;
    getGroupName(): string;
    setGroupName(value: string): RegisterGroupRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RegisterGroupRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RegisterGroupRequest): RegisterGroupRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RegisterGroupRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RegisterGroupRequest;
    static deserializeBinaryFromReader(message: RegisterGroupRequest, reader: jspb.BinaryReader): RegisterGroupRequest;
}

export namespace RegisterGroupRequest {
    export type AsObject = {
        userId: string,
        groupName: string,
    }
}

export class RegisterGroupResponse extends jspb.Message { 
    getId(): number;
    setId(value: number): RegisterGroupResponse;
    getUserId(): string;
    setUserId(value: string): RegisterGroupResponse;
    getGroupName(): string;
    setGroupName(value: string): RegisterGroupResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RegisterGroupResponse.AsObject;
    static toObject(includeInstance: boolean, msg: RegisterGroupResponse): RegisterGroupResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RegisterGroupResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RegisterGroupResponse;
    static deserializeBinaryFromReader(message: RegisterGroupResponse, reader: jspb.BinaryReader): RegisterGroupResponse;
}

export namespace RegisterGroupResponse {
    export type AsObject = {
        id: number,
        userId: string,
        groupName: string,
    }
}

export class UpdateGroupRequest extends jspb.Message { 
    getId(): number;
    setId(value: number): UpdateGroupRequest;
    getUserId(): string;
    setUserId(value: string): UpdateGroupRequest;
    getGroupName(): string;
    setGroupName(value: string): UpdateGroupRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateGroupRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateGroupRequest): UpdateGroupRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateGroupRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateGroupRequest;
    static deserializeBinaryFromReader(message: UpdateGroupRequest, reader: jspb.BinaryReader): UpdateGroupRequest;
}

export namespace UpdateGroupRequest {
    export type AsObject = {
        id: number,
        userId: string,
        groupName: string,
    }
}

export class UpdateGroupResponse extends jspb.Message { 
    getId(): number;
    setId(value: number): UpdateGroupResponse;
    getUserId(): string;
    setUserId(value: string): UpdateGroupResponse;
    getGroupName(): string;
    setGroupName(value: string): UpdateGroupResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateGroupResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateGroupResponse): UpdateGroupResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateGroupResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateGroupResponse;
    static deserializeBinaryFromReader(message: UpdateGroupResponse, reader: jspb.BinaryReader): UpdateGroupResponse;
}

export namespace UpdateGroupResponse {
    export type AsObject = {
        id: number,
        userId: string,
        groupName: string,
    }
}

export class DeleteGroupRequest extends jspb.Message { 
    getId(): number;
    setId(value: number): DeleteGroupRequest;
    getUserId(): string;
    setUserId(value: string): DeleteGroupRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteGroupRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteGroupRequest): DeleteGroupRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteGroupRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteGroupRequest;
    static deserializeBinaryFromReader(message: DeleteGroupRequest, reader: jspb.BinaryReader): DeleteGroupRequest;
}

export namespace DeleteGroupRequest {
    export type AsObject = {
        id: number,
        userId: string,
    }
}

export class DeleteGroupResponse extends jspb.Message { 
    getId(): number;
    setId(value: number): DeleteGroupResponse;
    getUserId(): string;
    setUserId(value: string): DeleteGroupResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteGroupResponse.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteGroupResponse): DeleteGroupResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteGroupResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteGroupResponse;
    static deserializeBinaryFromReader(message: DeleteGroupResponse, reader: jspb.BinaryReader): DeleteGroupResponse;
}

export namespace DeleteGroupResponse {
    export type AsObject = {
        id: number,
        userId: string,
    }
}
