import express from "express";
import { connectToDatabase } from "./services/database.service";
import { gamesRouter } from "./routes/games.router";
import { authRouter } from "./routes/auth.router";
import swaggerUi from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';
const app = express();
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
}

const swaggerDocs = swaggerJsDoc(swaggerOptions)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))



connectToDatabase()
    .then(() => {
        // send all calls to /games to our gamesRouter
        app.use("/games", gamesRouter);
        app.use("/auth", authRouter);
        // start the Express server
        app.listen(port, () => {
            console.log(`Server started at http://localhost:${port}`);
        });
    })
    .catch((error: Error) => {
        console.error("Database connection failed", error);
        process.exit();
    });
