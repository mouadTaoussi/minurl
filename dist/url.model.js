"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var URL = new mongoose_1.Schema({
    name: { type: String, required: false },
    url: { type: String, required: false },
});
var urlModel = mongoose_1.model("urls", URL);
exports.default = urlModel;
