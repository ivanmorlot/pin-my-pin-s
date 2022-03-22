const express = require("express");
const helmet = require("helmet");
const { config } = require("dotenv")

const Database = require("./db/database");
const { registerSchemas } = require("./middleware")

const userRouter = require("./router/user");
const productRouter = require("./router/product");

config()

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(helmet());

app.use((req, res, next) => {
  req.database = new Database(process.env.url)
    .connect(process.env.dbname)
     .then(database => {
         req.database = database
         next()
     })
     .catch(error => {
         next(error)
     })
});

// app.use(registerSchemas);

app.use("/v1/api/market", userRouter)
app.use("/v1/api/market", productRouter)


app.use((error, req, res, next) => {
    const code = error.code || 500;
    res.status(500).json({ message: error.message, code })
}),

module.exports = app;
