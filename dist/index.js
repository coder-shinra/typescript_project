"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const server_config_1 = __importDefault(require("./configs/server.config"));
const app = (0, express_1.default)();
app.listen(server_config_1.default.PORT, () => {
    console.log(`server is running at ${server_config_1.default.PORT}`);
});
