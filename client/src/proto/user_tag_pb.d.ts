// package: proto
// file: user_tag.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class ListUserTagRequest extends jspb.Message { 
    getUserId(): string;
    setUserId(value: string): ListUserTagRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListUserTagRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListUserTagRequest): ListUserTagRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListUserTagRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListUserTagRequest;
    static deserializeBinaryFromReader(message: ListUserTagRequest, reader: jspb.BinaryReader): ListUserTagRequest;
}

export namespace ListUserTagRequest {
    export type AsObject = {
        userId: string,
    }
}

export class ListUserTagResponse extends jspb.Message { 
    clearUserTagListList(): void;
    getUserTagListList(): Array<UserTagResponse>;
    setUserTagListList(value: Array<UserTagResponse>): ListUserTagResponse;
    addUserTagList(value?: UserTagResponse, index?: number): UserTagResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListUserTagResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListUserTagResponse): ListUserTagResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListUserTagResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListUserTagResponse;
    static deserializeBinaryFromReader(message: ListUserTagResponse, reader: jspb.BinaryReader): ListUserTagResponse;
}

export namespace ListUserTagResponse {
    export type AsObject = {
        userTagListList: Array<UserTagResponse.AsObject>,
    }
}

export class UserTagResponse extends jspb.Message { 
    getId(): number;
    setId(value: number): UserTagResponse;
    getUserId(): string;
    setUserId(value: string): UserTagResponse;
    getTagName(): string;
    setTagName(value: string): UserTagResponse;
    getHasGroup(): boolean;
    setHasGroup(value: boolean): UserTagResponse;
    getGroupId(): number;
    setGroupId(value: number): UserTagResponse;
    getGrantLimit(): string;
    setGrantLimit(value: string): UserTagResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserTagResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UserTagResponse): UserTagResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserTagResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserTagResponse;
    static deserializeBinaryFromReader(message: UserTagResponse, reader: jspb.BinaryReader): UserTagResponse;
}

export namespace UserTagResponse {
    export type AsObject = {
        id: number,
        userId: string,
        tagName: string,
        hasGroup: boolean,
        groupId: number,
        grantLimit: string,
    }
}

export class GetUserTagRequest extends jspb.Message { 
    getUserId(): string;
    setUserId(value: string): GetUserTagRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetUserTagRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetUserTagRequest): GetUserTagRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetUserTagRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetUserTagRequest;
    static deserializeBinaryFromReader(message: GetUserTagRequest, reader: jspb.BinaryReader): GetUserTagRequest;
}

export namespace GetUserTagRequest {
    export type AsObject = {
        userId: string,
    }
}

export class GetUserTagResponse extends jspb.Message { 
    getId(): number;
    setId(value: number): GetUserTagResponse;
    getUserId(): string;
    setUserId(value: string): GetUserTagResponse;
    getTagName(): string;
    setTagName(value: string): GetUserTagResponse;
    getHasGroup(): boolean;
    setHasGroup(value: boolean): GetUserTagResponse;
    getGroupId(): number;
    setGroupId(value: number): GetUserTagResponse;
    getGrantLimit(): string;
    setGrantLimit(value: string): GetUserTagResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetUserTagResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetUserTagResponse): GetUserTagResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetUserTagResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetUserTagResponse;
    static deserializeBinaryFromReader(message: GetUserTagResponse, reader: jspb.BinaryReader): GetUserTagResponse;
}

export namespace GetUserTagResponse {
    export type AsObject = {
        id: number,
        userId: string,
        tagName: string,
        hasGroup: boolean,
        groupId: number,
        grantLimit: string,
    }
}

export class RegisterUserTagRequest extends jspb.Message { 
    getUserId(): string;
    setUserId(value: string): RegisterUserTagRequest;
    getTagName(): string;
    setTagName(value: string): RegisterUserTagRequest;
    getHasGroup(): boolean;
    setHasGroup(value: boolean): RegisterUserTagRequest;
    getGroupId(): number;
    setGroupId(value: number): RegisterUserTagRequest;
    getGrantLimit(): string;
    setGrantLimit(value: string): RegisterUserTagRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RegisterUserTagRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RegisterUserTagRequest): RegisterUserTagRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RegisterUserTagRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RegisterUserTagRequest;
    static deserializeBinaryFromReader(message: RegisterUserTagRequest, reader: jspb.BinaryReader): RegisterUserTagRequest;
}

