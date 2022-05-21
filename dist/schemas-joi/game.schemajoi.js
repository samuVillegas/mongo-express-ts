"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const gameSchema = joi_1.default.object({
    id: joi_1.default.string(),
    name: joi_1.default.string().required(),
    price: joi_1.default.number().required(),
    category: joi_1.default.string().required()
});
exports.default = gameSchema;
//# sourceMappingURL=game.schemajoi.js.map