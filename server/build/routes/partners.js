"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var index_1 = require("../controllers/partners/index");
var router = (0, express_1.Router)();
router.get('/all_partners', index_1.getAllPartners);
router.get('/filtered_partners', index_1.getFilteredPartners);
exports.default = router;
