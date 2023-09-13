"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProfile = exports.updateProfile = exports.getProfile = exports.getAllProfiles = exports.createProfile = void 0;
var profile_model_1 = __importDefault(require("../models/profile.model"));
var createProfile = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, fullName, email, website, about, newProfile, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, fullName = _a.fullName, email = _a.email, website = _a.website, about = _a.about;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                if (!fullName || !email || !website || !about) {
                    return [2 /*return*/, res.status(400).json({
                            responseMessage: 'profile creation failed: please provide all requested details',
                        })];
                }
                return [4 /*yield*/, profile_model_1.default.create({
                        fullName: fullName,
                        email: email,
                        website: website,
                        about: about,
                    })];
            case 2:
                newProfile = _b.sent();
                res
                    .status(201)
                    .json({ responseMessage: 'profile created successfully', newProfile: newProfile });
                return [3 /*break*/, 4];
            case 3:
                error_1 = _b.sent();
                if (error_1 instanceof Error) {
                    res.status(500).json({
                        responseMessage: 'profile creation failed: please try again',
                        error: error_1.message,
                    });
                }
                else {
                    res.status(500).json({
                        responseMessage: 'an error occurred',
                        error: error_1,
                    });
                }
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.createProfile = createProfile;
var getAllProfiles = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var allProfiles, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, profile_model_1.default.find({})];
            case 1:
                allProfiles = _a.sent();
                if (!allProfiles) {
                    res.status(404).json({
                        responseMessage: 'no profiles found: fetch failed',
                    });
                }
                res.status(200).json({
                    responseMessage: 'all profiles fetched successfully',
                    profilesCount: allProfiles.length,
                    allProfiles: allProfiles,
                });
                return [3 /*break*/, 3];
            case 2:
                error_2 = _a.sent();
                if (error_2 instanceof Error) {
                    res.status(500).json({
                        responseMessage: 'profile creation failed: please try again',
                        error: error_2.message,
                    });
                }
                else {
                    res.status(500).json({
                        responseMessage: 'an error occurred',
                        error: error_2,
                    });
                }
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getAllProfiles = getAllProfiles;
var getProfile = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, profile, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, profile_model_1.default.findOne({ _id: id })];
            case 2:
                profile = _a.sent();
                if (!profile) {
                    return [2 /*return*/, res.status(404).json({
                            responseMessage: "profile with id: ".concat(id, " not found"),
                        })];
                }
                res.status(200).json({
                    responseMessage: 'profile fetched successfully',
                    profile: profile,
                });
                return [3 /*break*/, 4];
            case 3:
                error_3 = _a.sent();
                if (error_3 instanceof Error) {
                    res.status(500).json({
                        responseMessage: 'profile creation failed: please try again',
                        error: error_3.message,
                    });
                }
                else {
                    res.status(500).json({
                        responseMessage: 'an error occurred',
                        error: error_3,
                    });
                }
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.getProfile = getProfile;
var updateProfile = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, fullName, email, website, about, id, profileToUpdate, updatedProfile, error_4;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, fullName = _a.fullName, email = _a.email, website = _a.website, about = _a.about;
                id = req.params.id;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 4, , 5]);
                if (!fullName || !email || !website || !about) {
                    return [2 /*return*/, res.status(400).json({
                            responseMessage: 'profile creation failed: please provide all requested details',
                        })];
                }
                return [4 /*yield*/, profile_model_1.default.findById(id)];
            case 2:
                profileToUpdate = _b.sent();
                if (!profileToUpdate) {
                    return [2 /*return*/, res
                            .status(404)
                            .json({ responseMessage: "profile with id: ".concat(id, " not found") })];
                }
                return [4 /*yield*/, profile_model_1.default.findByIdAndUpdate({ _id: id }, req.body, {
                        new: true,
                        runValidators: true,
                    })];
            case 3:
                updatedProfile = _b.sent();
                res.status(200).json({
                    responseMessage: 'profile updated successfully',
                    updatedProfile: updatedProfile,
                });
                return [3 /*break*/, 5];
            case 4:
                error_4 = _b.sent();
                if (error_4 instanceof Error) {
                    res.status(500).json({
                        responseMessage: 'profile creation failed: please try again',
                        error: error_4.message,
                    });
                }
                else {
                    res.status(500).json({
                        responseMessage: 'an error occurred',
                        error: error_4,
                    });
                }
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.updateProfile = updateProfile;
var deleteProfile = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, profileToDelete, deletedProfile, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 4, , 5]);
                return [4 /*yield*/, profile_model_1.default.findById(id)];
            case 2:
                profileToDelete = _a.sent();
                if (!profileToDelete) {
                    return [2 /*return*/, res
                            .status(404)
                            .json({ responseMessage: "profile with id: ".concat(id, " not found") })];
                }
                return [4 /*yield*/, profile_model_1.default.findByIdAndRemove({ _id: id })];
            case 3:
                deletedProfile = _a.sent();
                res.status(200).json({
                    responseMessage: 'profile deleted successfully',
                    deletedProfile: deletedProfile,
                });
                return [3 /*break*/, 5];
            case 4:
                error_5 = _a.sent();
                if (error_5 instanceof Error) {
                    res.status(500).json({
                        responseMessage: 'profile creation failed: please try again',
                        error: error_5.message,
                    });
                }
                else {
                    res.status(500).json({
                        responseMessage: 'an error occurred',
                        error: error_5,
                    });
                }
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.deleteProfile = deleteProfile;
