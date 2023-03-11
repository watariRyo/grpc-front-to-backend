// package: proto
// file: income_and_expenditure.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as income_and_expenditure_pb from "./income_and_expenditure_pb";

interface IIncomeAndExpenditureServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    listIncomeAndExpenditure: IIncomeAndExpenditureServiceService_IListIncomeAndExpenditure;
    getIncomeAndExpenditure: IIncomeAndExpenditureServiceService_IGetIncomeAndExpenditure;
    registerIncomeAndExpenditure: IIncomeAndExpenditureServiceService_IRegisterIncomeAndExpenditure;
    updateIncomeAndExpenditure: IIncomeAndExpenditureServiceService_IUpdateIncomeAndExpenditure;
    deleteIncomeAndExpenditure: IIncomeAndExpenditureServiceService_IDeleteIncomeAndExpenditure;
}

interface IIncomeAndExpenditureServiceService_IListIncomeAndExpenditure extends grpc.MethodDefinition<income_and_expenditure_pb.ListIncomeAndExpenditureRequest, income_and_expenditure_pb.ListIncomeAndExpenditureResponse> {
    path: "/proto.IncomeAndExpenditureService/ListIncomeAndExpenditure";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<income_and_expenditure_pb.ListIncomeAndExpenditureRequest>;
    requestDeserialize: grpc.deserialize<income_and_expenditure_pb.ListIncomeAndExpenditureRequest>;
    responseSerialize: grpc.serialize<income_and_expenditure_pb.ListIncomeAndExpenditureResponse>;
    responseDeserialize: grpc.deserialize<income_and_expenditure_pb.ListIncomeAndExpenditureResponse>;
}
interface IIncomeAndExpenditureServiceService_IGetIncomeAndExpenditure extends grpc.MethodDefinition<income_and_expenditure_pb.GetIncomeAndExpenditureRequest, income_and_expenditure_pb.GetIncomeAndExpenditureResponse> {
    path: "/proto.IncomeAndExpenditureService/GetIncomeAndExpenditure";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<income_and_expenditure_pb.GetIncomeAndExpenditureRequest>;
    requestDeserialize: grpc.deserialize<income_and_expenditure_pb.GetIncomeAndExpenditureRequest>;
    responseSerialize: grpc.serialize<income_and_expenditure_pb.GetIncomeAndExpenditureResponse>;
    responseDeserialize: grpc.deserialize<income_and_expenditure_pb.GetIncomeAndExpenditureResponse>;
}
interface IIncomeAndExpenditureServiceService_IRegisterIncomeAndExpenditure extends grpc.MethodDefinition<income_and_expenditure_pb.RegisterIncomeAndExpenditureRequest, income_and_expenditure_pb.RegisterIncomeAndExpenditureResponse> {
    path: "/proto.IncomeAndExpenditureService/RegisterIncomeAndExpenditure";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<income_and_expenditure_pb.RegisterIncomeAndExpenditureRequest>;
    requestDeserialize: grpc.deserialize<income_and_expenditure_pb.RegisterIncomeAndExpenditureRequest>;
    responseSerialize: grpc.serialize<income_and_expenditure_pb.RegisterIncomeAndExpenditureResponse>;
    responseDeserialize: grpc.deserialize<income_and_expenditure_pb.RegisterIncomeAndExpenditureResponse>;
}
interface IIncomeAndExpenditureServiceService_IUpdateIncomeAndExpenditure extends grpc.MethodDefinition<income_and_expenditure_pb.UpdateIncomeAndExpenditureRequest, income_and_expenditure_pb.UpdateIncomeAndExpenditureResponse> {
    path: "/proto.IncomeAndExpenditureService/UpdateIncomeAndExpenditure";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<income_and_expenditure_pb.UpdateIncomeAndExpenditureRequest>;
    requestDeserialize: grpc.deserialize<income_and_expenditure_pb.UpdateIncomeAndExpenditureRequest>;
    responseSerialize: grpc.serialize<income_and_expenditure_pb.UpdateIncomeAndExpenditureResponse>;
    responseDeserialize: grpc.deserialize<income_and_expenditure_pb.UpdateIncomeAndExpenditureResponse>;
}
interface IIncomeAndExpenditureServiceService_IDeleteIncomeAndExpenditure extends grpc.MethodDefinition<income_and_expenditure_pb.DeleteIncomeAndExpenditureRequest, income_and_expenditure_pb.DeleteIncomeAndExpenditureResponse> {
    path: "/proto.IncomeAndExpenditureService/DeleteIncomeAndExpenditure";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<income_and_expenditure_pb.DeleteIncomeAndExpenditureRequest>;
    requestDeserialize: grpc.deserialize<income_and_expenditure_pb.DeleteIncomeAndExpenditureRequest>;
    responseSerialize: grpc.serialize<income_and_expenditure_pb.DeleteIncomeAndExpenditureResponse>;
    responseDeserialize: grpc.deserialize<income_and_expenditure_pb.DeleteIncomeAndExpenditureResponse>;
}

