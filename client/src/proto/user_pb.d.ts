// package: proto
// file: user.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class GetUserRequest extends jspb.Message { 
    getUserId(): string;
    setUserId(value: string): GetUserRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetUserRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetUserRequest): GetUserRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetUserRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetUserRequest;
    static deserializeBinaryFromReader(message: GetUserRequest, reader: jspb.BinaryReader): GetUserRequest;
}

export namespace GetUserRequest {
    export type AsObject = {
        userId: string,
    }
}

export class GetUserResponse extends jspb.Message { 
    getUserId(): string;
    setUserId(value: string): GetUserResponse;
    getIsPrivacyChecked(): boolean;
    setIsPrivacyChecked(value: boolean): GetUserResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetUserResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetUserResponse): GetUserResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetUserResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetUserResponse;
    static deserializeBinaryFromReader(message: GetUserResponse, reader: jspb.BinaryReader): GetUserResponse;
}

export namespace GetUserResponse {
    export type AsObject = {
        userId: string,
        isPrivacyChecked: boolean,
    }
}

export class RegisterUserRequest extends jspb.Message { 
    getUserId(): string;
    setUserId(value: string): RegisterUserRequest;
    getPassword(): string;
    setPassword(value: string): RegisterUserRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RegisterUserRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RegisterUserRequest): RegisterUserRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RegisterUserRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RegisterUserRequest;
    static deserializeBinaryFromReader(message: RegisterUserRequest, reader: jspb.BinaryReader): RegisterUserRequest;
}

export namespace RegisterUserRequest {
    export type AsObject = {
        userId: string,
        password: string,
    }
}

export class RegisterUserResponse extends jspb.Message { 
    getUserId(): string;
    setUserId(value: string): RegisterUserResponse;
    getSessionId(): string;
    setSessionId(value: string): RegisterUserResponse;
    getAccessToken(): string;
    setAccessToken(value: string): RegisterUserResponse;

    hasAccessTokenExpiresAt(): boolean;
    clearAccessTokenExpiresAt(): void;
    getAccessTokenExpiresAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setAccessTokenExpiresAt(value?: google_protobuf_timestamp_pb.Timestamp): RegisterUserResponse;
    getRefreshToken(): string;
    setRefreshToken(value: string): RegisterUserResponse;

    hasRefreshTokenExpiresAt(): boolean;
    clearRefreshTokenExpiresAt(): void;
    getRefreshTokenExpiresAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setRefreshTokenExpiresAt(value?: google_protobuf_timestamp_pb.Timestamp): RegisterUserResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RegisterUserResponse.AsObject;
    static toObject(includeInstance: boolean, msg: RegisterUserResponse): RegisterUserResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RegisterUserResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RegisterUserResponse;
    static deserializeBinaryFromReader(message: RegisterUserResponse, reader: jspb.BinaryReader): RegisterUserResponse;
}

export namespace RegisterUserResponse {
    export type AsObject = {
        userId: string,
        sessionId: string,
        accessToken: string,
        accessTokenExpiresAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        refreshToken: string,
        refreshTokenExpiresAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class UpdateUserRequest extends jspb.Message { 
    getUserId(): string;
    setUserId(value: string): UpdateUserRequest;
    getPassword(): string;
    setPassword(value: string): UpdateUserRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateUserRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateUserRequest): UpdateUserRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateUserRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateUserRequest;
    static deserializeBinaryFromReader(message: UpdateUserRequest, reader: jspb.BinaryReader): UpdateUserRequest;
}

export namespace UpdateUserRequest {
    export type AsObject = {
        userId: string,
        password: string,
    }
}

export class UpdateUserResponse extends jspb.Message { 
    getUserId(): string;
    setUserId(value: string): UpdateUserResponse;
    getIsPrivacyChecked(): boolean;
    setIsPrivacyChecked(value: boolean): UpdateUserResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateUserResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateUserResponse): UpdateUserResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateUserResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateUserResponse;
    static deserializeBinaryFromReader(message: UpdateUserResponse, reader: jspb.BinaryReader): UpdateUserResponse;
}

