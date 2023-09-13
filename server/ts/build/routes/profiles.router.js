"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var profiles_controller_1 = require("../controllers/profiles.controller");
var validateData_1 = require("../middlewares/validateData");
var profile_schema_1 = require("../schemas/profile.schema");
var params_schema_1 = require("../schemas/params.schema");
var router = express_1.default.Router();
// method 1: api link becomes "/api/v1/profiles/<end-point>" - my preferred method because of simplicity and clarity.
router.post('/create-profile', (0, validateData_1.validateData)({ body: profile_schema_1.profileSchema }), profiles_controller_1.createProfile);
router.get('/get-all-profiles', profiles_controller_1.getAllProfiles);
router.get('/get-profile/:id', (0, validateData_1.validateData)({ params: params_schema_1.paramsSchema }), profiles_controller_1.getProfile);
router.patch('/update-profile/:id', (0, validateData_1.validateData)({ params: params_schema_1.paramsSchema, body: profile_schema_1.profileSchema }), profiles_controller_1.updateProfile);
router.delete('/delete-profile/:id', (0, validateData_1.validateData)({ params: params_schema_1.paramsSchema }), profiles_controller_1.deleteProfile);
exports.default = router;
// method 2: api link stays as "/api/v1/profiles" - only the request type (GET, POST, PATCH, or DELETE) changes.
// router.route('/').post(createProfile).get(getAllProfiles);
// router.route('/:id').get(getProfile).patch(updateProfile).delete(deleteProfile);
// export default router;