export const IncomeAndExpenditureServiceService: IIncomeAndExpenditureServiceService;

export interface IIncomeAndExpenditureServiceServer {
    listIncomeAndExpenditure: grpc.handleUnaryCall<income_and_expenditure_pb.ListIncomeAndExpenditureRequest, income_and_expenditure_pb.ListIncomeAndExpenditureResponse>;
    getIncomeAndExpenditure: grpc.handleUnaryCall<income_and_expenditure_pb.GetIncomeAndExpenditureRequest, income_and_expenditure_pb.GetIncomeAndExpenditureResponse>;
    registerIncomeAndExpenditure: grpc.handleUnaryCall<income_and_expenditure_pb.RegisterIncomeAndExpenditureRequest, income_and_expenditure_pb.RegisterIncomeAndExpenditureResponse>;
    updateIncomeAndExpenditure: grpc.handleUnaryCall<income_and_expenditure_pb.UpdateIncomeAndExpenditureRequest, income_and_expenditure_pb.UpdateIncomeAndExpenditureResponse>;
    deleteIncomeAndExpenditure: grpc.handleUnaryCall<income_and_expenditure_pb.DeleteIncomeAndExpenditureRequest, income_and_expenditure_pb.DeleteIncomeAndExpenditureResponse>;
}

export interface IIncomeAndExpenditureServiceClient {
    listIncomeAndExpenditure(request: income_and_expenditure_pb.ListIncomeAndExpenditureRequest, callback: (error: grpc.ServiceError | null, response: income_and_expenditure_pb.ListIncomeAndExpenditureResponse) => void): grpc.ClientUnaryCall;
    listIncomeAndExpenditure(request: income_and_expenditure_pb.ListIncomeAndExpenditureRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: income_and_expenditure_pb.ListIncomeAndExpenditureResponse) => void): grpc.ClientUnaryCall;
    listIncomeAndExpenditure(request: income_and_expenditure_pb.ListIncomeAndExpenditureRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: income_and_expenditure_pb.ListIncomeAndExpenditureResponse) => void): grpc.ClientUnaryCall;
    getIncomeAndExpenditure(request: income_and_expenditure_pb.GetIncomeAndExpenditureRequest, callback: (error: grpc.ServiceError | null, response: income_and_expenditure_pb.GetIncomeAndExpenditureResponse) => void): grpc.ClientUnaryCall;
    getIncomeAndExpenditure(request: income_and_expenditure_pb.GetIncomeAndExpenditureRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: income_and_expenditure_pb.GetIncomeAndExpenditureResponse) => void): grpc.ClientUnaryCall;
    getIncomeAndExpenditure(request: income_and_expenditure_pb.GetIncomeAndExpenditureRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: income_and_expenditure_pb.GetIncomeAndExpenditureResponse) => void): grpc.ClientUnaryCall;
    registerIncomeAndExpenditure(request: income_and_expenditure_pb.RegisterIncomeAndExpenditureRequest, callback: (error: grpc.ServiceError | null, response: income_and_expenditure_pb.RegisterIncomeAndExpenditureResponse) => void): grpc.ClientUnaryCall;
    registerIncomeAndExpenditure(request: income_and_expenditure_pb.RegisterIncomeAndExpenditureRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: income_and_expenditure_pb.RegisterIncomeAndExpenditureResponse) => void): grpc.ClientUnaryCall;
    registerIncomeAndExpenditure(request: income_and_expenditure_pb.RegisterIncomeAndExpenditureRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: income_and_expenditure_pb.RegisterIncomeAndExpenditureResponse) => void): grpc.ClientUnaryCall;
    updateIncomeAndExpenditure(request: income_and_expenditure_pb.UpdateIncomeAndExpenditureRequest, callback: (error: grpc.ServiceError | null, response: income_and_expenditure_pb.UpdateIncomeAndExpenditureResponse) => void): grpc.ClientUnaryCall;
    updateIncomeAndExpenditure(request: income_and_expenditure_pb.UpdateIncomeAndExpenditureRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: income_and_expenditure_pb.UpdateIncomeAndExpenditureResponse) => void): grpc.ClientUnaryCall;
    updateIncomeAndExpenditure(request: income_and_expenditure_pb.UpdateIncomeAndExpenditureRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: income_and_expenditure_pb.UpdateIncomeAndExpenditureResponse) => void): grpc.ClientUnaryCall;
    deleteIncomeAndExpenditure(request: income_and_expenditure_pb.DeleteIncomeAndExpenditureRequest, callback: (error: grpc.ServiceError | null, response: income_and_expenditure_pb.DeleteIncomeAndExpenditureResponse) => void): grpc.ClientUnaryCall;
    deleteIncomeAndExpenditure(request: income_and_expenditure_pb.DeleteIncomeAndExpenditureRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: income_and_expenditure_pb.DeleteIncomeAndExpenditureResponse) => void): grpc.ClientUnaryCall;
    deleteIncomeAndExpenditure(request: income_and_expenditure_pb.DeleteIncomeAndExpenditureRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: income_and_expenditure_pb.DeleteIncomeAndExpenditureResponse) => void): grpc.ClientUnaryCall;
}