export namespace RegisterUserTagRequest {
    export type AsObject = {
        userId: string,
        tagName: string,
        hasGroup: boolean,
        groupId: number,
        grantLimit: string,
    }
}

export class RegisterUserTagResponse extends jspb.Message { 
    getId(): number;
    setId(value: number): RegisterUserTagResponse;
    getUserId(): string;
    setUserId(value: string): RegisterUserTagResponse;
    getTagName(): string;
    setTagName(value: string): RegisterUserTagResponse;
    getHasGroup(): boolean;
    setHasGroup(value: boolean): RegisterUserTagResponse;
    getGroupId(): number;
    setGroupId(value: number): RegisterUserTagResponse;
    getGrantLimit(): string;
    setGrantLimit(value: string): RegisterUserTagResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RegisterUserTagResponse.AsObject;
    static toObject(includeInstance: boolean, msg: RegisterUserTagResponse): RegisterUserTagResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RegisterUserTagResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RegisterUserTagResponse;
    static deserializeBinaryFromReader(message: RegisterUserTagResponse, reader: jspb.BinaryReader): RegisterUserTagResponse;
}

export namespace RegisterUserTagResponse {
    export type AsObject = {
        id: number,
        userId: string,
        tagName: string,
        hasGroup: boolean,
        groupId: number,
        grantLimit: string,
    }
}

export class UpdateUserTagRequest extends jspb.Message { 
    getUserId(): string;
    setUserId(value: string): UpdateUserTagRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateUserTagRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateUserTagRequest): UpdateUserTagRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateUserTagRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateUserTagRequest;
    static deserializeBinaryFromReader(message: UpdateUserTagRequest, reader: jspb.BinaryReader): UpdateUserTagRequest;
}

export namespace UpdateUserTagRequest {
    export type AsObject = {
        userId: string,
    }
}

export class UpdateUserTagResponse extends jspb.Message { 
    getId(): number;
    setId(value: number): UpdateUserTagResponse;
    getUserId(): string;
    setUserId(value: string): UpdateUserTagResponse;
    getTagName(): string;
    setTagName(value: string): UpdateUserTagResponse;
    getHasGroup(): boolean;
    setHasGroup(value: boolean): UpdateUserTagResponse;
    getGroupId(): number;
    setGroupId(value: number): UpdateUserTagResponse;
    getGrantLimit(): string;
    setGrantLimit(value: string): UpdateUserTagResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateUserTagResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateUserTagResponse): UpdateUserTagResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateUserTagResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateUserTagResponse;
    static deserializeBinaryFromReader(message: UpdateUserTagResponse, reader: jspb.BinaryReader): UpdateUserTagResponse;
}

export namespace UpdateUserTagResponse {
    export type AsObject = {
        id: number,
        userId: string,
        tagName: string,
        hasGroup: boolean,
        groupId: number,
        grantLimit: string,
    }
}

export class DeleteUserTagRequest extends jspb.Message { 
    getUserId(): string;
    setUserId(value: string): DeleteUserTagRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteUserTagRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteUserTagRequest): DeleteUserTagRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteUserTagRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteUserTagRequest;
    static deserializeBinaryFromReader(message: DeleteUserTagRequest, reader: jspb.BinaryReader): DeleteUserTagRequest;
}

export namespace DeleteUserTagRequest {
    export type AsObject = {
        userId: string,
    }
}

export class DeleteUserTagResponse extends jspb.Message { 
    getId(): number;
    setId(value: number): DeleteUserTagResponse;
    getUserId(): string;
    setUserId(value: string): DeleteUserTagResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteUserTagResponse.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteUserTagResponse): DeleteUserTagResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteUserTagResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteUserTagResponse;
    static deserializeBinaryFromReader(message: DeleteUserTagResponse, reader: jspb.BinaryReader): DeleteUserTagResponse;
}

export namespace DeleteUserTagResponse {
    export type AsObject = {
        id: number,
        userId: string,
    }
}
