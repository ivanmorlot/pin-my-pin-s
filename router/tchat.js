const { Router } = require("express");

const tchatRouter = Router();

tchatRouter.get("/tchat/market/message", (request, response) => {
    console.log(response);
});