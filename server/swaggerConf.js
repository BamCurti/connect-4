const swaggerJsDocs = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const conf = {
    swaggerDefinition: {
        swagger: "2.0",
        info: {
            title: "Connect 4 API",
            description: "The API for a replicated of the famous game Connect 4.",
            version: "1.0.0",
            servers: ["http://localhost:3000"]
        }
    },
    apis: ['./src/modules/*/*.routes.js'],
};

const swaggerConf = (app) => {
    const docs = swaggerJsDocs(conf);
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(docs));
}

module.exports = swaggerConf;