"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.profileParamsSchema = exports.profileSchema = void 0;
var zod_1 = require("zod");
exports.profileSchema = zod_1.z.object({
    fullName: zod_1.z.string({
        required_error: 'fullName is required',
        invalid_type_error: 'fullName must be a string',
    }),
    email: zod_1.z.string({
        required_error: 'email is required',
        invalid_type_error: 'email must be a string',
    }),
    website: zod_1.z.string({
        required_error: 'website is required',
        invalid_type_error: 'website must be a string',
    }),
    about: zod_1.z.string({
        required_error: 'about is required',
        invalid_type_error: 'about must be a string',
    }),
});
exports.profileParamsSchema = zod_1.z.object({
    id: zod_1.z.string(),
});
