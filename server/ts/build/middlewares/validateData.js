"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateData = void 0;
var validateData = function (dataSchema) {
    return function (req, res, next) {
        try {
            if (dataSchema.body && req.body) {
                req.body = dataSchema.body.parse(req.body);
                // console.log(req.body);
            }
            if (dataSchema.params && req.body) {
                req.params = dataSchema.params.parse(req.params);
                // console.log(req.params);
            }
            // if (dataSchema.query && req.query) {
            //   req.query = dataSchema.query.parse(req.query);
            // }
            return next();
        }
        catch (error) {
            console.log(error);
            next(error);
        }
    };
};
exports.validateData = validateData;
