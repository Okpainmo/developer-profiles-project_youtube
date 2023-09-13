"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var profileSchema = new mongoose_1.default.Schema({
    fullName: {
        type: String,
        required: [true, 'please provide developer full name'],
    },
    email: {
        type: String,
        required: [true, 'please provide developer email address'],
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'Please provide a valid email address',
        ],
        unique: true,
    },
    website: {
        type: String,
        required: [true, 'please provide developer website'],
    },
    about: {
        type: String,
        required: [true, 'please provide developer bio'],
    },
}, { timestamps: true });
exports.default = mongoose_1.default.model('profile', profileSchema);
