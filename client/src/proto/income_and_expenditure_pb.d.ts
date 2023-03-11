// package: proto
// file: income_and_expenditure.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class ListIncomeAndExpenditureRequest extends jspb.Message { 
    getUserId(): string;
    setUserId(value: string): ListIncomeAndExpenditureRequest;
    getOccurrenceDate(): string;
    setOccurrenceDate(value: string): ListIncomeAndExpenditureRequest;
    getClassification(): string;
    setClassification(value: string): ListIncomeAndExpenditureRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListIncomeAndExpenditureRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListIncomeAndExpenditureRequest): ListIncomeAndExpenditureRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListIncomeAndExpenditureRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListIncomeAndExpenditureRequest;
    static deserializeBinaryFromReader(message: ListIncomeAndExpenditureRequest, reader: jspb.BinaryReader): ListIncomeAndExpenditureRequest;
}

export namespace ListIncomeAndExpenditureRequest {
    export type AsObject = {
        userId: string,
        occurrenceDate: string,
        classification: string,
    }
}

export class ListIncomeAndExpenditureResponse extends jspb.Message { 
    clearIncomeAndExpenditureListList(): void;
    getIncomeAndExpenditureListList(): Array<IncomeAndExpenditureResponse>;
    setIncomeAndExpenditureListList(value: Array<IncomeAndExpenditureResponse>): ListIncomeAndExpenditureResponse;
    addIncomeAndExpenditureList(value?: IncomeAndExpenditureResponse, index?: number): IncomeAndExpenditureResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListIncomeAndExpenditureResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListIncomeAndExpenditureResponse): ListIncomeAndExpenditureResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListIncomeAndExpenditureResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListIncomeAndExpenditureResponse;
    static deserializeBinaryFromReader(message: ListIncomeAndExpenditureResponse, reader: jspb.BinaryReader): ListIncomeAndExpenditureResponse;
}

export namespace ListIncomeAndExpenditureResponse {
    export type AsObject = {
        incomeAndExpenditureListList: Array<IncomeAndExpenditureResponse.AsObject>,
    }
}

export class IncomeAndExpenditureResponse extends jspb.Message { 
    getId(): number;
    setId(value: number): IncomeAndExpenditureResponse;
    getUserId(): string;
    setUserId(value: string): IncomeAndExpenditureResponse;
    getAmount(): number;
    setAmount(value: number): IncomeAndExpenditureResponse;
    getOccurrenceDate(): string;
    setOccurrenceDate(value: string): IncomeAndExpenditureResponse;
    getUserTagId(): number;
    setUserTagId(value: number): IncomeAndExpenditureResponse;
    getClassification(): string;
    setClassification(value: string): IncomeAndExpenditureResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): IncomeAndExpenditureResponse.AsObject;
    static toObject(includeInstance: boolean, msg: IncomeAndExpenditureResponse): IncomeAndExpenditureResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: IncomeAndExpenditureResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): IncomeAndExpenditureResponse;
    static deserializeBinaryFromReader(message: IncomeAndExpenditureResponse, reader: jspb.BinaryReader): IncomeAndExpenditureResponse;
}

export namespace IncomeAndExpenditureResponse {
    export type AsObject = {
        id: number,
        userId: string,
        amount: number,
        occurrenceDate: string,
        userTagId: number,
        classification: string,
    }
}

export class GetIncomeAndExpenditureRequest extends jspb.Message { 
    getId(): number;
    setId(value: number): GetIncomeAndExpenditureRequest;
    getUserId(): string;
    setUserId(value: string): GetIncomeAndExpenditureRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetIncomeAndExpenditureRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetIncomeAndExpenditureRequest): GetIncomeAndExpenditureRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetIncomeAndExpenditureRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetIncomeAndExpenditureRequest;
    static deserializeBinaryFromReader(message: GetIncomeAndExpenditureRequest, reader: jspb.BinaryReader): GetIncomeAndExpenditureRequest;
}

export namespace GetIncomeAndExpenditureRequest {
    export type AsObject = {
        id: number,
        userId: string,
    }
}

