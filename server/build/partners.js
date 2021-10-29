"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var ps = fs_1.default.readFileSync(path_1.default.join(__dirname, "partners.json"), "utf-8");
var partners = JSON.parse(ps);
exports.default = partners;
