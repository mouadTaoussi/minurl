"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config = {
    PORT: process.env.PORT || 8000,
    database_connection: "mongodb://minurluser:minurluser@cluster0-shard-00-00.irglh.mongodb.net:27017,cluster0-shard-00-01.irglh.mongodb.net:27017,cluster0-shard-00-02.irglh.mongodb.net:27017/minurl?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority"
};
exports.default = config;