export class GetIncomeAndExpenditureResponse extends jspb.Message { 
    getId(): number;
    setId(value: number): GetIncomeAndExpenditureResponse;
    getUserId(): string;
    setUserId(value: string): GetIncomeAndExpenditureResponse;
    getAmount(): number;
    setAmount(value: number): GetIncomeAndExpenditureResponse;
    getOccurrenceDate(): string;
    setOccurrenceDate(value: string): GetIncomeAndExpenditureResponse;
    getUserTagId(): number;
    setUserTagId(value: number): GetIncomeAndExpenditureResponse;
    getClassification(): string;
    setClassification(value: string): GetIncomeAndExpenditureResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetIncomeAndExpenditureResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetIncomeAndExpenditureResponse): GetIncomeAndExpenditureResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetIncomeAndExpenditureResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetIncomeAndExpenditureResponse;
    static deserializeBinaryFromReader(message: GetIncomeAndExpenditureResponse, reader: jspb.BinaryReader): GetIncomeAndExpenditureResponse;
}

export namespace GetIncomeAndExpenditureResponse {
    export type AsObject = {
        id: number,
        userId: string,
        amount: number,
        occurrenceDate: string,
        userTagId: number,
        classification: string,
    }
}

export class RegisterIncomeAndExpenditureRequest extends jspb.Message { 
    getUserId(): string;
    setUserId(value: string): RegisterIncomeAndExpenditureRequest;
    getAmount(): number;
    setAmount(value: number): RegisterIncomeAndExpenditureRequest;
    getOccurrenceDate(): string;
    setOccurrenceDate(value: string): RegisterIncomeAndExpenditureRequest;
    getUserTagId(): number;
    setUserTagId(value: number): RegisterIncomeAndExpenditureRequest;
    getClassification(): string;
    setClassification(value: string): RegisterIncomeAndExpenditureRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RegisterIncomeAndExpenditureRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RegisterIncomeAndExpenditureRequest): RegisterIncomeAndExpenditureRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RegisterIncomeAndExpenditureRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RegisterIncomeAndExpenditureRequest;
    static deserializeBinaryFromReader(message: RegisterIncomeAndExpenditureRequest, reader: jspb.BinaryReader): RegisterIncomeAndExpenditureRequest;
}

export namespace RegisterIncomeAndExpenditureRequest {
    export type AsObject = {
        userId: string,
        amount: number,
        occurrenceDate: string,
        userTagId: number,
        classification: string,
    }
}

export class RegisterIncomeAndExpenditureResponse extends jspb.Message { 
    getId(): number;
    setId(value: number): RegisterIncomeAndExpenditureResponse;
    getUserId(): string;
    setUserId(value: string): RegisterIncomeAndExpenditureResponse;
    getAmount(): number;
    setAmount(value: number): RegisterIncomeAndExpenditureResponse;
    getOccurrenceDate(): string;
    setOccurrenceDate(value: string): RegisterIncomeAndExpenditureResponse;
    getUserTagId(): number;
    setUserTagId(value: number): RegisterIncomeAndExpenditureResponse;
    getClassification(): string;
    setClassification(value: string): RegisterIncomeAndExpenditureResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RegisterIncomeAndExpenditureResponse.AsObject;
    static toObject(includeInstance: boolean, msg: RegisterIncomeAndExpenditureResponse): RegisterIncomeAndExpenditureResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RegisterIncomeAndExpenditureResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RegisterIncomeAndExpenditureResponse;
    static deserializeBinaryFromReader(message: RegisterIncomeAndExpenditureResponse, reader: jspb.BinaryReader): RegisterIncomeAndExpenditureResponse;
}

export namespace RegisterIncomeAndExpenditureResponse {
    export type AsObject = {
        id: number,
        userId: string,
        amount: number,
        occurrenceDate: string,
        userTagId: number,
        classification: string,
    }
}

