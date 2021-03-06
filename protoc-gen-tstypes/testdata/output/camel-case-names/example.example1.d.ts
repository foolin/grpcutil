// Code generated by protoc-gen-tstypes. DO NOT EDIT.

declare namespace example {

    export enum SearchRequest_Corpus {
        UNIVERSAL = "UNIVERSAL",
        WEB = "WEB",
        IMAGES = "IMAGES",
        LOCAL = "LOCAL",
        NEWS = "NEWS",
        PRODUCTS = "PRODUCTS",
        VIDEO = "VIDEO",
    }
    export interface SearchRequest_XyzEntry {
        key?: string;
        value?: number;
    }

    export interface SearchRequest {
        query?: string;
        pageNumber?: number;
        resultPerPage?: number;
        corpus?: SearchRequest_Corpus;
        sentAt?: google.protobuf.Timestamp;
        xyz?: { [key: string]: number };
        zytes?: Uint8Array;
    }

    export interface SearchResponse {
        results?: Array<string>;
        numResults?: number;
        originalRequest?: SearchRequest;
    }

}