export namespace UpdateUserResponse {
    export type AsObject = {
        userId: string,
        isPrivacyChecked: boolean,
    }
}

export class DeleteUserRequest extends jspb.Message { 
    getUserId(): string;
    setUserId(value: string): DeleteUserRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteUserRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteUserRequest): DeleteUserRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteUserRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteUserRequest;
    static deserializeBinaryFromReader(message: DeleteUserRequest, reader: jspb.BinaryReader): DeleteUserRequest;
}

export namespace DeleteUserRequest {
    export type AsObject = {
        userId: string,
    }
}

export class DeleteUserResponse extends jspb.Message { 
    getUserId(): string;
    setUserId(value: string): DeleteUserResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteUserResponse.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteUserResponse): DeleteUserResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteUserResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteUserResponse;
    static deserializeBinaryFromReader(message: DeleteUserResponse, reader: jspb.BinaryReader): DeleteUserResponse;
}

export namespace DeleteUserResponse {
    export type AsObject = {
        userId: string,
    }
}

export class LoginUserRequest extends jspb.Message { 
    getUserId(): string;
    setUserId(value: string): LoginUserRequest;
    getPassword(): string;
    setPassword(value: string): LoginUserRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LoginUserRequest.AsObject;
    static toObject(includeInstance: boolean, msg: LoginUserRequest): LoginUserRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LoginUserRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LoginUserRequest;
    static deserializeBinaryFromReader(message: LoginUserRequest, reader: jspb.BinaryReader): LoginUserRequest;
}

export namespace LoginUserRequest {
    export type AsObject = {
        userId: string,
        password: string,
    }
}

export class LoginUserResponse extends jspb.Message { 
    getUserId(): string;
    setUserId(value: string): LoginUserResponse;
    getSessionId(): string;
    setSessionId(value: string): LoginUserResponse;
    getAccessToken(): string;
    setAccessToken(value: string): LoginUserResponse;

    hasAccessTokenExpiresAt(): boolean;
    clearAccessTokenExpiresAt(): void;
    getAccessTokenExpiresAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setAccessTokenExpiresAt(value?: google_protobuf_timestamp_pb.Timestamp): LoginUserResponse;
    getRefreshToken(): string;
    setRefreshToken(value: string): LoginUserResponse;

    hasRefreshTokenExpiresAt(): boolean;
    clearRefreshTokenExpiresAt(): void;
    getRefreshTokenExpiresAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setRefreshTokenExpiresAt(value?: google_protobuf_timestamp_pb.Timestamp): LoginUserResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LoginUserResponse.AsObject;
    static toObject(includeInstance: boolean, msg: LoginUserResponse): LoginUserResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LoginUserResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LoginUserResponse;
    static deserializeBinaryFromReader(message: LoginUserResponse, reader: jspb.BinaryReader): LoginUserResponse;
}

export namespace LoginUserResponse {
    export type AsObject = {
        userId: string,
        sessionId: string,
        accessToken: string,
        accessTokenExpiresAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        refreshToken: string,
        refreshTokenExpiresAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class LogoutUserRequest extends jspb.Message { 
    getUserId(): string;
    setUserId(value: string): LogoutUserRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LogoutUserRequest.AsObject;
    static toObject(includeInstance: boolean, msg: LogoutUserRequest): LogoutUserRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LogoutUserRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LogoutUserRequest;
    static deserializeBinaryFromReader(message: LogoutUserRequest, reader: jspb.BinaryReader): LogoutUserRequest;
}

export namespace LogoutUserRequest {
    export type AsObject = {
        userId: string,
    }
}

export class LogoutUserResponse extends jspb.Message { 
    getUserId(): string;
    setUserId(value: string): LogoutUserResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LogoutUserResponse.AsObject;
    static toObject(includeInstance: boolean, msg: LogoutUserResponse): LogoutUserResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LogoutUserResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LogoutUserResponse;
    static deserializeBinaryFromReader(message: LogoutUserResponse, reader: jspb.BinaryReader): LogoutUserResponse;
}

export namespace LogoutUserResponse {
    export type AsObject = {
        userId: string,
    }
}