export class UpdateIncomeAndExpenditureRequest extends jspb.Message { 
    getId(): number;
    setId(value: number): UpdateIncomeAndExpenditureRequest;
    getUserId(): string;
    setUserId(value: string): UpdateIncomeAndExpenditureRequest;
    getAmount(): number;
    setAmount(value: number): UpdateIncomeAndExpenditureRequest;
    getOccurrenceDate(): string;
    setOccurrenceDate(value: string): UpdateIncomeAndExpenditureRequest;
    getUserTagId(): number;
    setUserTagId(value: number): UpdateIncomeAndExpenditureRequest;
    getClassification(): string;
    setClassification(value: string): UpdateIncomeAndExpenditureRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateIncomeAndExpenditureRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateIncomeAndExpenditureRequest): UpdateIncomeAndExpenditureRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateIncomeAndExpenditureRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateIncomeAndExpenditureRequest;
    static deserializeBinaryFromReader(message: UpdateIncomeAndExpenditureRequest, reader: jspb.BinaryReader): UpdateIncomeAndExpenditureRequest;
}

export namespace UpdateIncomeAndExpenditureRequest {
    export type AsObject = {
        id: number,
        userId: string,
        amount: number,
        occurrenceDate: string,
        userTagId: number,
        classification: string,
    }
}

export class UpdateIncomeAndExpenditureResponse extends jspb.Message { 
    getId(): number;
    setId(value: number): UpdateIncomeAndExpenditureResponse;
    getUserId(): string;
    setUserId(value: string): UpdateIncomeAndExpenditureResponse;
    getAmount(): number;
    setAmount(value: number): UpdateIncomeAndExpenditureResponse;
    getOccurrenceDate(): string;
    setOccurrenceDate(value: string): UpdateIncomeAndExpenditureResponse;
    getUserTagId(): number;
    setUserTagId(value: number): UpdateIncomeAndExpenditureResponse;
    getClassification(): string;
    setClassification(value: string): UpdateIncomeAndExpenditureResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateIncomeAndExpenditureResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateIncomeAndExpenditureResponse): UpdateIncomeAndExpenditureResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateIncomeAndExpenditureResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateIncomeAndExpenditureResponse;
    static deserializeBinaryFromReader(message: UpdateIncomeAndExpenditureResponse, reader: jspb.BinaryReader): UpdateIncomeAndExpenditureResponse;
}

export namespace UpdateIncomeAndExpenditureResponse {
    export type AsObject = {
        id: number,
        userId: string,
        amount: number,
        occurrenceDate: string,
        userTagId: number,
        classification: string,
    }
}

export class DeleteIncomeAndExpenditureRequest extends jspb.Message { 
    getId(): number;
    setId(value: number): DeleteIncomeAndExpenditureRequest;
    getUserId(): string;
    setUserId(value: string): DeleteIncomeAndExpenditureRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteIncomeAndExpenditureRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteIncomeAndExpenditureRequest): DeleteIncomeAndExpenditureRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteIncomeAndExpenditureRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteIncomeAndExpenditureRequest;
    static deserializeBinaryFromReader(message: DeleteIncomeAndExpenditureRequest, reader: jspb.BinaryReader): DeleteIncomeAndExpenditureRequest;
}

export namespace DeleteIncomeAndExpenditureRequest {
    export type AsObject = {
        id: number,
        userId: string,
    }
}

export class DeleteIncomeAndExpenditureResponse extends jspb.Message { 
    getId(): number;
    setId(value: number): DeleteIncomeAndExpenditureResponse;
    getUserId(): string;
    setUserId(value: string): DeleteIncomeAndExpenditureResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteIncomeAndExpenditureResponse.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteIncomeAndExpenditureResponse): DeleteIncomeAndExpenditureResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteIncomeAndExpenditureResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteIncomeAndExpenditureResponse;
    static deserializeBinaryFromReader(message: DeleteIncomeAndExpenditureResponse, reader: jspb.BinaryReader): DeleteIncomeAndExpenditureResponse;
}

export namespace DeleteIncomeAndExpenditureResponse {
    export type AsObject = {
        id: number,
        userId: string,
    }
}