export class IncomeAndExpenditureServiceClient extends grpc.Client implements IIncomeAndExpenditureServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public listIncomeAndExpenditure(request: income_and_expenditure_pb.ListIncomeAndExpenditureRequest, callback: (error: grpc.ServiceError | null, response: income_and_expenditure_pb.ListIncomeAndExpenditureResponse) => void): grpc.ClientUnaryCall;
    public listIncomeAndExpenditure(request: income_and_expenditure_pb.ListIncomeAndExpenditureRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: income_and_expenditure_pb.ListIncomeAndExpenditureResponse) => void): grpc.ClientUnaryCall;
    public listIncomeAndExpenditure(request: income_and_expenditure_pb.ListIncomeAndExpenditureRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: income_and_expenditure_pb.ListIncomeAndExpenditureResponse) => void): grpc.ClientUnaryCall;
    public getIncomeAndExpenditure(request: income_and_expenditure_pb.GetIncomeAndExpenditureRequest, callback: (error: grpc.ServiceError | null, response: income_and_expenditure_pb.GetIncomeAndExpenditureResponse) => void): grpc.ClientUnaryCall;
    public getIncomeAndExpenditure(request: income_and_expenditure_pb.GetIncomeAndExpenditureRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: income_and_expenditure_pb.GetIncomeAndExpenditureResponse) => void): grpc.ClientUnaryCall;
    public getIncomeAndExpenditure(request: income_and_expenditure_pb.GetIncomeAndExpenditureRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: income_and_expenditure_pb.GetIncomeAndExpenditureResponse) => void): grpc.ClientUnaryCall;
    public registerIncomeAndExpenditure(request: income_and_expenditure_pb.RegisterIncomeAndExpenditureRequest, callback: (error: grpc.ServiceError | null, response: income_and_expenditure_pb.RegisterIncomeAndExpenditureResponse) => void): grpc.ClientUnaryCall;
    public registerIncomeAndExpenditure(request: income_and_expenditure_pb.RegisterIncomeAndExpenditureRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: income_and_expenditure_pb.RegisterIncomeAndExpenditureResponse) => void): grpc.ClientUnaryCall;
    public registerIncomeAndExpenditure(request: income_and_expenditure_pb.RegisterIncomeAndExpenditureRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: income_and_expenditure_pb.RegisterIncomeAndExpenditureResponse) => void): grpc.ClientUnaryCall;
    public updateIncomeAndExpenditure(request: income_and_expenditure_pb.UpdateIncomeAndExpenditureRequest, callback: (error: grpc.ServiceError | null, response: income_and_expenditure_pb.UpdateIncomeAndExpenditureResponse) => void): grpc.ClientUnaryCall;
    public updateIncomeAndExpenditure(request: income_and_expenditure_pb.UpdateIncomeAndExpenditureRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: income_and_expenditure_pb.UpdateIncomeAndExpenditureResponse) => void): grpc.ClientUnaryCall;
    public updateIncomeAndExpenditure(request: income_and_expenditure_pb.UpdateIncomeAndExpenditureRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: income_and_expenditure_pb.UpdateIncomeAndExpenditureResponse) => void): grpc.ClientUnaryCall;
    public deleteIncomeAndExpenditure(request: income_and_expenditure_pb.DeleteIncomeAndExpenditureRequest, callback: (error: grpc.ServiceError | null, response: income_and_expenditure_pb.DeleteIncomeAndExpenditureResponse) => void): grpc.ClientUnaryCall;
    public deleteIncomeAndExpenditure(request: income_and_expenditure_pb.DeleteIncomeAndExpenditureRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: income_and_expenditure_pb.DeleteIncomeAndExpenditureResponse) => void): grpc.ClientUnaryCall;
    public deleteIncomeAndExpenditure(request: income_and_expenditure_pb.DeleteIncomeAndExpenditureRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: income_and_expenditure_pb.DeleteIncomeAndExpenditureResponse) => void): grpc.ClientUnaryCall;
}
