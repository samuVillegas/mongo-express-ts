"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const database_service_1 = require("./services/database.service");
const games_router_1 = require("./routes/games.router");
const auth_router_1 = require("./routes/auth.router");
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const app = express_1.default();
const port = 8070; // default port to listen
//Documentation
const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Backend Reto Final Etapa 1',
            version: '1.0.0'
        },
        servers: [
            {
                url: 'http://localhost:8090'
            }
        ]
    },
    apis: ['./dist/docs/*.js']
};
const swaggerDocs = swagger_jsdoc_1.default(swaggerOptions);
app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerDocs));
database_service_1.connectToDatabase()
    .then(() => {
    // send all calls to /games to our gamesRouter
    app.use("/games", games_router_1.gamesRouter);
    app.use("/auth", auth_router_1.authRouter);
    // start the Express server
    app.listen(port, () => {
        console.log(`Server started at http://localhost:${port}`);
    });
})
    .catch((error) => {
    console.error("Database connection failed", error);
    process.exit();
});
//# sourceMappingURL=index.js.map