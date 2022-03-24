const { Router } = require("express");

const userRouter = Router();

userRouter.get("/user", (request, response) => {
    response
        .status(200)
        .end(JSON.stringify({
            code: 200,
            results: [],
        }));
});

module.exports = userRouter;